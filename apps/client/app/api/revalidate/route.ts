import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { isCacheTag } from "@/utils/cacheTags";

// Called by the admin app after it saves content, e.g.
//   POST /api/revalidate
//   Authorization: Bearer <REVALIDATE_SECRET>
//   { "tags": ["hero-videos"] }
// Visitors keep getting the old data instantly while the next request
// fetches fresh data in the background.

const isAuthorized = (request: Request) => {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) return false;

  const provided = request.headers.get("authorization")?.replace(/^Bearer /, "") ?? "";
  const a = Buffer.from(provided);
  const b = Buffer.from(secret);

  // Constant-time compare so the secret can't be guessed from response timing.
  return a.length === b.length && timingSafeEqual(a, b);
};

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const tags: unknown = body?.tags;

  if (!Array.isArray(tags) || tags.length === 0 || !tags.every(isCacheTag)) {
    return Response.json(
      { error: 'Expected { "tags": [...] } with known cache tags' },
      { status: 400 },
    );
  }

  for (const tag of tags) {
    revalidateTag(tag, "max");
  }

  return Response.json({ revalidated: tags });
}

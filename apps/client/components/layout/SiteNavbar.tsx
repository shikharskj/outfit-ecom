import Navbar, { type NavCategory } from "@/components/layout/Navbar";
import { CATEGORIES, categoryHref } from "@/utils/categories";
import { getTaxonomy } from "@/utils/getTaxonomy";

// Plain category links, shown until the taxonomy is ready. It's cached, so in
// practice the full navbar is part of the static page.
export const fallbackNavCategories: NavCategory[] = CATEGORIES.map((category) => ({
  label: category.label,
  href: categoryHref(category.slug),
  groups: [],
}));

// Fetches the groups on the server and hands them to the client Navbar.
export default async function SiteNavbar() {
  const taxonomy = await getTaxonomy();

  return (
    <Navbar
      categories={taxonomy.map((category) => ({
        label: category.label,
        href: category.href,
        groups: category.groups.map((group) => ({
          label: group.label,
          href: group.href,
        })),
      }))}
    />
  );
}

// Emphasises the part of `text` that matches `query`.
// - "match" (product names, categories): the matched part is bold, so it's
//   clear why a result appeared.
// - "completion" (suggestions): the reverse; the typed part is light and the
//   rest is bold, since the rest is the new information.
export default function Highlight({
  text,
  query,
  mode = "match",
}: {
  text: string;
  query: string;
  mode?: "match" | "completion";
}) {
  const needle = query.trim().toLowerCase();
  const index = needle ? text.toLowerCase().indexOf(needle) : -1;
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + needle.length);
  const after = text.slice(index + needle.length);

  return mode === "match" ? (
    <>
      {before}
      <strong className="font-semibold text-gray-950">{match}</strong>
      {after}
    </>
  ) : (
    <>
      <span className="font-semibold">{before}</span>
      <span className="font-normal text-gray-500">{match}</span>
      <span className="font-semibold">{after}</span>
    </>
  );
}

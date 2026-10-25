import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cacheTags";
import {
  CATEGORIES,
  FALLBACK_LABEL,
  categoryHref,
  groupHref,
  slugify,
  type CategoryKey,
} from "@/utils/categories";
import { getProducts, type Product } from "@/utils/getProducts";

export type TaxonomyType = { slug: string; label: string; count: number };

export type TaxonomyGroup = {
  slug: string;
  label: string;
  href: string;
  count: number;
  imageSrc: string; // first product's image, for group tiles
  types: TaxonomyType[];
};

export type TaxonomyCategory = {
  key: CategoryKey;
  slug: string;
  label: string;
  href: string;
  count: number;
  groups: TaxonomyGroup[];
};

export const groupLabelOf = (product: Product) =>
  product.productGroup || FALLBACK_LABEL;

export const typeLabelOf = (product: Product) =>
  product.productType || FALLBACK_LABEL;

const byCountDesc = (a: { count: number }, b: { count: number }) => b.count - a.count;

// Category -> group -> type, with product counts. Worked out once from the
// products and cached, so the navbar, category pages and filters all share it.
// Groups and types are sorted by size until the API provides an order.
export const getTaxonomy = async (): Promise<TaxonomyCategory[]> => {
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.products);

  const groups = await getProducts();

  return CATEGORIES.flatMap((category) => {
    const products =
      groups.find((group) => group.category === category.key)?.products ?? [];
    if (products.length === 0) return [];

    const byGroup = new Map<string, Product[]>();
    for (const product of products) {
      const label = groupLabelOf(product);
      byGroup.set(label, [...(byGroup.get(label) ?? []), product]);
    }

    const taxonomyGroups = [...byGroup].map(([label, groupProducts]) => {
      const typeCounts = new Map<string, number>();
      for (const product of groupProducts) {
        const type = typeLabelOf(product);
        typeCounts.set(type, (typeCounts.get(type) ?? 0) + 1);
      }

      const slug = slugify(label);
      return {
        slug,
        label,
        href: groupHref(category.slug, slug),
        count: groupProducts.length,
        imageSrc: groupProducts[0].images.main,
        types: [...typeCounts]
          .map(([typeLabel, count]) => ({ slug: slugify(typeLabel), label: typeLabel, count }))
          .sort(byCountDesc),
      };
    });

    return [
      {
        key: category.key,
        slug: category.slug,
        label: category.label,
        href: categoryHref(category.slug),
        count: products.length,
        groups: taxonomyGroups.sort(byCountDesc),
      },
    ];
  });
};

// Products for one category, or one group within it. Unknown slugs give null
// so pages can call notFound().
export const getCategoryProducts = async (categorySlug: string, groupSlug?: string) => {
  const taxonomy = await getTaxonomy();
  const category = taxonomy.find((entry) => entry.slug === categorySlug);
  if (!category) return null;

  const group = groupSlug
    ? category.groups.find((entry) => entry.slug === groupSlug)
    : undefined;
  if (groupSlug && !group) return null;

  const [categoryGroup] = await getProducts(category.key);
  const products = (categoryGroup?.products ?? []).filter(
    (product) => !group || slugify(groupLabelOf(product)) === group.slug,
  );

  return { category, group, products };
};

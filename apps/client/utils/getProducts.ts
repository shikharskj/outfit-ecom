import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/utils/cacheTags";

export type ProductsResponse = CategoryGroup[];

export type CategoryGroup = {
  category: "women" | "men" | "kids" | "home" | "beauty";
  count: number;
  products: Product[];
};

export type Product = {
  id: string; // article code (one colour), e.g. "1199249001"
  productCode: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string; // H&M code, e.g. "ladies_basics_trousersleggings"
  productType: string; // e.g. "Sweatshirt", "Jeans", "Duvet cover set", "Eau de parfum"
  productGroup: string; // e.g. "Sweatshirts & hoodies", "Bottoms", "Bedding", "Fragrance"
  price: {
    currency: string; // "INR"
    current: number;
    regular: number;
    onSale: boolean;
    formatted: string; // "Rs.999.00"
    discountPercentage: string | null; // "-15%"
  };
  color: { name: string; hex: string; shade: string | null };
  colorVariants: {
    articleCode: string;
    colorName: string;
    hex: string;
    image: string;
  }[];
  sizes: { sizeCode: string; name: string; inStock: boolean }[];
  availability: string | null;
  isNewArrival: boolean;
  tags: (
    "new" | "sale" | "premium" | "sustainable" | "basics" | "divided" | "denim"
  )[];
  markers: string[];
  description: string | null;
  compositions: string[];
  materials: { name: string; amount: string }[];
  sustainableMaterials: string[];
  careInstructions: string[];
  measurements: string[] | null;
  attributes: Record<string, string | string[]>; // fit, length, ingredients, etc.
  images: {
    main: string;
    model: string;
    gallery: { url: string; type: string }[];
  };
  sourceUrl: string; // original H&M product page
};

// Mock data until the products API exists, grouped by category.
const productsResponse: ProductsResponse = [
  {
    category: "women",
    count: 30,
    products: [
      {
        id: "1199249001",
        productCode: "1199249_group_001",
        name: "Wide joggers",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_trousersleggings",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1199249001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872027/hm/women/1199249001_1.jpg",
          },
          {
            articleCode: "1199249066",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/ed4b1b9091c9796437b9476f727c97b220c1f5d1.jpg",
          },
          {
            articleCode: "1199249067",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/345e51aa05de219392b7274012afbc2f5b0bd4ec.jpg",
          },
          {
            articleCode: "1199249055",
            colorName: "Rust red",
            hex: "#7C423A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/d9e562600f1dfa7ee825d0ab119753d8127bed9f.jpg",
          },
          {
            articleCode: "1199249058",
            colorName: "Dark grey",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/ab074486bd6897dbd1a60b40ac3a945bce2b61fe.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1199249001008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1199249001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1199249001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1199249001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1199249001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1199249001013",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1199249001014",
            name: "XXL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Loose-fit joggers in sweatshirt fabric with an elasticated, drawstring waist, soft brushed inside, discreet pockets in the side seams and wide legs.",
        compositions: ["Cotton 62%, Polyester 38%"],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 31%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Inside leg: Length: 76.5 cm (size M/T(EUR M))",
          "XXS: Width: 58 cm, Length: 69 cm",
          "XS: Width: 62 cm, Length: 70 cm",
          "S: Width: 70 cm, Length: 71 cm",
          "M: Width: 78 cm, Length: 71 cm",
          "L: Width: 86 cm, Length: 72 cm",
          "XL: Width: 94 cm, Length: 72 cm",
          "XXL: Width: 1.02 m, Length: 72 cm",
        ],
        attributes: {
          productTypeName: "Trousers",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          fits: ["Regular fit"],
          clothingStyle: ["Joggers", "Wide leg"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872027/hm/women/1199249001_1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872068/hm/women/1199249001_2.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872068/hm/women/1199249001_2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872198/hm/women/148c7e2f8f89e8236199649b320a3c9d02d761a5.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/59b3bd00db6b05877725227b20b68894cfb5cb2d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872027/hm/women/1199249001_1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/58f49ef77ae670523192ef8ce009c0bab3afc953.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1199249001.html",
      },
      {
        id: "1366369003",
        productCode: "1366369_group_003",
        name: "Off-the-shoulder sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_hoodiesswetshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#272836",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1366369003",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/a911f4480045ffc739c2231e67c68dd5019d1b1d.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1366369003008",
            name: "XXS",
            inStock: false,
          },
          {
            sizeCode: "1366369003009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1366369003010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1366369003011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1366369003012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1366369003013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided"],
        markers: [],
        description:
          "Loose-fit off-the-shoulder top in printed fleece sweatshirt fabric featuring dropped shoulders and ribbing at the cuffs and hem.",
        compositions: [
          "Shell: Cotton 60%, Polyester 40%",
          "Rib: Cotton 58%, Polyester 38%, Elastane 4%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
          {
            name: "Cotton",
            amount: "58%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
          {
            name: "Elastane",
            amount: "4%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 16%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 95 cm, Length: 45 cm",
          "XS: Width: 98 cm, Length: 47 cm",
          "S: Width: 1.06 m, Length: 49 cm",
          "M: Width: 1.12 m, Length: 51 cm",
          "L: Width: 1.18 m, Length: 52 cm",
          "XL: Width: 1.28 m, Length: 54 cm",
        ],
        attributes: {
          weight: "300 g",
          productTypeName: "SWEATSHIRT",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Loose fit"],
          clothingStyle: ["Sweatshirt", "Off-the-shoulder"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/a911f4480045ffc739c2231e67c68dd5019d1b1d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/527552a1f7ec00fe465f646a24af5760073e93c2.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/527552a1f7ec00fe465f646a24af5760073e93c2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/f97efec0900040eb6681a995e738cbedc8244910.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/2621e38200eebe7db1480c9ea8fea5c5f673a6ac.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872204/hm/women/f3c3755b436dff27c124bb92ae94f1cfd733a0a4.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/a911f4480045ffc739c2231e67c68dd5019d1b1d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/81f0c801d39a0e10497c70c32765ed4c89908b63.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/fd9f3a737756a4d5e746cdb225a09ea5502fa32c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1366369003.html",
      },
      {
        id: "1035873001",
        productCode: "1035873_group_001",
        name: "Flared leggings",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_trousers_leggings",
        productType: "Leggings",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1035873001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/bb4a6eb5802a911c84e725699ff46354a36773fe.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1035873001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1035873001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1035873001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1035873001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1035873001013",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1035873001014",
            name: "XXL",
            inStock: false,
          },
          {
            sizeCode: "1035873001015",
            name: "3XL",
            inStock: false,
          },
          {
            sizeCode: "1035873001016",
            name: "4XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Leggings in jersey. High waist with concealed elastication, and flared legs.",
        compositions: ["Polyester 97%, Elastane 3%"],
        materials: [
          {
            name: "Polyester",
            amount: "97%",
          },
          {
            name: "Elastane",
            amount: "3%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 95%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 63 cm, Length: 75 cm",
          "S: Width: 68 cm, Length: 76 cm",
          "M: Width: 76 cm, Length: 76 cm",
          "L: Width: 84 cm, Length: 76 cm",
          "XL: Width: 93 cm, Length: 75 cm",
        ],
        attributes: {
          productTypeName: "Leggings",
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          clothingStyle: ["Flared", "Jazz pants"],
          countryOfProduction: "Cambodia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/bb4a6eb5802a911c84e725699ff46354a36773fe.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/a82b953cc10e3aa4fc2f61b00997a95ab41513c5.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/a82b953cc10e3aa4fc2f61b00997a95ab41513c5.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/5222e62a8f4caa6d03653c51f11dc2f892d5f410.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/5203439a9c92afe7c6d742d857ba725f019b6dbb.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872202/hm/women/bb4a6eb5802a911c84e725699ff46354a36773fe.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872203/hm/women/5c972250f4bfc0b0213e3958926eb4e1ddd1242a.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1035873001.html",
      },
      {
        id: "1371131001",
        productCode: "1371131_group_001",
        name: "Embellished halterneck top",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_halterneck",
        productType: "Top",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#3C2A2B",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1371131001",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872203/hm/women/fa67b512643ae18a3d97cbfcd5978c1086d8b976.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1371131001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1371131001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1371131001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1371131001012",
            name: "L",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided"],
        markers: [],
        description:
          "Top in sheer mesh embellished with all-over shimmering sequins, and long beaded strands on the front. Features a round neckline, narrow halterneck ties and a concealed zip and hook-and-eye fastener at one side. Gently rounded hem. Lined.",
        compositions: ["Shell: Polyester 100%", "Lining: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 100%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "No iron",
          "Unwashable",
          "No dry clean",
        ],
        measurements: [
          "XS: Width: 76 cm, Length: 42 cm",
          "S: Width: 84 cm, Length: 43 cm",
          "M: Width: 92 cm, Length: 43 cm",
          "L: Width: 1.00 m, Length: 43 cm",
        ],
        attributes: {
          productTypeName: "Top",
          concepts: ["DIVIDED"],
          modelHeightGarmentSize:
            "The model is 177cm/5'10\" and wears a size S",
          garmentLength: ["Regular length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Open back"],
          neckLineStyle: ["Halterneck", "Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872203/hm/women/fa67b512643ae18a3d97cbfcd5978c1086d8b976.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872204/hm/women/a739f9574c36c48110aabda1396feaf4278d2800.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872204/hm/women/a739f9574c36c48110aabda1396feaf4278d2800.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872204/hm/women/efb8103427035137382137c18781dae0cdbee68f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872205/hm/women/5981817ae129d7e18af1d65a99a14834f3794be2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872205/hm/women/c477b46d0adfa88595b767d6296fbbdc63d6d5ee.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872203/hm/women/fa67b512643ae18a3d97cbfcd5978c1086d8b976.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872205/hm/women/09b6934cd2b2f6a4c086a14515b7e9d7bc8f3858.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1371131001.html",
      },
      {
        id: "1199249066",
        productCode: "1199249_group_066",
        name: "Wide joggers",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_trousersleggings",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#272836",
          shade:
            "Navy blue|Bright blue|Cobalt blue|Indigo|Dark blue|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1199249066",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/ed4b1b9091c9796437b9476f727c97b220c1f5d1.jpg",
          },
          {
            articleCode: "1199249001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872027/hm/women/1199249001_1.jpg",
          },
          {
            articleCode: "1199249067",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/345e51aa05de219392b7274012afbc2f5b0bd4ec.jpg",
          },
          {
            articleCode: "1199249055",
            colorName: "Rust red",
            hex: "#7C423A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/d9e562600f1dfa7ee825d0ab119753d8127bed9f.jpg",
          },
          {
            articleCode: "1199249058",
            colorName: "Dark grey",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/ab074486bd6897dbd1a60b40ac3a945bce2b61fe.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1199249066008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1199249066009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1199249066010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1199249066011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1199249066012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1199249066013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "divided", "basics"],
        markers: [],
        description:
          "Loose-fit joggers in sweatshirt fabric with an elasticated, drawstring waist, soft brushed inside, discreet pockets in the side seams and wide legs.",
        compositions: [
          "Shell: Cotton 62%, Polyester 38%",
          "Pocket lining: Cotton 100%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 33%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Inside leg: Length: 76.5 cm (size M/T(EUR M))",
          "XXS: Width: 58 cm, Length: 69 cm",
          "XS: Width: 62 cm, Length: 70 cm",
          "S: Width: 70 cm, Length: 71 cm",
          "M: Width: 78 cm, Length: 71 cm",
          "L: Width: 86 cm, Length: 72 cm",
          "XL: Width: 94 cm, Length: 72 cm",
        ],
        attributes: {
          productTypeName: "Trousers",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          fits: ["Regular fit"],
          clothingStyle: ["Joggers", "Wide leg"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/ed4b1b9091c9796437b9476f727c97b220c1f5d1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872205/hm/women/df6fe80ed13f3fa37c0074f109814cb90d44e150.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872205/hm/women/df6fe80ed13f3fa37c0074f109814cb90d44e150.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872206/hm/women/6db7ed486a4f2311c9077d63ed0fc0a8da802829.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872206/hm/women/42792d327fab3597fa24c31021957aa2abab19aa.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872207/hm/women/ed72a83843e162132b3b3bdc93c2c9eac44df0d2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/ed4b1b9091c9796437b9476f727c97b220c1f5d1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872207/hm/women/2b7769107c01c1bb6756e69b70cb235cc248db9d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1199249066.html",
      },
      {
        id: "1199249067",
        productCode: "1199249_group_067",
        name: "Wide joggers",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_trousersleggings",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#3C2A2B",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1199249067",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/345e51aa05de219392b7274012afbc2f5b0bd4ec.jpg",
          },
          {
            articleCode: "1199249001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872027/hm/women/1199249001_1.jpg",
          },
          {
            articleCode: "1199249066",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/ed4b1b9091c9796437b9476f727c97b220c1f5d1.jpg",
          },
          {
            articleCode: "1199249055",
            colorName: "Rust red",
            hex: "#7C423A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872200/hm/women/d9e562600f1dfa7ee825d0ab119753d8127bed9f.jpg",
          },
          {
            articleCode: "1199249058",
            colorName: "Dark grey",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872201/hm/women/ab074486bd6897dbd1a60b40ac3a945bce2b61fe.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1199249067008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1199249067009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1199249067010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1199249067011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1199249067012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1199249067013",
            name: "XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Loose-fit joggers in sweatshirt fabric with an elasticated, drawstring waist, soft brushed inside, discreet pockets in the side seams and wide legs.",
        compositions: ["Cotton 62%, Polyester 38%"],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 31%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Inside leg: Length: 76.5 cm (size M/T(EUR M))",
          "XXS: Width: 58 cm, Length: 69 cm",
          "XS: Width: 62 cm, Length: 70 cm",
          "S: Width: 70 cm, Length: 71 cm",
          "M: Width: 78 cm, Length: 71 cm",
          "L: Width: 86 cm, Length: 72 cm",
          "XL: Width: 94 cm, Length: 72 cm",
        ],
        attributes: {
          productTypeName: "Trousers",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          fits: ["Regular fit"],
          clothingStyle: ["Joggers", "Wide leg"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/345e51aa05de219392b7274012afbc2f5b0bd4ec.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872219/hm/women/6e2286f034adcfa5b9d45589c77356441fcbdc88.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872219/hm/women/6e2286f034adcfa5b9d45589c77356441fcbdc88.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872207/hm/women/82251ba1c49e1aee213f978dfc81944920b6d893.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872207/hm/women/8df975023fa5ae0a6496421a53011ae9a50a7c74.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872209/hm/women/f97926e454a8bdc2f84eefbd3540a0d2a53068cd.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872199/hm/women/345e51aa05de219392b7274012afbc2f5b0bd4ec.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872209/hm/women/c6c2cc4d5a98e358c5d19ed12df66cdd67dd02bb.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1199249067.html",
      },
      {
        id: "1222670054",
        productCode: "1222670_group_054",
        name: "Wide High Waist Jeans",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_jeans_wide",
        productType: "Jeans",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark denim blue",
          hex: "#2E3036",
          shade: "Bright blue|Pastel blue|Blue grey|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1222670054",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872210/hm/women/f0a202d187d94b4e7be0303d9d3ba76da6684e99.jpg",
          },
          {
            articleCode: "1222670056",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872212/hm/women/ce81936d2d2b29ec58a5ca8ad48bccfd9e5f4fb4.jpg",
          },
          {
            articleCode: "1222670055",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872213/hm/women/c2cb0cc1bbc6a6049f1f7968738f5a066736f9e0.jpg",
          },
          {
            articleCode: "1222670025",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872212/hm/women/992a6ceb769ee6fdb83184e6f5c430599922e3a1.jpg",
          },
          {
            articleCode: "1222670038",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872213/hm/women/0af5855e48b97bd65d125b9da100133a11441fab.jpg",
          },
          {
            articleCode: "1222670043",
            colorName: "Denim grey",
            hex: "#ACAAAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872214/hm/women/ee9fb1babc49ec3837fe716800a380f291b75172.jpg",
          },
          {
            articleCode: "1222670060",
            colorName: "Dark brown",
            hex: "#453D33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872214/hm/women/41372b9c4177b0257fa6e29645561c8e64433b44.jpg",
          },
          {
            articleCode: "1222670037",
            colorName: "White",
            hex: "#EFEEEA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872215/hm/women/b071b96ab3f98ed6dba631fd5ca4538c56080819.jpg",
          },
          {
            articleCode: "1222670052",
            colorName: "Light denim blue",
            hex: "#80AAD8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872214/hm/women/f62b285ce802d157fba37be97176b689ebba69ab.jpg",
          },
          {
            articleCode: "1222670023",
            colorName: "Black",
            hex: "#000000",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872215/hm/women/88ffcd3655a36bcd6d3bf65d49c953e25fd3a91e.jpg",
          },
          {
            articleCode: "1222670035",
            colorName: "Navy denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872216/hm/women/2f7704281e209dabc0f2332e34b2a4bef248d48b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1222670054016",
            name: "4",
            inStock: true,
          },
          {
            sizeCode: "1222670054017",
            name: "6",
            inStock: true,
          },
          {
            sizeCode: "1222670054018",
            name: "8",
            inStock: true,
          },
          {
            sizeCode: "1222670054019",
            name: "10",
            inStock: true,
          },
          {
            sizeCode: "1222670054020",
            name: "12",
            inStock: true,
          },
          {
            sizeCode: "1222670054021",
            name: "14",
            inStock: true,
          },
          {
            sizeCode: "1222670054022",
            name: "16",
            inStock: true,
          },
          {
            sizeCode: "1222670054023",
            name: "18",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "denim"],
        markers: [],
        description:
          "5-pocket jeans in rigid cotton denim that feels firm at first but then softens and loosens with wear. Wide leg with a regular fit from the waist to the hip and a wide cut from the thigh to the hem. High waist with a zip fly and button. Regular length, designed to hit the top of the foot with little or no stacking.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 19%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Tumble dry low",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Waist: Circumference: 79.5 cm (size 12T(EUR 40))",
          "Inside leg: Length: 81 cm (size 12T(EUR 40))",
          "4: Width: 65 cm, Length: 72 cm",
          "6: Width: 68 cm, Length: 73 cm",
          "8: Width: 72 cm, Length: 73 cm",
          "10: Width: 77 cm, Length: 74 cm",
          "12: Width: 80 cm, Length: 74 cm",
          "14: Width: 84 cm, Length: 74 cm",
          "16: Width: 88 cm, Length: 74 cm",
          "18: Width: 92 cm, Length: 73 cm",
        ],
        attributes: {
          weight: "580 g",
          productTypeName: "JEANS",
          concepts: ["DENIM"],
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          fits: ["Regular fit"],
          clothingStyle: ["Wide leg", "Straight leg"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872210/hm/women/f0a202d187d94b4e7be0303d9d3ba76da6684e99.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872209/hm/women/fc18c99037a8d0671ce21f016d70d4bdcb7e1c05.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872209/hm/women/fc18c99037a8d0671ce21f016d70d4bdcb7e1c05.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872211/hm/women/fe3d4ad18f9fd103a1d98bb33baed41de0bfa1d8.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872210/hm/women/34c528e551e46134fef90721b046c63cd03e2793.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872211/hm/women/03f576d808cd88c4639f9ea6ae99a99e57a5247e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872210/hm/women/f0a202d187d94b4e7be0303d9d3ba76da6684e99.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872212/hm/women/22d1636fdd0b280020e0a96e1a0833f6c0024f2b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872211/hm/women/e2b16b5d37da5ebe35e8ec960832b157dd16041c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1222670054.html",
      },
      {
        id: "1354318015",
        productCode: "1354318_group_015",
        name: "Oversized printed sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_hoodiesswetshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue/Los Angeles",
          hex: "#272836",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1354318015",
            colorName: "Navy blue/Los Angeles",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872224/hm/women/dcc58709c6851a009e9a3c38e6b30f74142cb96a.jpg",
          },
          {
            articleCode: "1354318010",
            colorName: "Light pink/Paris",
            hex: "#E8D5D4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872220/hm/women/2d773376a7b2155602c169268d197092f41c4d30.jpg",
          },
          {
            articleCode: "1354318014",
            colorName: "Light grey marl/New York",
            hex: "#BEBEBE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872220/hm/women/7010c595107c7f32a519d1ee697b79411af9e4ae.jpg",
          },
          {
            articleCode: "1354318012",
            colorName: "Cream/Hôtel",
            hex: "#ECE9E2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/6a18ab9d750ccb340e338f46a08802d4302da5be.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1354318015008",
            name: "XXS",
            inStock: false,
          },
          {
            sizeCode: "1354318015009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1354318015010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1354318015011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1354318015012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1354318015013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided"],
        markers: [],
        description:
          "Oversized top in printed sweatshirt fabric with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 16%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "XXS: Width: 1.04 m, Length: 51 cm",
          "XS: Width: 1.07 m, Length: 52 cm",
          "S: Width: 1.14 m, Length: 55 cm",
          "M: Width: 1.20 m, Length: 56 cm",
          "L: Width: 1.26 m, Length: 58 cm",
          "XL: Width: 1.36 m, Length: 60 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872224/hm/women/dcc58709c6851a009e9a3c38e6b30f74142cb96a.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872216/hm/women/2d0157d7af9ac8076fed614249cf27d729b2e8ae.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872216/hm/women/2d0157d7af9ac8076fed614249cf27d729b2e8ae.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872222/hm/women/ffcc13d08432107c693db20091838bd32a91a5a2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872217/hm/women/4986d82040f1194043be88903e48e4eb40b94513.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872218/hm/women/ee63f508fec6e1a3aab37ad3bdcf32eca90a2044.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872224/hm/women/dcc58709c6851a009e9a3c38e6b30f74142cb96a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872219/hm/women/8d9732f2823adcda9f5f71587641bd79d9a101ec.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1354318015.html",
      },
      {
        id: "1314276011",
        productCode: "1314276_group_011",
        name: "Print-motif sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Green/Paris",
          hex: "#3F4844",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1314276011",
            colorName: "Green/Paris",
            hex: "#3F4844",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/5e6bd222286b0cc3414ddbe0a6d5cab622f69e22.jpg",
          },
          {
            articleCode: "1314276013",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/0410abca51e989feaef605f7c010d1d9b9c527b5.jpg",
          },
          {
            articleCode: "1314276012",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/66f79b426912074c51e39c7f43071f8c527807d1.jpg",
          },
          {
            articleCode: "1314276007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/237ee5a6d6996e8d2341de43d810b0ac097098da.jpg",
          },
          {
            articleCode: "1314276009",
            colorName: "Burgundy",
            hex: "#54444B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/c32166516ebe42166ade610da5f8c8940087d6f3.jpg",
          },
          {
            articleCode: "1314276001",
            colorName: "Dark grey/Sport Club",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872230/hm/women/ffa8cca6cca95410f94811ce5f5ddc8efc2f40a0.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1314276011008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1314276011009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1314276011010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1314276011011",
            name: "M",
            inStock: false,
          },
          {
            sizeCode: "1314276011012",
            name: "L",
            inStock: false,
          },
          {
            sizeCode: "1314276011013",
            name: "XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Oversized top in sweatshirt fabric with a soft brushed inside and a print motif on the front. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 62%, Polyester 38%"],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 23%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 1.05 m, Length: 51 cm",
          "XS: Width: 1.07 m, Length: 52 cm",
          "S: Width: 1.15 m, Length: 56 cm",
          "M: Width: 1.21 m, Length: 57 cm",
          "L: Width: 1.27 m, Length: 59 cm",
          "XL: Width: 1.37 m, Length: 61 cm",
        ],
        attributes: {
          weight: "440 g",
          productTypeName: "SWEATSHIRT",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/5e6bd222286b0cc3414ddbe0a6d5cab622f69e22.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872222/hm/women/30cc1a0ca394db35769d4c873a09b7e37c289bc9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872222/hm/women/30cc1a0ca394db35769d4c873a09b7e37c289bc9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872225/hm/women/a4e6b0fd5a109ef02078b5b61a41d52f45f5f022.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872222/hm/women/f843ad9a007eb219594c940af98abd0167d15cd6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872224/hm/women/0462df96a3dea6cc0814915323d78052535d1d78.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872225/hm/women/868e57767dfce678888e1f448dc19f3ce4a34a86.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/5e6bd222286b0cc3414ddbe0a6d5cab622f69e22.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/8cb0c6f7c4359d9da815527b5b59e289e550d282.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1314276011.html",
      },
      {
        id: "1363167002",
        productCode: "1363167_group_002",
        name: "Lace-trimmed rib-knit top",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_knitted",
        productType: "Top",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#272930",
          shade:
            "Navy blue|Bright blue|Cobalt blue|Indigo|Dark blue|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1363167002",
            colorName: "Navy blue",
            hex: "#272930",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/9ed1668b7f17f1561c1e73acc267f9455368fe11.jpg",
          },
          {
            articleCode: "1363167001",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/0ff6f54746a57c6dae9c37a585f7c9333cecf4bf.jpg",
          },
          {
            articleCode: "1363167003",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872230/hm/women/7940842e1e8b857f6f199fa52c5bd87ce6e879f7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1363167002009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1363167002010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1363167002011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1363167002012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1363167002013",
            name: "XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Fitted top in a soft rib knit with a lace-trimmed V-neckline, long sleeves and a straight hem.",
        compositions: [
          "Shell: Polyester 63%, Viscose 34%, Elastane 3%",
          "Lace: Polyester 64%, Polyamide 29%, Elastane 7%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "63%",
          },
          {
            name: "Viscose",
            amount: "34%",
          },
          {
            name: "Elastane",
            amount: "3%",
          },
          {
            name: "Polyester",
            amount: "64%",
          },
          {
            name: "Polyamide",
            amount: "29%",
          },
          {
            name: "Elastane",
            amount: "7%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 69 cm, Length: 55 cm",
          "S: Width: 77 cm, Length: 58 cm",
          "M: Width: 85 cm, Length: 60 cm",
          "L: Width: 93 cm, Length: 61 cm",
          "XL: Width: 1.05 m, Length: 63 cm",
        ],
        attributes: {
          productTypeName: "Top",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Slim fit"],
          neckLineStyle: ["Deep neckline", "V-neck"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/9ed1668b7f17f1561c1e73acc267f9455368fe11.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/b68cfab9d1630a8748c09a5fc0c0cdbf56211f0c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/b68cfab9d1630a8748c09a5fc0c0cdbf56211f0c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872228/hm/women/778b639629dc55154746b4859876a6da421c5b31.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872229/hm/women/95ebe4c32ed23eeb122c05b4993a4395054257d0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872229/hm/women/96439b8110adde6d21dc3721350812b20c6e6f7e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/9ed1668b7f17f1561c1e73acc267f9455368fe11.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872230/hm/women/b446854d309f0d21787a89219806e2344430901f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1363167002.html",
      },
      {
        id: "1321655001",
        productCode: "1321655_group_001",
        name: "Zip-through hoodie",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1321655001",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/fb18a4541362381c9710f2dd905442c968c0ccb7.jpg",
          },
          {
            articleCode: "1321655012",
            colorName: "Dark brown",
            hex: "#353031",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/0a4704ded7da6431837da2253f7771474b36419b.jpg",
          },
          {
            articleCode: "1321655009",
            colorName: "Dusty purple marl",
            hex: "#645B60",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/018acd3abe3695623e0638bd050e4e3c7803335e.jpg",
          },
          {
            articleCode: "1321655008",
            colorName: "Light grey marl",
            hex: "#A0A0A0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872234/hm/women/6b91976e4518e7978ccf7d1eae7b944f56689467.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1321655001009",
            name: "XS",
            inStock: false,
          },
          {
            sizeCode: "1321655001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1321655001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1321655001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1321655001013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Loose-fit hoodie in sweatshirt fabric with a soft brushed inside. Lined hood, zip down the front and open front pockets. Dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 26%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 1.06 m, Length: 57 cm",
          "S: Width: 1.13 m, Length: 60 cm",
          "M: Width: 1.19 m, Length: 62 cm",
          "L: Width: 1.25 m, Length: 63 cm",
          "XL: Width: 1.35 m, Length: 65 cm",
        ],
        attributes: {
          weight: "500 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          sleeveLength: ["Long sleeve"],
          fits: ["Loose fit"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/fb18a4541362381c9710f2dd905442c968c0ccb7.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/a4be8c7a6671aa0d43099db605ec3b9fcd1605e3.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/a4be8c7a6671aa0d43099db605ec3b9fcd1605e3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872232/hm/women/8970d350d6bf147262b1b06226a0f79efffb1bee.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872232/hm/women/6e8e5c7e6fa75be07d358ce313ab516108130b86.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872232/hm/women/544bf897c53aaa0e15e56251638a822ab2c184c2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/fb18a4541362381c9710f2dd905442c968c0ccb7.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872234/hm/women/0dcbabff7ca4dcadb32f53b5102eb3e8c8b90293.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1321655001.html",
      },
      {
        id: "1342556004",
        productCode: "1342556_group_004",
        name: "Asymmetric lace-trimmed T-shirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#393B47",
          shade:
            "Navy blue|Bright blue|Cobalt blue|Indigo|Dark blue|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1342556004",
            colorName: "Navy blue",
            hex: "#393B47",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872235/hm/women/8c2907adbf41ae3ccb4a6e42b2e5bc9bc8bcda32.jpg",
          },
          {
            articleCode: "1342556006",
            colorName: "Light pink",
            hex: "#DCCAD0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872238/hm/women/f777a9889996fabc5b1371add3a0984fec3e2d61.jpg",
          },
          {
            articleCode: "1342556005",
            colorName: "Light blue",
            hex: "#A9B7D8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872238/hm/women/b1f1d5fcea083879eba823a5444ee3d6ead87ea8.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1342556004009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1342556004010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1342556004011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1342556004012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1342556004013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Relaxed-fit T-shirt in soft cotton jersey with a ribbed trim around the neckline and dropped shoulders. Asymmetric hem with a scalloped lace trim.",
        compositions: [
          "Shell: Cotton 100%",
          "Lace: Polyamide 86%, Elastane 14%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
          {
            name: "Polyamide",
            amount: "86%",
          },
          {
            name: "Elastane",
            amount: "14%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 18%"],
        careInstructions: [],
        measurements: [
          "XS: Width: 98 cm, Length: 64 cm",
          "S: Width: 1.06 m, Length: 68 cm",
          "M: Width: 1.14 m, Length: 69 cm",
          "L: Width: 1.22 m, Length: 71 cm",
          "XL: Width: 1.34 m, Length: 72 cm",
        ],
        attributes: {
          productTypeName: "T-shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Relaxed fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872235/hm/women/8c2907adbf41ae3ccb4a6e42b2e5bc9bc8bcda32.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872235/hm/women/571306e2a120f46d198a512e50559883302d0a62.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872235/hm/women/571306e2a120f46d198a512e50559883302d0a62.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872236/hm/women/515381a1a0802a7a4b1732967c415307d8c078ee.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872237/hm/women/aa9f19234ae39aac9b97617395bc023c2b9064c0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872237/hm/women/abca1ae7c83ecee7584255b12ec77dc0ffa00d1b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872235/hm/women/8c2907adbf41ae3ccb4a6e42b2e5bc9bc8bcda32.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872241/hm/women/36995b2d60c824516ca58a0e47ddc4a40a33bd9a.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1342556004.html",
      },
      {
        id: "1366280001",
        productCode: "1366280_group_001",
        name: "Oversized flannel shirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_shirtsblouses_shirts",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark blue/Checked",
          hex: "#222D47",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1366280001",
            colorName: "Dark blue/Checked",
            hex: "#222D47",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872239/hm/women/ecd6a330280f2956539f87a854fe5c84617a3d10.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1366280001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1366280001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1366280001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1366280001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1366280001013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "divided"],
        markers: [],
        description:
          "Oversized shirt in soft flannel made from a cotton and viscose blend. Features a collar, buttons down the front and a yoke with a box pleat at the back. Dropped shoulders and long sleeves with buttoned cuffs and a sleeve placket with a link button. Gently rounded hem.",
        compositions: ["Cotton 58%, Viscose 42%"],
        materials: [
          {
            name: "Cotton",
            amount: "58%",
          },
          {
            name: "Viscose",
            amount: "42%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Sleeve: Length: 59.3 cm (size S/T(EUR S))",
          "Shoulder: Width: 54 cm (size S/T(EUR S))",
          "Back: Length: 69 cm (size S/T(EUR S))",
          "XS: Width: 1.23 m, Length: 65 cm",
          "S: Width: 1.31 m, Length: 67 cm",
          "M: Width: 1.37 m, Length: 68 cm",
          "L: Width: 1.45 m, Length: 69 cm",
          "XL: Width: 1.56 m, Length: 70 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          collarStyle: ["Classic collar"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872239/hm/women/ecd6a330280f2956539f87a854fe5c84617a3d10.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872240/hm/women/d4ff818d1e0f3983c5deeef3c5b16c4a739059fa.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872240/hm/women/d4ff818d1e0f3983c5deeef3c5b16c4a739059fa.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872240/hm/women/5c274ca902b151319ab016d90937e0bfaae18d1e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872240/hm/women/2666b739cd5a0df21844909336ae6422fd85ad7d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872240/hm/women/1e2e93e34c882a281544e304ad010db12102e95a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872241/hm/women/1702e36b0d4f400e8a6624d2d838349068bd53ad.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872239/hm/women/ecd6a330280f2956539f87a854fe5c84617a3d10.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/4ad1845b7d31ddf206de999254bde758cb02670e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1366280001.html",
      },
      {
        id: "1367198003",
        productCode: "1367198_group_003",
        name: "Lace-detail knitted jumper",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_cardigansjumpers_jumpers",
        productType: "Jumper",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark purple",
          hex: "#332B32",
          shade: "Plum|Dark purple",
        },
        colorVariants: [
          {
            articleCode: "1367198003",
            colorName: "Dark purple",
            hex: "#332B32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/d159c2f91d4a20b055d12fe91d4e74dd8c4fb38a.jpg",
          },
          {
            articleCode: "1367198002",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872243/hm/women/4a0f16693c44ac54d17a6af161e63350094d3563.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1367198003009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1367198003010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1367198003011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1367198003012",
            name: "L",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided"],
        markers: [],
        description:
          "Jumper in a soft knit featuring a lace-trimmed V-neckline and a wrapover front. Long sleeves with ribbing at the cuffs and a wide, ribbed waistband.",
        compositions: [
          "Polyester 90%, Polyamide 3%, Wool 3%, Acrylic 2%, Elastane 2%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "90%",
          },
          {
            name: "Polyamide",
            amount: "3%",
          },
          {
            name: "Wool",
            amount: "3%",
          },
          {
            name: "Acrylic",
            amount: "2%",
          },
          {
            name: "Elastane",
            amount: "2%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 90%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 42 cm, Length: 47 cm",
          "S: Width: 46 cm, Length: 49 cm",
          "M: Width: 52 cm, Length: 51 cm",
          "L: Width: 54 cm, Length: 53 cm",
        ],
        attributes: {
          productTypeName: "JUMPER",
          concepts: ["DIVIDED"],
          garmentLength: ["Short"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Wrapover"],
          neckLineStyle: ["V-neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/d159c2f91d4a20b055d12fe91d4e74dd8c4fb38a.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872241/hm/women/04df7d00e2bc96074e5525ba1843b352e80461b1.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872241/hm/women/04df7d00e2bc96074e5525ba1843b352e80461b1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/6290206df43e600b05a8fd156b1425f0657759e4.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/ae62ec34f73b1dbb892f8eb3c48e1b96c6d02ee3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872243/hm/women/d90ef6c87b70079a8dac15a47a3ccfe2c99c2669.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872242/hm/women/d159c2f91d4a20b055d12fe91d4e74dd8c4fb38a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872244/hm/women/b8643c5f700c818aebe8761781f2c627b0051479.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1367198003.html",
      },
      {
        id: "1314276013",
        productCode: "1314276_group_013",
        name: "Print-motif sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#3C2A2B",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1314276013",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/0410abca51e989feaef605f7c010d1d9b9c527b5.jpg",
          },
          {
            articleCode: "1314276011",
            colorName: "Green/Paris",
            hex: "#3F4844",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/5e6bd222286b0cc3414ddbe0a6d5cab622f69e22.jpg",
          },
          {
            articleCode: "1314276012",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/66f79b426912074c51e39c7f43071f8c527807d1.jpg",
          },
          {
            articleCode: "1314276007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/237ee5a6d6996e8d2341de43d810b0ac097098da.jpg",
          },
          {
            articleCode: "1314276009",
            colorName: "Burgundy",
            hex: "#54444B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/c32166516ebe42166ade610da5f8c8940087d6f3.jpg",
          },
          {
            articleCode: "1314276001",
            colorName: "Dark grey/Sport Club",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872230/hm/women/ffa8cca6cca95410f94811ce5f5ddc8efc2f40a0.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1314276013008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1314276013009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1314276013010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1314276013011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1314276013012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1314276013013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Oversized top in sweatshirt fabric with a soft brushed inside and a print motif on the front. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 62%, Polyester 38%"],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 23%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 1.05 m, Length: 51 cm",
          "XS: Width: 1.07 m, Length: 52 cm",
          "S: Width: 1.15 m, Length: 56 cm",
          "M: Width: 1.21 m, Length: 57 cm",
          "L: Width: 1.27 m, Length: 59 cm",
          "XL: Width: 1.37 m, Length: 61 cm",
        ],
        attributes: {
          weight: "440 g",
          productTypeName: "SWEATSHIRT",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/0410abca51e989feaef605f7c010d1d9b9c527b5.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872243/hm/women/d04e0119c1bc8d4c104cd72c3960ed84902412b0.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872243/hm/women/d04e0119c1bc8d4c104cd72c3960ed84902412b0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872244/hm/women/0c3979f9ae4e76413a0c186fe263837cd467373e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872244/hm/women/fb98a33c2f288f15e3c837c3c28328b6846c6101.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872245/hm/women/ccc00144981ab6e00fc620c9aed39f46e3a0d033.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/0410abca51e989feaef605f7c010d1d9b9c527b5.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872246/hm/women/4bb7ee02a74c3729139c7a1737558ed001c455eb.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1314276013.html",
      },
      {
        id: "1321655012",
        productCode: "1321655_group_012",
        name: "Zip-through hoodie",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#353031",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1321655012",
            colorName: "Dark brown",
            hex: "#353031",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/0a4704ded7da6431837da2253f7771474b36419b.jpg",
          },
          {
            articleCode: "1321655001",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872231/hm/women/fb18a4541362381c9710f2dd905442c968c0ccb7.jpg",
          },
          {
            articleCode: "1321655009",
            colorName: "Dusty purple marl",
            hex: "#645B60",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/018acd3abe3695623e0638bd050e4e3c7803335e.jpg",
          },
          {
            articleCode: "1321655008",
            colorName: "Light grey marl",
            hex: "#A0A0A0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872234/hm/women/6b91976e4518e7978ccf7d1eae7b944f56689467.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1321655012009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1321655012010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1321655012011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1321655012012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1321655012013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Loose-fit hoodie in sweatshirt fabric with a soft brushed inside. Lined hood, zip down the front and open front pockets. Dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "XS: Width: 1.06 m, Length: 57 cm",
          "S: Width: 1.13 m, Length: 60 cm",
          "M: Width: 1.19 m, Length: 62 cm",
          "L: Width: 1.25 m, Length: 63 cm",
          "XL: Width: 1.35 m, Length: 65 cm",
        ],
        attributes: {
          weight: "500 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          sleeveLength: ["Long sleeve"],
          fits: ["Loose fit"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/0a4704ded7da6431837da2253f7771474b36419b.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872246/hm/women/d956217a500df7521b9fd246491c24c357efac4d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872246/hm/women/d956217a500df7521b9fd246491c24c357efac4d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872246/hm/women/0d693bdfad11fa441bc149ac37e9c23bea48ca4c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872246/hm/women/c19b11ab90a1b686e9fb2db0b331a13150df2b14.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/bc43cdce92691a1d79b11a3773036571b2059628.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872233/hm/women/0a4704ded7da6431837da2253f7771474b36419b.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/e3452ddde46d0b08a76a4c2756eece1c9811c561.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1321655012.html",
      },
      {
        id: "1193602079",
        productCode: "1193602_group_079",
        name: "Sweatpants",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_trousersleggings",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Light grey marl",
          hex: "#A0A0A0",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1193602079",
            colorName: "Light grey marl",
            hex: "#A0A0A0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/4493d42cb19904d289f45921fa5e1a2f9428c874.jpg",
          },
          {
            articleCode: "1193602086",
            colorName: "Dark brown",
            hex: "#353031",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872248/hm/women/90e1fc87fa693d62ffe531926afc585790a2ea89.jpg",
          },
          {
            articleCode: "1193602077",
            colorName: "Light dusty pink",
            hex: "#BDAFB3",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872248/hm/women/5146153e1511543ff479f52b44fba2eee7231456.jpg",
          },
          {
            articleCode: "1193602081",
            colorName: "Dark brown",
            hex: "#353031",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872248/hm/women/e5c143cc23865c37f934d363f665bf0dba872ba1.jpg",
          },
          {
            articleCode: "1193602076",
            colorName: "Dusty purple",
            hex: "#645B60",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872248/hm/women/6a70e8f3266fb615e5a8f7388f708b9c87075524.jpg",
          },
          {
            articleCode: "1193602089",
            colorName: "Burgundy",
            hex: "#543741",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/e0204df3cb03aaa84758ca4dafec202ce79c4804.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1193602079009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1193602079010",
            name: "S",
            inStock: false,
          },
          {
            sizeCode: "1193602079011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1193602079012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1193602079013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Sweatpants in sweatshirt fabric made from a cotton blend with a soft brushed inside. Elasticated smocking and a concealed drawstring at the waist, side pockets and straight legs.",
        compositions: ["Cotton 75%, Polyester 22%, Viscose 3%"],
        materials: [
          {
            name: "Cotton",
            amount: "75%",
          },
          {
            name: "Polyester",
            amount: "22%",
          },
          {
            name: "Viscose",
            amount: "3%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Inside leg: Length: 74 cm (size M/T(EUR M))",
          "XS: Width: 65 cm, Length: 72 cm",
          "S: Width: 72 cm, Length: 74 cm",
          "M: Width: 80 cm, Length: 74 cm",
          "L: Width: 87 cm, Length: 73 cm",
          "XL: Width: 98 cm, Length: 71 cm",
        ],
        attributes: {
          weight: "500 g",
          productTypeName: "Trousers",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Relaxed fit"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/4493d42cb19904d289f45921fa5e1a2f9428c874.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/4493d42cb19904d289f45921fa5e1a2f9428c874.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872247/hm/women/4493d42cb19904d289f45921fa5e1a2f9428c874.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872248/hm/women/db875e78d638a90fa1f16d81497d64ebe56449fd.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1193602079.html",
      },
      {
        id: "1356779005",
        productCode: "1356779_group_005",
        name: "Motif-detail sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_hoodiesswetshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Mustard yellow/Archives",
          hex: "#9B892F",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1356779005",
            colorName: "Mustard yellow/Archives",
            hex: "#9B892F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/97c666f57f310bfa1b5b1de8b3ffc625d7a4a9f2.jpg",
          },
          {
            articleCode: "1356779006",
            colorName: "Dark plum purple/Paris",
            hex: "#522834",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872252/hm/women/b63370224bbf8cf65507f046e4ff7d04a66d8131.jpg",
          },
          {
            articleCode: "1356779003",
            colorName: "Peach pink/Haute Marais",
            hex: "#BAAC9B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872252/hm/women/b30817d7f1651e61d9d0345354f65c397ab3f2d9.jpg",
          },
          {
            articleCode: "1356779007",
            colorName: "Burgundy/Brooklyn",
            hex: "#522834",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872252/hm/women/2d4aba09f383a71cbb994d7123daadd965d1a27c.jpg",
          },
          {
            articleCode: "1356779004",
            colorName: "Green/Paris",
            hex: "#006A41",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872252/hm/women/9ec3a426c33dd9e3e78e06eb950c3e02c3781813.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1356779005009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1356779005010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1356779005011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1356779005012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1356779005013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Oversized top in fleece sweatshirt fabric featuring a text motif on the front. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 15%"],
        careInstructions: [],
        measurements: null,
        attributes: {
          productTypeName: "SWEATSHIRT",
          modelHeightGarmentSize:
            "The model is 177cm/5'10\" and wears a size S",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/97c666f57f310bfa1b5b1de8b3ffc625d7a4a9f2.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/2fc85d47b0c257980f12aec05ef8ec913cf4e754.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/2fc85d47b0c257980f12aec05ef8ec913cf4e754.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/84a4809d3270c68f50a5c1373b64f7f4a23a4743.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/9155e474044804838837f7987e0c446f8b1926b9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872251/hm/women/2b3ae9d061a6ff23fee4a60574f3b03ebf96829d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872250/hm/women/97c666f57f310bfa1b5b1de8b3ffc625d7a4a9f2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/e1217a54e8bfc573fa430ffff9b48ad602ec19c9.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1356779005.html",
      },
      {
        id: "1351024002",
        productCode: "1351024_group_002",
        name: "Lace-trimmed V-neck top",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_longsleeve",
        productType: "Top",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#272836",
          shade:
            "Navy blue|Bright blue|Cobalt blue|Indigo|Dark blue|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1351024002",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/50db1ffbbc05cd6ad5ea844ff8784935f5b3764a.jpg",
          },
          {
            articleCode: "1351024005",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/01317b195c7283fab29c89d6bc0a8f7fe94bab1c.jpg",
          },
          {
            articleCode: "1351024004",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/40cdf9217485a7f195630d608f3e64454822a8aa.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1351024002008",
            name: "XXS",
            inStock: false,
          },
          {
            sizeCode: "1351024002009",
            name: "XS",
            inStock: false,
          },
          {
            sizeCode: "1351024002010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1351024002011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1351024002012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1351024002013",
            name: "XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["divided"],
        markers: [],
        description:
          "Fitted top in ribbed jersey with a lace-trimmed V-neckline and long sleeves.",
        compositions: ["Polyester 85%, Viscose 15%"],
        materials: [
          {
            name: "Polyester",
            amount: "85%",
          },
          {
            name: "Viscose",
            amount: "15%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 59 cm, Length: 52 cm",
          "XS: Width: 62 cm, Length: 54 cm",
          "S: Width: 70 cm, Length: 57 cm",
          "M: Width: 76 cm, Length: 59 cm",
          "L: Width: 82 cm, Length: 60 cm",
          "XL: Width: 92 cm, Length: 62 cm",
        ],
        attributes: {
          weight: "250 g",
          productTypeName: "Top",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Slim fit"],
          neckLineStyle: ["V-neck"],
          countryOfProduction: "Cambodia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/50db1ffbbc05cd6ad5ea844ff8784935f5b3764a.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872253/hm/women/fb8268b7e857e287c7f5e1fb0923cf373e23ec34.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872253/hm/women/fb8268b7e857e287c7f5e1fb0923cf373e23ec34.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872253/hm/women/a3d480fccff4cc9c66a09897655cc2aa5a88fa7c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/271016394c65bd1d1ae52b8ff50fe6c4bc2bd2e3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/50db1ffbbc05cd6ad5ea844ff8784935f5b3764a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/28cb70ba9aaa4f7380c328b907631143869a9d54.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1351024002.html",
      },
      {
        id: "1341688037",
        productCode: "1341688_group_037",
        name: "Oversized printed T-shirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_printed_tshirts",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1299,
          regular: 1299,
          onSale: false,
          formatted: "Rs.1,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Black/Nirvana",
          hex: "#272627",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1341688037",
            colorName: "Black/Nirvana",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/739629a1d63970e876e7e628a5a7123d1bc77ab7.jpg",
          },
          {
            articleCode: "1341688020",
            colorName: "Dark grey/Pink Floyd",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872257/hm/women/2b4f148d843ebfccce918fd26c0ed64194b8739f.jpg",
          },
          {
            articleCode: "1341688042",
            colorName: "Dark grey/The Cure",
            hex: "#393B47",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872256/hm/women/d74cb5a3c603be5c3c7877743a54d5f80984646e.jpg",
          },
          {
            articleCode: "1341688045",
            colorName: "Anthracite/Zara Larsson",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872258/hm/women/b9beb54de7c7e46013665f34b3e74a536da0f68e.jpg",
          },
          {
            articleCode: "1341688009",
            colorName: "Cream/Condé Nast Traveller",
            hex: "#ECE9E2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872256/hm/women/9da7ee1dd4c30d095e3402941a163b1c68e3dcdd.jpg",
          },
          {
            articleCode: "1341688022",
            colorName: "Cream/The Rolling Stones",
            hex: "#ECE9E2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872257/hm/women/8065e8d74e0b8d1f8055e456555fd0cf6ac6a314.jpg",
          },
          {
            articleCode: "1341688032",
            colorName: "Brown/Condé Nast Traveller",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872258/hm/women/23bd0ca3411aff02da1edb229e6e3db799d7a5ed.jpg",
          },
          {
            articleCode: "1341688033",
            colorName: "White/Condé Nast Traveller",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872258/hm/women/efe050944e5fe485611a99eebb297eee03fa470f.jpg",
          },
          {
            articleCode: "1341688034",
            colorName: "Black/Sabrina Carpenter",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872258/hm/women/507d431c7072c57b71a65e0dfd10e55be62fb665.jpg",
          },
          {
            articleCode: "1341688012",
            colorName: "White/Condé Nast Traveller",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872259/hm/women/d9179895b44ed7961155975914c59eb05333262c.jpg",
          },
          {
            articleCode: "1341688044",
            colorName: "Light yellow/Zara Larsson",
            hex: "#EFE7C2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872259/hm/women/d6fd04bded92d8b4bc733865d72c90d638fdd5c5.jpg",
          },
          {
            articleCode: "1341688024",
            colorName: "Light beige/Sabrina Carpenter",
            hex: "#D8CCB5",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872259/hm/women/bdab251c20513b6601d99b4b37659561460441ec.jpg",
          },
          {
            articleCode: "1341688006",
            colorName: "Yellow/Hotel Nuevo Mundo",
            hex: "#F2D499",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872259/hm/women/f13c2abc6e4ab5c0d0f16d4744e3b316e4828c73.jpg",
          },
          {
            articleCode: "1341688019",
            colorName: "White/Condé Nast Glamour",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872259/hm/women/db589210a7980be9abdcf5a7b00e4dd19bacb84a.jpg",
          },
          {
            articleCode: "1341688023",
            colorName: "Black/Condé Nast Glamour",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/e6246b961f90110a019cf381a86fb38c7d8f05a0.jpg",
          },
          {
            articleCode: "1341688007",
            colorName: "Green/The Smashing Pumpkins",
            hex: "#738080",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/c4ec6e0d5676dd88107f4bf1d02b5000cc7646bc.jpg",
          },
          {
            articleCode: "1341688041",
            colorName: "Black/Jennie",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/85f9005dfd29ac03ba82f16e4e1fadbcc32d4d7f.jpg",
          },
          {
            articleCode: "1341688008",
            colorName: "Raspberry red/Primal Scream",
            hex: "#A75053",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/632f83289715e67004dac2f12dbf0572b288a4ee.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1341688037008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1341688037009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1341688037010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1341688037011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1341688037012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1341688037013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["divided"],
        markers: [],
        description:
          "Oversized T-shirt in soft, printed cotton jersey with a ribbed trim around the neckline and dropped shoulders.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "XXS: Width: 1.02 m, Length: 61 cm",
          "XS: Width: 1.05 m, Length: 62 cm",
          "S: Width: 1.12 m, Length: 66 cm",
          "M: Width: 1.18 m, Length: 67 cm",
          "L: Width: 1.24 m, Length: 69 cm",
          "XL: Width: 1.32 m, Length: 70 cm",
        ],
        attributes: {
          weight: "190 g",
          productTypeName: "T-shirt",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Oversized"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/739629a1d63970e876e7e628a5a7123d1bc77ab7.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/a9315c5c2699127ed71cfabc545d6e5cbcd9cda6.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/a9315c5c2699127ed71cfabc545d6e5cbcd9cda6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872257/hm/women/b4c83ad88122bc37b46018d24ebffa728f25f83f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/56a199b40713eb7724fa99c350a7c0c7cc2bf576.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/739629a1d63970e876e7e628a5a7123d1bc77ab7.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872257/hm/women/92b4fc1e7ee7d459765990ba3ec1132d9429d826.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1341688037.html",
      },
      {
        id: "1351024005",
        productCode: "1351024_group_005",
        name: "Lace-trimmed V-neck top",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_tops_longsleeve",
        productType: "Top",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1351024005",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/01317b195c7283fab29c89d6bc0a8f7fe94bab1c.jpg",
          },
          {
            articleCode: "1351024002",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872255/hm/women/50db1ffbbc05cd6ad5ea844ff8784935f5b3764a.jpg",
          },
          {
            articleCode: "1351024004",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/40cdf9217485a7f195630d608f3e64454822a8aa.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1351024005008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1351024005009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1351024005010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1351024005011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1351024005012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1351024005013",
            name: "XL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["divided"],
        markers: [],
        description:
          "Fitted top in ribbed jersey with a lace-trimmed V-neckline and long sleeves.",
        compositions: ["Polyester 85%, Viscose 15%"],
        materials: [
          {
            name: "Polyester",
            amount: "85%",
          },
          {
            name: "Viscose",
            amount: "15%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 59 cm, Length: 52 cm",
          "XS: Width: 62 cm, Length: 54 cm",
          "S: Width: 70 cm, Length: 57 cm",
          "M: Width: 76 cm, Length: 59 cm",
          "L: Width: 82 cm, Length: 60 cm",
          "XL: Width: 92 cm, Length: 62 cm",
        ],
        attributes: {
          weight: "250 g",
          productTypeName: "Top",
          concepts: ["DIVIDED"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Slim fit"],
          neckLineStyle: ["V-neck"],
          countryOfProduction: "Cambodia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/01317b195c7283fab29c89d6bc0a8f7fe94bab1c.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/3bd616a69ab23deb6a6f4711ca0d51c851dd6128.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872260/hm/women/3bd616a69ab23deb6a6f4711ca0d51c851dd6128.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872261/hm/women/2e5676f366d1f06406d6da80b003a8953f4c8759.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872261/hm/women/08004ec8fdde604efed67c93c0340c67f87c356c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872262/hm/women/6c4db35e46b6b73944880c748b1260e94b5468d4.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872254/hm/women/01317b195c7283fab29c89d6bc0a8f7fe94bab1c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872262/hm/women/6fc250522a7601b9791beab5b82134e34de045ec.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1351024005.html",
      },
      {
        id: "1332882004",
        productCode: "1332882_group_004",
        name: "Flared High Waist Jeans",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_jeans_bootcut",
        productType: "Jeans",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark denim blue",
          hex: "#2E3036",
          shade: "Bright blue|Pastel blue|Blue grey|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1332882004",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/a90c163771481dd13eaecd58abfd3b7c11636a57.jpg",
          },
          {
            articleCode: "1332882001",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/74ecf3d1d12a9d74ba96447ea56d9500e6f59343.jpg",
          },
          {
            articleCode: "1332882003",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/6b39adffb143d4c68d6640d220294a3b633523a0.jpg",
          },
          {
            articleCode: "1332882002",
            colorName: "Dark denim grey",
            hex: "#706C6F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/da9b3d24458e51a4a8b91a1a55fcbcddf4650ef0.jpg",
          },
          {
            articleCode: "1332882007",
            colorName: "Denim blue",
            hex: "#8898AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/62bf491bc0f0f96c71ec960da1853451abee65f8.jpg",
          },
          {
            articleCode: "1332882006",
            colorName: "Light denim blue",
            hex: "#80AAD8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/3023c02622df27c2130292e37f3c1cf543a7387c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1332882004016",
            name: "4",
            inStock: true,
          },
          {
            sizeCode: "1332882004017",
            name: "6",
            inStock: true,
          },
          {
            sizeCode: "1332882004018",
            name: "8",
            inStock: true,
          },
          {
            sizeCode: "1332882004019",
            name: "10",
            inStock: true,
          },
          {
            sizeCode: "1332882004020",
            name: "12",
            inStock: true,
          },
          {
            sizeCode: "1332882004021",
            name: "14",
            inStock: true,
          },
          {
            sizeCode: "1332882004022",
            name: "16",
            inStock: true,
          },
          {
            sizeCode: "1332882004023",
            name: "18",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided"],
        markers: [],
        description:
          "5-pocket jeans in cotton-blend denim with good stretch for excellent comfort. Flared leg with a slim fit from the waist to the thigh and a flared cut from the knee to the hem. High waist with a zip fly and button. Regular length, designed to hit the top of the foot with little or no stacking.",
        compositions: ["Cotton 72%, Polyester 26%, Elastane 2%"],
        materials: [
          {
            name: "Cotton",
            amount: "72%",
          },
          {
            name: "Polyester",
            amount: "26%",
          },
          {
            name: "Elastane",
            amount: "2%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [],
        measurements: [
          "Waist: Circumference: 70 cm (size 10T(EUR 38))",
          "Inside leg: Length: 82.5 cm (size 10T(EUR 38))",
          "4: Width: 61 cm, Length: 75 cm",
          "6: Width: 64 cm, Length: 76 cm",
          "8: Width: 67 cm, Length: 77 cm",
          "10: Width: 70 cm, Length: 78 cm",
          "12: Width: 74 cm, Length: 78 cm",
          "14: Width: 78 cm, Length: 78 cm",
          "16: Width: 82 cm, Length: 77 cm",
          "18: Width: 87 cm, Length: 77 cm",
        ],
        attributes: {
          weight: "630 g",
          productTypeName: "JEANS",
          concepts: ["DIVIDED"],
          modelHeightGarmentSize:
            "The model is 177cm/5'10\" and wears a size 10",
          garmentLength: ["Long"],
          waistRise: ["High waist"],
          fits: ["Slim fit"],
          clothingStyle: ["Flared"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/a90c163771481dd13eaecd58abfd3b7c11636a57.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872262/hm/women/107dc4cbcab1c22c3946e5643d3f1cfeb1596abd.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872262/hm/women/107dc4cbcab1c22c3946e5643d3f1cfeb1596abd.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872262/hm/women/891f97be87a37abe2ce98763012361516c9d3a34.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/81e351b72f9af47991e8cb7c81072c614c339716.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872263/hm/women/a90c163771481dd13eaecd58abfd3b7c11636a57.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/7f54bb45a3deb4f2f936b82f61f6dd22d3d2953f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1332882004.html",
      },
      {
        id: "1358553004",
        productCode: "1358553_group_004",
        name: "Long-sleeved satin shirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_shirtsblouses_shirts",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#702B33",
          shade: "Maroon",
        },
        colorVariants: [
          {
            articleCode: "1358553004",
            colorName: "Dark red",
            hex: "#702B33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/1be3ea996f88ee578858466eff6741ac67fa31b1.jpg",
          },
          {
            articleCode: "1358553001",
            colorName: "Dark blue",
            hex: "#323842",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/4379e1138efe6b74f0a64493ab28f36bc2413bd5.jpg",
          },
          {
            articleCode: "1358553002",
            colorName: "Cream",
            hex: "#EEEDE1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/4aee6ab98842bb65ef11805cdeccb48529943492.jpg",
          },
          {
            articleCode: "1358553003",
            colorName: "Dark beige",
            hex: "#8B6F55",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/4df815a047abc37f6c7d64b15d5be7259941ac6b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1358553004009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1358553004010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1358553004011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1358553004012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1358553004013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Shirt in satin featuring a collar, buttons down the front, a yoke at the back and long sleeves with buttoned cuffs. Rounded hem.",
        compositions: ["Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled polyester from textiles 33%"],
        careInstructions: [],
        measurements: [
          "Sleeve: Length: 65 cm (size S/T(EUR S))",
          "Shoulder: Width: 40 cm (size S/T(EUR S))",
          "Back: Length: 67 cm (size S/T(EUR S))",
          "XS: Width: 93 cm, Length: 62 cm",
          "S: Width: 1.01 m, Length: 64 cm",
          "M: Width: 1.09 m, Length: 65 cm",
          "L: Width: 1.17 m, Length: 66 cm",
          "XL: Width: 1.28 m, Length: 67 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Classic collar"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/1be3ea996f88ee578858466eff6741ac67fa31b1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/1be3ea996f88ee578858466eff6741ac67fa31b1.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/1be3ea996f88ee578858466eff6741ac67fa31b1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872264/hm/women/ae04e7314c7da4c8e0be942297f6662e2bf4366e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1358553004.html",
      },
      {
        id: "1351001001",
        productCode: "1351001_group_001",
        name: "Fitted cotton-blend T-shirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 699,
          regular: 699,
          onSale: false,
          formatted: "Rs.699.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1351001001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/fd2d9d2e8f01b24877fd7b32eda0b972d3bcb4cb.jpg",
          },
          {
            articleCode: "1351001002",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872266/hm/women/b9f1226a754a67bb5a1e2609539110e9abf5d455.jpg",
          },
          {
            articleCode: "1351001010",
            colorName: "Dark dusty pink",
            hex: "#754F5C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/ef59a37329fab2d611f2539991da6bbde7d122d8.jpg",
          },
          {
            articleCode: "1351001005",
            colorName: "Light dusty pink",
            hex: "#BDAFB3",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/3a3ea3f939dd9b58d445b91bab29033c67c7ff13.jpg",
          },
          {
            articleCode: "1351001003",
            colorName: "Dark brown",
            hex: "#52434B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/350224153b6348340b6572ee12fbd6ff8f5f665d.jpg",
          },
          {
            articleCode: "1351001009",
            colorName: "Dark blue",
            hex: "#242B50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872268/hm/women/9d3828558f449de0baed9345ecff8a721e5dcc38.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1351001001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1351001001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1351001001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1351001001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1351001001013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Fitted T-shirt in soft jersey made from a cotton blend with a round neckline and a straight-cut hem.",
        compositions: ["Cotton 95%, Elastane 5%"],
        materials: [
          {
            name: "Cotton",
            amount: "95%",
          },
          {
            name: "Elastane",
            amount: "5%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40° Gentle cycle​",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 70 cm, Length: 52 cm",
          "S: Width: 78 cm, Length: 56 cm",
          "M: Width: 86 cm, Length: 57 cm",
          "L: Width: 94 cm, Length: 59 cm",
          "XL: Width: 1.06 m, Length: 60 cm",
        ],
        attributes: {
          weight: "200 g",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Slim fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/fd2d9d2e8f01b24877fd7b32eda0b972d3bcb4cb.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/c0f83aadb1db27af066f82c5936eba6d406a4bc3.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/c0f83aadb1db27af066f82c5936eba6d406a4bc3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/97383335944a79dca0b825d4626b872562008223.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872266/hm/women/b901f0b74cac2004a26795585ef24b8dde7dfa12.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/067974c7bf7ed3c8c0fb9c9edadaaddcada22844.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872265/hm/women/fd2d9d2e8f01b24877fd7b32eda0b972d3bcb4cb.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872266/hm/women/edf16518e6d2b3b8a5e5930f845d9ada0fb97fb8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1351001001.html",
      },
      {
        id: "1359579001",
        productCode: "1359579_group_001",
        name: "Brushed cardigan",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_cardigansjumpers_cardigans",
        productType: "Cardigan",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 2299,
          regular: 2299,
          onSale: false,
          formatted: "Rs.2,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Red",
          hex: "#8D2535",
          shade: "Ruby red",
        },
        colorVariants: [
          {
            articleCode: "1359579001",
            colorName: "Red",
            hex: "#8D2535",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/09a0d9d6050df773046efcb1a16d284b1c112f5b.jpg",
          },
          {
            articleCode: "1359579003",
            colorName: "Dark plum purple",
            hex: "#544B4F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872269/hm/women/ba5283c8d70c7ef9f0eb992a7cb2e4d57929d2d7.jpg",
          },
          {
            articleCode: "1359579002",
            colorName: "Cream",
            hex: "#EEEDE1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872270/hm/women/281c127d4398cb5197b7559cc7445026d0feae3e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1359579001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1359579001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1359579001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1359579001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1359579001013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Cardigan in a soft knit containing some wool with a gently brushed finish. Features a round, rib-trimmed neckline, buttons down the front, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Polyester 81%, Polyamide 10%, Wool 7%, Elastane 2%"],
        materials: [
          {
            name: "Polyester",
            amount: "81%",
          },
          {
            name: "Polyamide",
            amount: "10%",
          },
          {
            name: "Wool",
            amount: "7%",
          },
          {
            name: "Elastane",
            amount: "2%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 81%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 94 cm, Length: 52 cm",
          "S: Width: 1.02 m, Length: 54 cm",
          "M: Width: 1.10 m, Length: 56 cm",
          "L: Width: 1.18 m, Length: 58 cm",
          "XL: Width: 1.26 m, Length: 60 cm",
        ],
        attributes: {
          productTypeName: "Cardigan",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/09a0d9d6050df773046efcb1a16d284b1c112f5b.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872268/hm/women/3433aee562d6960cc638859c5fbd560197008598.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872268/hm/women/3433aee562d6960cc638859c5fbd560197008598.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872269/hm/women/c41c6c7821dee963b5b3113c9aa0b2d3f17edf5f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872270/hm/women/faef773d547c7d7818b608ef48fbc4b56bfbf59f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872269/hm/women/4818cefb16099d18e2682b2881a597a0bd41624c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872269/hm/women/3b0c9242d463d812389316117727c4d0229ac84e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872269/hm/women/6ee15c55d2df16a462ee4680f397f9ce8c31396f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872267/hm/women/09a0d9d6050df773046efcb1a16d284b1c112f5b.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872270/hm/women/2a87c57c2d11ca3204fc48454dc5517ddc850211.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1359579001.html",
      },
      {
        id: "1356648003",
        productCode: "1356648_group_003",
        name: "Rib-knit jumper",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_cardigansjumpers_jumpers",
        productType: "Jumper",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#7F202C",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1356648003",
            colorName: "Dark red",
            hex: "#7F202C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/95180ea13636b7e0883b12a870cd1bc0e5571127.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1356648003009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1356648003010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1356648003011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1356648003012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1356648003013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Jumper in a soft rib knit containing some wool. Features a round neckline, dropped shoulders and long sleeves. Straight hem.",
        compositions: ["Polyester 52%, Acrylic 40%, Wool 5%, Elastane 3%"],
        materials: [
          {
            name: "Polyester",
            amount: "52%",
          },
          {
            name: "Acrylic",
            amount: "40%",
          },
          {
            name: "Wool",
            amount: "5%",
          },
          {
            name: "Elastane",
            amount: "3%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          weight: "270 g",
          productTypeName: "JUMPER",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Myanmar",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/95180ea13636b7e0883b12a870cd1bc0e5571127.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/95180ea13636b7e0883b12a870cd1bc0e5571127.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/95180ea13636b7e0883b12a870cd1bc0e5571127.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/373c8d1aea362596da90a16906d38925a7850578.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1356648003.html",
      },
      {
        id: "1356646005",
        productCode: "1356646_group_005",
        name: "One-shoulder jumper",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_cardigansjumpers_jumpers",
        productType: "Jumper",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dusty pink",
          hex: "#512529",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1356646005",
            colorName: "Dusty pink",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/8f8f59fa5aeb6a3812ce9c2627b34b8660393e70.jpg",
          },
          {
            articleCode: "1356646006",
            colorName: "Dark green",
            hex: "#403C2D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/935a4e4ae179e17ec111cc3aa4346e5ae68183a7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1356646005009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1356646005010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1356646005011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1356646005012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1356646005013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Long one-shoulder jumper in a soft knit containing some wool. Asymmetric neckline, low dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: [
          "Polyester 60%, Polyamide 24%, Acrylic 9%, Wool 5%, Elastane 2%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "60%",
          },
          {
            name: "Polyamide",
            amount: "24%",
          },
          {
            name: "Acrylic",
            amount: "9%",
          },
          {
            name: "Wool",
            amount: "5%",
          },
          {
            name: "Elastane",
            amount: "2%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Low iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          productTypeName: "JUMPER",
          garmentLength: ["Long"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["One-shoulder"],
          neckLineStyle: ["Asymmetric neckline"],
          countryOfProduction: "Myanmar",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/8f8f59fa5aeb6a3812ce9c2627b34b8660393e70.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/8f8f59fa5aeb6a3812ce9c2627b34b8660393e70.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872271/hm/women/8f8f59fa5aeb6a3812ce9c2627b34b8660393e70.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872272/hm/women/a9e0d6c17831085611b9b668dc7ba9645b5f36d3.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1356646005.html",
      },
      {
        id: "1314276012",
        productCode: "1314276_group_012",
        name: "Print-motif sweatshirt",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue",
          hex: "#272836",
          shade:
            "Navy blue|Bright blue|Cobalt blue|Indigo|Dark blue|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1314276012",
            colorName: "Navy blue",
            hex: "#272836",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/66f79b426912074c51e39c7f43071f8c527807d1.jpg",
          },
          {
            articleCode: "1314276011",
            colorName: "Green/Paris",
            hex: "#3F4844",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872221/hm/women/5e6bd222286b0cc3414ddbe0a6d5cab622f69e22.jpg",
          },
          {
            articleCode: "1314276013",
            colorName: "Dark brown",
            hex: "#3C2A2B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/0410abca51e989feaef605f7c010d1d9b9c527b5.jpg",
          },
          {
            articleCode: "1314276007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/237ee5a6d6996e8d2341de43d810b0ac097098da.jpg",
          },
          {
            articleCode: "1314276009",
            colorName: "Burgundy",
            hex: "#54444B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872227/hm/women/c32166516ebe42166ade610da5f8c8940087d6f3.jpg",
          },
          {
            articleCode: "1314276001",
            colorName: "Dark grey/Sport Club",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872230/hm/women/ffa8cca6cca95410f94811ce5f5ddc8efc2f40a0.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1314276012008",
            name: "XXS",
            inStock: true,
          },
          {
            sizeCode: "1314276012009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1314276012010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1314276012011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1314276012012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1314276012013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Oversized top in sweatshirt fabric with a soft brushed inside and a print motif on the front. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 62%, Polyester 38%"],
        materials: [
          {
            name: "Cotton",
            amount: "62%",
          },
          {
            name: "Polyester",
            amount: "38%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 23%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 1.05 m, Length: 51 cm",
          "XS: Width: 1.07 m, Length: 52 cm",
          "S: Width: 1.15 m, Length: 56 cm",
          "M: Width: 1.21 m, Length: 57 cm",
          "L: Width: 1.27 m, Length: 59 cm",
          "XL: Width: 1.37 m, Length: 61 cm",
        ],
        attributes: {
          weight: "440 g",
          productTypeName: "SWEATSHIRT",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/66f79b426912074c51e39c7f43071f8c527807d1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/e90fc870b25c0dc98dc37a51c970fa722e4e2060.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/e90fc870b25c0dc98dc37a51c970fa722e4e2060.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872274/hm/women/c018f29880989ed0f9b4654008b4fb029d624292.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872272/hm/women/d2ddf825d0cc29e4f20e1f9b0ca222a79396957a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/6dbcf535aea5061523e25ccb025cc9c70b22faaf.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872226/hm/women/66f79b426912074c51e39c7f43071f8c527807d1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/6d74556f57606cbde8265c2002be97383baf6a7c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1314276012.html",
      },
      {
        id: "1372607001",
        productCode: "1372607_group_001",
        name: "Satin pyjamas",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_nightwear_pyjamas",
        productType: "Pyjama set",
        productGroup: "Nightwear",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Red",
          hex: "#943827",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1372607001",
            colorName: "Red",
            hex: "#943827",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/111a253dd4cde789dffbb80d6d86c9ebd23fb603.jpg",
          },
          {
            articleCode: "1372607002",
            colorName: "Pale beige",
            hex: "#D8D0CB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/386f3337f7e885f5f496a444598f290c4bd47859.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1372607001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1372607001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1372607001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1372607001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1372607001013",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Pyjamas with a shirt and pair of bottoms in textured satin with piping details. Shirt with a resort collar, buttons down the front, a patch chest pocket and long sleeves. Bottoms with covered elastication at the waist.",
        compositions: ["Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: Top: 100 cm Bottom: 63 cm , Length: Top: 63 cm Bottom: 69 cm ",
          "S: Width: Top: 1.08 m Bottom: 70 cm , Length: Top: 65 cm Bottom: 71 cm ",
          "M: Width: Top: 1.16 m Bottom: 78 cm , Length: Top: 66 cm Bottom: 71 cm ",
          "L: Width: Top: 1.24 m Bottom: 86 cm , Length: Top: 67 cm Bottom: 70 cm ",
          "XL: Width: Top: 1.36 m Bottom: 96 cm , Length: Top: 68 cm Bottom: 69 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "Pyjama set",
          garmentLength: ["Long", "Regular length"],
          sleeveLength: ["Long sleeve"],
          collarStyle: ["Resort collar"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/111a253dd4cde789dffbb80d6d86c9ebd23fb603.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/a7a7811473f7f4369c13b6b3eba1b778a82e5680.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/a7a7811473f7f4369c13b6b3eba1b778a82e5680.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872274/hm/women/bdbd59ce3f16cd62e23eaa2d0a790706449d8893.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872274/hm/women/403f343937c0c3484a5e7456918ac6ead383f86f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/6f92836bb02476f428faa075e514b9f1129b01ea.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872274/hm/women/d7527dca15e574450b7cb3d795e7443ba20685e6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872273/hm/women/111a253dd4cde789dffbb80d6d86c9ebd23fb603.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/c21f3a54fd88568024cd83f37445fb1957f3bab1.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1372607001.html",
      },
      {
        id: "1234775001",
        productCode: "1234775_group_001",
        name: "Oversized zip-through hoodie",
        brand: "H&M",
        category: "women",
        subCategory: "ladies_basics_tops_longsleeve",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1234775001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/c00d7a9de86ae824a4f3554b0f87bf245dca59fa.jpg",
          },
          {
            articleCode: "1234775021",
            colorName: "Dark mauve grey",
            hex: "#433F44",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872276/hm/women/120016af662af0b067be046a0ec4d9f7296022a9.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1234775001008",
            name: "XXS",
            inStock: false,
          },
          {
            sizeCode: "1234775001009",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1234775001010",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1234775001011",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1234775001012",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1234775001013",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1234775001014",
            name: "XXL",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "divided", "basics"],
        markers: [],
        description:
          "Oversized zip-through hoodie in sweatshirt fabric with a soft brushed inside. Double-layered hood, a zip down the front, low dropped shoulders and long sleeves. Kangaroo pockets and ribbing at the cuffs and hem.",
        compositions: ["Cotton 58%, Polyester 42%"],
        materials: [
          {
            name: "Cotton",
            amount: "58%",
          },
          {
            name: "Polyester",
            amount: "42%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 27%"],
        careInstructions: [
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XXS: Width: 1.11 m, Length: 62 cm",
          "XS: Width: 1.15 m, Length: 64 cm",
          "S: Width: 1.23 m, Length: 65 cm",
          "M: Width: 1.31 m, Length: 67 cm",
          "L: Width: 1.39 m, Length: 69 cm",
          "XL: Width: 1.47 m, Length: 71 cm",
          "XXL: Width: 1.55 m, Length: 73 cm",
        ],
        attributes: {
          productTypeName: "Hoodie",
          concepts: ["DIVIDED", "BASICS"],
          garmentLength: ["Long"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/c00d7a9de86ae824a4f3554b0f87bf245dca59fa.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/a199f981298fbd98b496aa0bc87b6c407b4b4d44.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/a199f981298fbd98b496aa0bc87b6c407b4b4d44.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/b49a371474d615df19c40ba0ea28f6ecb7bd7de8.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872276/hm/women/7c3d0dc46ddf35db4879e0d9e3baf23808a006de.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872276/hm/women/9fc62c5e6138872162f6e9b704bab8fc4895b8f9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872275/hm/women/c00d7a9de86ae824a4f3554b0f87bf245dca59fa.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1234775001.html",
      },
    ],
  },
  {
    category: "men",
    count: 30,
    products: [
      {
        id: "1308010007",
        productCode: "1308010_group_007",
        name: "Loose  Fit Zip-through hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_zipup",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1308010007",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f5a6dc25b55a179edab1d2882d61cb92f06060af.jpg",
          },
          {
            articleCode: "1308010008",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/ed65cdb0f0a44451a47f3d43747c53c719ea34a7.jpg",
          },
          {
            articleCode: "1308010003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/cd977f952616328480cab5601a55406720ad1b74.jpg",
          },
          {
            articleCode: "1308010029",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/62e557476c1c68590561284d0c2ed5065832ac84.jpg",
          },
          {
            articleCode: "1308010025",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/834b2f970508f32eb9d1c8251aacacc5533e6e8e.jpg",
          },
          {
            articleCode: "1308010022",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/3249cbcbe17a9b674c471623ee59de12e8620cde.jpg",
          },
          {
            articleCode: "1308010030",
            colorName: "Light dusty blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/cc359f5c4271b921b02bf591c394410f5461821d.jpg",
          },
          {
            articleCode: "1308010016",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/01976be0859293db188c7cb2f680066d16b7f115.jpg",
          },
          {
            articleCode: "1308010027",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/f155e9e3c1672e7d2a0ff81e1c7724dd20b07e8b.jpg",
          },
          {
            articleCode: "1308010001",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/271f104866f01e07737b6a48dbce4330cb3a5746.jpg",
          },
          {
            articleCode: "1308010018",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/6cc188b9587f0b83a5a5a5a0693cc1710aafa4f1.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308010007010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308010007011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308010007012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308010007013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308010007014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308010007015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Zip-through hoodie in midweight sweatshirt fabric with a soft brushed inside. Hood with a drawstring, zip down the front and front pockets. Dropped shoulders, long sleeves and ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f5a6dc25b55a179edab1d2882d61cb92f06060af.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f41a43aca655f56ceffcd9ad3d0cfecc9188adf6.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f41a43aca655f56ceffcd9ad3d0cfecc9188adf6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/230e50c63a6f417cc4cc7b7df4e001a6041bd24f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/4f122b3ccaf467bae319d35ae93774fad491e9ba.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/6564a77a0469acc27489d016f3e0d01309755928.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f5a6dc25b55a179edab1d2882d61cb92f06060af.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/dc2ba31896a6de8d0529fb4b12a59540c9845a19.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308010007.html",
      },
      {
        id: "0970819127",
        productCode: "0970819_group_127",
        name: "Loose Fit Hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_hoodies",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Red",
          hex: "#8B313D",
          shade: "Ruby red",
        },
        colorVariants: [
          {
            articleCode: "0970819127",
            colorName: "Red",
            hex: "#8B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          },
          {
            articleCode: "0970819138",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
          },
          {
            articleCode: "0970819001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
          },
          {
            articleCode: "0970819140",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
          },
          {
            articleCode: "0970819137",
            colorName: "Light khaki green",
            hex: "#888D82",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/6585a60a2b07cd427c5930dd8e25f6bda9c106d3.jpg",
          },
          {
            articleCode: "0970819007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/b85be7b1fb12ea62271f18c4ce7271138d47b696.jpg",
          },
          {
            articleCode: "0970819136",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/de8b6ce453b053fa39e0e6474c9f17fb5cd76630.jpg",
          },
          {
            articleCode: "0970819133",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/3131552cbe7d2de5542f19aabf765610dd1e56bb.jpg",
          },
          {
            articleCode: "0970819135",
            colorName: "Dark green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/d304f2570b3f356f4b5d758c3d1d295d16197826.jpg",
          },
          {
            articleCode: "0970819139",
            colorName: "Light blue",
            hex: "#B0BDC8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/4a5a1cfbe6662cc6a6f9c6f906ba49562a4e2ea4.jpg",
          },
          {
            articleCode: "0970819116",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/dd6b022f57e4776494de78650599b067cc124536.jpg",
          },
          {
            articleCode: "0970819126",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/8f5cd5043d33bc8b9a14bdc41ca22a9c06b0e62c.jpg",
          },
          {
            articleCode: "0970819121",
            colorName: "Dark forest green",
            hex: "#2D3938",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0970819127010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0970819127011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0970819127012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0970819127013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0970819127014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0970819127015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: ["Recycled polyester from textiles 11%"],
        careInstructions: [
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          weight: "600 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hoodie"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/cba3354093adff82906fae67e4b1bb9a7d9df5b9.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0970819127.html",
      },
      {
        id: "1362738003",
        productCode: "1362738_group_003",
        name: "Overshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_jacketscoats_shirtjackets",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1362738003",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/47174891eb9ce4048d02f3d75f0319342f17adba.jpg",
          },
          {
            articleCode: "1362738001",
            colorName: "Dark grey marl",
            hex: "#4F5155",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872284/hm/men/17fc5116a17233a8e78b6db955ca68e4d7269018.jpg",
          },
          {
            articleCode: "1362738002",
            colorName: "Dark beige",
            hex: "#403737",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872284/hm/men/dc75778acb830db522beb722b303aaff2ae4c987.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1362738003010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1362738003011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1362738003012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1362738003013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1362738003014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1362738003015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Overshirt in felted fabric with a collar, zip down the front and welt front pockets. Taffeta lining.",
        compositions: [
          "Shell: Polyester 92%, Viscose 8%",
          "Pocket lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "92%",
          },
          {
            name: "Viscose",
            amount: "8%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Can be dry cleaned",
        ],
        measurements: [
          "Sleeve: Length: 65 cm (size L/L(EUR L))",
          "Shoulder: Width: 54.2 cm (size L/L(EUR L))",
          "Back: Length: 67.5 cm (size L/L(EUR L))",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Classic collar"],
          clothingStyle: ["Overshirt"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/47174891eb9ce4048d02f3d75f0319342f17adba.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/fa753e1a285530e093135ca669b7c5047882c040.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/fa753e1a285530e093135ca669b7c5047882c040.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/d9dbfc68393e02a4ebc44853f8994ac8e2b9313e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872284/hm/men/fa6bb490b934f6e8d0a71621f409d591d1a1d445.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872284/hm/men/0744d36fff38924edb684a31322d180b04bda63e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872284/hm/men/97a75e89722151fed80d06ca6ff6fdfe763dd29d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/47174891eb9ce4048d02f3d75f0319342f17adba.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/8fd2292957b2717a0ba41faacc8c411ca6d8980a.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1362738003.html",
      },
      {
        id: "0945531082",
        productCode: "0945531_group_082",
        name: "3-pack Regular Fit T-shirts",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_multipacks",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black/Burgundy",
          hex: "#3A1A19",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "0945531082",
            colorName: "Black/Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/fc6330a220fe0d154a5521827f29c070ece150d9.jpg",
          },
          {
            articleCode: "0945531072",
            colorName: "Grey marl/Black/White",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/fa13d0033c182d947a1d20c76cae762ace2a29b2.jpg",
          },
          {
            articleCode: "0945531083",
            colorName: "Dusty blue/Black/White",
            hex: "#4B5C7A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/2748b1ac469dcad8c8d4cd722a979414e8bca57a.jpg",
          },
          {
            articleCode: "0945531076",
            colorName: "Yellow/Burgundy/Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/fa857386d7fb8e64498e14796d3f7a91d4976710.jpg",
          },
          {
            articleCode: "0945531075",
            colorName: "Dark brown/Light blue/Green",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/ca30ea6c126039e5c528a7e328be68b16f129197.jpg",
          },
          {
            articleCode: "0945531012",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/19108b8f7717f2afbeb05c645a5fe6640b961445.jpg",
          },
          {
            articleCode: "0945531001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/6586560871845dd06b093e3777ddfb71f78ff84b.jpg",
          },
          {
            articleCode: "0945531080",
            colorName: "Navy blue/Dark green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/79d87abc4f4cfd801527c22a36a77966eb31746f.jpg",
          },
          {
            articleCode: "0945531077",
            colorName: "Navy blue/Blue/White",
            hex: "#465161",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/3298eb7a8f77ffb8536973d1acea7cccfc322dc4.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0945531082010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0945531082011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0945531082012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0945531082013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0945531082014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0945531082015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "basics"],
        markers: [],
        description:
          "T-shirts in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          weight: "600 g",
          pieces: "3",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/fc6330a220fe0d154a5521827f29c070ece150d9.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/fc6330a220fe0d154a5521827f29c070ece150d9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872285/hm/men/fc6330a220fe0d154a5521827f29c070ece150d9.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872286/hm/men/3c1c1a26bbe3a4b111e76e13f5572eb72ae0ff0d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0945531082.html",
      },
      {
        id: "1308076013",
        productCode: "1308076_group_013",
        name: "Loose Fit Sweatshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1308076013",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          },
          {
            articleCode: "1308076037",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          },
          {
            articleCode: "1308076031",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          },
          {
            articleCode: "1308076032",
            colorName: "Light blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          },
          {
            articleCode: "1308076014",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          },
          {
            articleCode: "1308076033",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/b6286978c638e468e8eb9a1ab9c49767c4e2c552.jpg",
          },
          {
            articleCode: "1308076029",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/c893d1dd07ac406d4bbf4d5f53a670d46d38afb3.jpg",
          },
          {
            articleCode: "1308076003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/41297c5db93e65aec5215d5166a7bb15fa0b10c5.jpg",
          },
          {
            articleCode: "1308076030",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/7a41e35cee4bf5572331d5e3b527835ab076beb9.jpg",
          },
          {
            articleCode: "1308076007",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/908265eaea9476d9c7746a7aee8a5f8d5a682663.jpg",
          },
          {
            articleCode: "1308076038",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/b07e11b69eada9f82e8312e3803ec017149cc02c.jpg",
          },
          {
            articleCode: "1308076002",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/e1af2fb516cc23396c57eef32dcd056f20f2df05.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308076013010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308076013011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308076013012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308076013013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308076013014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308076013015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Top in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: ["Line dry", "Medium iron", "Dry clean only"],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck", "Round neck"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/70ef9a42c196b9cc587986bb18c36880abd374fe.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/70ef9a42c196b9cc587986bb18c36880abd374fe.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/3888f79e04c9b96e5e084a86b7112651d30d6d8a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/9f426858c783b726b3da0610aef0fada1f00d375.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/3ca586f37765c9018fadee22ed7d62d40da45fd3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/d95649ab82f8e244c3508c7d8cf1bed8d4ece2ac.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308076013.html",
      },
      {
        id: "1302372001",
        productCode: "1302372_group_001",
        name: "Loose Fit Sweatpants",
        brand: "H&M",
        category: "men",
        subCategory: "men_trousers_casual",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1302372001",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/d2574d505cc6cd3bfbe677cf5348cda3d5ffb939.jpg",
          },
          {
            articleCode: "1302372003",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/ecedfe5492def4518cbd18ba0946a0215b48a1fe.jpg",
          },
          {
            articleCode: "1302372018",
            colorName: "Navy blue",
            hex: "#2D323F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/51da3679d417aa5694336b3021a1b891c908cfc4.jpg",
          },
          {
            articleCode: "1302372017",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/95ec135c6ea2a6fc4a9cff007d02ccab047b61e9.jpg",
          },
          {
            articleCode: "1302372015",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/cd6a6bd782e247c384dc22c55adbc28d1388f9be.jpg",
          },
          {
            articleCode: "1302372019",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872293/hm/men/7261f784a491831b2dfc874754ab4f39a2bd7614.jpg",
          },
          {
            articleCode: "1302372022",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872294/hm/men/ca490b444ea994a7db462af69bc29a6931d25bcd.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1302372001008",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1302372001009",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1302372001010",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1302372001011",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1302372001012",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1302372001013",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Sweatpants in heavyweight sweatshirt fabric made from a cotton blend, with a soft brushed inside. Designed with covered elastication and a drawstring at the waist, and side pockets. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 38%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Dry clean only",
        ],
        measurements: [
          "Outside leg: Length: 111 cm (size L/L(EUR L))",
          "XS: Width: 73 cm, Length: 70 cm",
          "S: Width: 80 cm, Length: 71 cm",
          "M: Width: 87 cm, Length: 72 cm",
          "L: Width: 94 cm, Length: 73 cm",
          "XL: Width: 1.01 m, Length: 74 cm",
          "XXL: Width: 1.07 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "Trousers",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Loose fit"],
          clothingStyle: ["Sweatpants"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/d2574d505cc6cd3bfbe677cf5348cda3d5ffb939.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/9dcb3b8d7613acc483d147045d7bd3f049704bbf.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/9dcb3b8d7613acc483d147045d7bd3f049704bbf.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/2e62c548b380fa150a69595d16f997b9103334ed.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/a18052f975283a2905a6cbf796979ea6a53de1a1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/5dcf700f25ebb122d9d25337eaa1a5a37c0d972b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/d2574d505cc6cd3bfbe677cf5348cda3d5ffb939.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872293/hm/men/2d677847a16d0e8002b2e671f6ba3630b32fc3d7.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1302372001.html",
      },
      {
        id: "1308076037",
        productCode: "1308076_group_037",
        name: "Loose Fit Sweatshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark beige",
          hex: "#746A5F",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1308076037",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          },
          {
            articleCode: "1308076013",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          },
          {
            articleCode: "1308076031",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          },
          {
            articleCode: "1308076032",
            colorName: "Light blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          },
          {
            articleCode: "1308076014",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          },
          {
            articleCode: "1308076033",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/b6286978c638e468e8eb9a1ab9c49767c4e2c552.jpg",
          },
          {
            articleCode: "1308076029",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/c893d1dd07ac406d4bbf4d5f53a670d46d38afb3.jpg",
          },
          {
            articleCode: "1308076003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/41297c5db93e65aec5215d5166a7bb15fa0b10c5.jpg",
          },
          {
            articleCode: "1308076030",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/7a41e35cee4bf5572331d5e3b527835ab076beb9.jpg",
          },
          {
            articleCode: "1308076007",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/908265eaea9476d9c7746a7aee8a5f8d5a682663.jpg",
          },
          {
            articleCode: "1308076038",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/b07e11b69eada9f82e8312e3803ec017149cc02c.jpg",
          },
          {
            articleCode: "1308076002",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/e1af2fb516cc23396c57eef32dcd056f20f2df05.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308076037010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308076037011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308076037012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308076037013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308076037014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308076037015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "basics"],
        markers: [],
        description:
          "Top in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester 18%",
          "Recycled polyester from textiles 11%",
        ],
        careInstructions: ["Line dry", "Medium iron", "Dry clean only"],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck", "Round neck"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872294/hm/men/1d348ad5a1887410dc77c6bef22ab692f364fd75.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872294/hm/men/1d348ad5a1887410dc77c6bef22ab692f364fd75.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872294/hm/men/16bba2ee2168d9617d1e638a329459c8e8fce427.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872295/hm/men/f30a1e46c336569a74ce66dd2c1492893c2e7036.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872295/hm/men/b1f65aafe7ab156a2674f8fb1972aba29ff8add0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872295/hm/men/8cccba0cbb984d3ca1db5fa0c30b3369f3227821.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308076037.html",
      },
      {
        id: "1308010008",
        productCode: "1308010_group_008",
        name: "Loose  Fit Zip-through hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_zipup",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Grey marl",
          hex: "#AFAFAF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1308010008",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/ed65cdb0f0a44451a47f3d43747c53c719ea34a7.jpg",
          },
          {
            articleCode: "1308010007",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f5a6dc25b55a179edab1d2882d61cb92f06060af.jpg",
          },
          {
            articleCode: "1308010003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/cd977f952616328480cab5601a55406720ad1b74.jpg",
          },
          {
            articleCode: "1308010029",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/62e557476c1c68590561284d0c2ed5065832ac84.jpg",
          },
          {
            articleCode: "1308010025",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/834b2f970508f32eb9d1c8251aacacc5533e6e8e.jpg",
          },
          {
            articleCode: "1308010022",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/3249cbcbe17a9b674c471623ee59de12e8620cde.jpg",
          },
          {
            articleCode: "1308010030",
            colorName: "Light dusty blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/cc359f5c4271b921b02bf591c394410f5461821d.jpg",
          },
          {
            articleCode: "1308010016",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/01976be0859293db188c7cb2f680066d16b7f115.jpg",
          },
          {
            articleCode: "1308010027",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/f155e9e3c1672e7d2a0ff81e1c7724dd20b07e8b.jpg",
          },
          {
            articleCode: "1308010001",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/271f104866f01e07737b6a48dbce4330cb3a5746.jpg",
          },
          {
            articleCode: "1308010018",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/6cc188b9587f0b83a5a5a5a0693cc1710aafa4f1.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308010008010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308010008011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308010008012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308010008013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308010008014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308010008015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Zip-through hoodie in midweight sweatshirt fabric with a soft brushed inside. Hood with a drawstring, zip down the front and front pockets. Dropped shoulders, long sleeves and ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 75%, Polyester 22%, Viscose 3%"],
        materials: [
          {
            name: "Cotton",
            amount: "75%",
          },
          {
            name: "Polyester",
            amount: "22%",
          },
          {
            name: "Viscose",
            amount: "3%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/ed65cdb0f0a44451a47f3d43747c53c719ea34a7.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872295/hm/men/01d8d3e25760abf9e5baa82999f7ef944c41d8fd.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872295/hm/men/01d8d3e25760abf9e5baa82999f7ef944c41d8fd.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872296/hm/men/92d57811dd69ff8ca70609c34109d93af36f617f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872296/hm/men/06faeef5901e0997c4f94e8cc012fb634896225f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872297/hm/men/a1318ddfb3c7e10d6b4d325bf9bbde4989a37425.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/ed65cdb0f0a44451a47f3d43747c53c719ea34a7.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872298/hm/men/1568af08b1ae3f16b8fd9d73874015437a52ee63.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308010008.html",
      },
      {
        id: "1308076031",
        productCode: "1308076_group_031",
        name: "Loose Fit Sweatshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#3F3838",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1308076031",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          },
          {
            articleCode: "1308076013",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          },
          {
            articleCode: "1308076037",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          },
          {
            articleCode: "1308076032",
            colorName: "Light blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          },
          {
            articleCode: "1308076014",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          },
          {
            articleCode: "1308076033",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/b6286978c638e468e8eb9a1ab9c49767c4e2c552.jpg",
          },
          {
            articleCode: "1308076029",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/c893d1dd07ac406d4bbf4d5f53a670d46d38afb3.jpg",
          },
          {
            articleCode: "1308076003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/41297c5db93e65aec5215d5166a7bb15fa0b10c5.jpg",
          },
          {
            articleCode: "1308076030",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/7a41e35cee4bf5572331d5e3b527835ab076beb9.jpg",
          },
          {
            articleCode: "1308076007",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/908265eaea9476d9c7746a7aee8a5f8d5a682663.jpg",
          },
          {
            articleCode: "1308076038",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/b07e11b69eada9f82e8312e3803ec017149cc02c.jpg",
          },
          {
            articleCode: "1308076002",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/e1af2fb516cc23396c57eef32dcd056f20f2df05.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308076031010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308076031011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308076031012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308076031013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308076031014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308076031015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "basics"],
        markers: [],
        description:
          "Top in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester 21%",
          "Recycled polyester from textiles 11%",
        ],
        careInstructions: ["Line dry", "Medium iron", "Dry clean only"],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck", "Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872296/hm/men/d59f1f2073e87a6936f1120a843c3967d70f02b8.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872296/hm/men/d59f1f2073e87a6936f1120a843c3967d70f02b8.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872296/hm/men/3667604092cf6d9e7c9fe2118cae9e6ac7bd69ea.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872298/hm/men/cd973c6134a58001309c63580ad963f5d5066192.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872297/hm/men/9441bf1ce058f93cfab0defc2b0f83dcac4c1e32.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872298/hm/men/3d990b589ba5c3b7893b71993964305f6e9d66dd.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308076031.html",
      },
      {
        id: "0970819138",
        productCode: "0970819_group_138",
        name: "Loose Fit Hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_hoodies",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Burgundy",
          hex: "#3A1A19",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "0970819138",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
          },
          {
            articleCode: "0970819127",
            colorName: "Red",
            hex: "#8B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          },
          {
            articleCode: "0970819001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
          },
          {
            articleCode: "0970819140",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
          },
          {
            articleCode: "0970819137",
            colorName: "Light khaki green",
            hex: "#888D82",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/6585a60a2b07cd427c5930dd8e25f6bda9c106d3.jpg",
          },
          {
            articleCode: "0970819007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/b85be7b1fb12ea62271f18c4ce7271138d47b696.jpg",
          },
          {
            articleCode: "0970819136",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/de8b6ce453b053fa39e0e6474c9f17fb5cd76630.jpg",
          },
          {
            articleCode: "0970819133",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/3131552cbe7d2de5542f19aabf765610dd1e56bb.jpg",
          },
          {
            articleCode: "0970819135",
            colorName: "Dark green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/d304f2570b3f356f4b5d758c3d1d295d16197826.jpg",
          },
          {
            articleCode: "0970819139",
            colorName: "Light blue",
            hex: "#B0BDC8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/4a5a1cfbe6662cc6a6f9c6f906ba49562a4e2ea4.jpg",
          },
          {
            articleCode: "0970819116",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/dd6b022f57e4776494de78650599b067cc124536.jpg",
          },
          {
            articleCode: "0970819126",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/8f5cd5043d33bc8b9a14bdc41ca22a9c06b0e62c.jpg",
          },
          {
            articleCode: "0970819121",
            colorName: "Dark forest green",
            hex: "#2D3938",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0970819138010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0970819138011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0970819138012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0970819138013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0970819138014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0970819138015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "basics"],
        markers: [],
        description:
          "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: [
          "Shell: Cotton 60%, Polyester 40%",
          "Hood lining: Cotton 60%, Polyester 40%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester 23%",
          "Recycled polyester from textiles 11%",
        ],
        careInstructions: [
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          weight: "600 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hoodie"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872297/hm/men/87a948945e8541c19e45c87372ac289d506fcf84.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872297/hm/men/87a948945e8541c19e45c87372ac289d506fcf84.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872300/hm/men/02b8876334146345ec0ee6329ccc414ba372b732.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872299/hm/men/6d19b93546104cc52860d5140a486c4530263feb.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872299/hm/men/d37b4161646a142524de8d6091cfdacb93da4567.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872300/hm/men/aff9271fb473fa1f88862101b293598232bba64f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0970819138.html",
      },
      {
        id: "0970819001",
        productCode: "0970819_group_001",
        name: "Loose Fit Hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_hoodies",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "0970819001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
          },
          {
            articleCode: "0970819127",
            colorName: "Red",
            hex: "#8B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          },
          {
            articleCode: "0970819138",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
          },
          {
            articleCode: "0970819140",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
          },
          {
            articleCode: "0970819137",
            colorName: "Light khaki green",
            hex: "#888D82",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/6585a60a2b07cd427c5930dd8e25f6bda9c106d3.jpg",
          },
          {
            articleCode: "0970819007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/b85be7b1fb12ea62271f18c4ce7271138d47b696.jpg",
          },
          {
            articleCode: "0970819136",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/de8b6ce453b053fa39e0e6474c9f17fb5cd76630.jpg",
          },
          {
            articleCode: "0970819133",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/3131552cbe7d2de5542f19aabf765610dd1e56bb.jpg",
          },
          {
            articleCode: "0970819135",
            colorName: "Dark green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/d304f2570b3f356f4b5d758c3d1d295d16197826.jpg",
          },
          {
            articleCode: "0970819139",
            colorName: "Light blue",
            hex: "#B0BDC8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/4a5a1cfbe6662cc6a6f9c6f906ba49562a4e2ea4.jpg",
          },
          {
            articleCode: "0970819116",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/dd6b022f57e4776494de78650599b067cc124536.jpg",
          },
          {
            articleCode: "0970819126",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/8f5cd5043d33bc8b9a14bdc41ca22a9c06b0e62c.jpg",
          },
          {
            articleCode: "0970819121",
            colorName: "Dark forest green",
            hex: "#2D3938",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0970819001010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0970819001011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0970819001012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0970819001013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0970819001014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0970819001015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: [
          "Shell: Cotton 60%, Polyester 40%",
          "Elastic rib: Cotton 95%, Elastane 5%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
          {
            name: "Cotton",
            amount: "95%",
          },
          {
            name: "Elastane",
            amount: "5%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 18%"],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          weight: "600 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hoodie"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872299/hm/men/87d2343b95dc263aea489f1e0ebe0fc64566181a.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872299/hm/men/87d2343b95dc263aea489f1e0ebe0fc64566181a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872300/hm/men/fe3131bf94c8b10c78463d00236bd651189728d2.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/c6dbb8b1958750acbc17fd95c32d3867c17e37eb.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/1b954091c2caa69158c54f87049d9afd4cbf594f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/f9dd5d23c214d9c81800b78a4bf85a97f3bbc215.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0970819001.html",
      },
      {
        id: "1289456022",
        productCode: "1289456_group_022",
        name: "Regular Fit Corduroy shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_shirts_casual",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Burgundy",
          hex: "#3A1A19",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1289456022",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/fbd8e4d96efa33d3b5462c4102c9f63310f35a13.jpg",
          },
          {
            articleCode: "1289456021",
            colorName: "Navy blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872302/hm/men/7fad0aa4fe6f50df340a943ee2fa2820b6aa42fd.jpg",
          },
          {
            articleCode: "1289456018",
            colorName: "Dark khaki green",
            hex: "#6E6255",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872305/hm/men/c705463ce025673ff6f91f5a78c3bc382aa96ace.jpg",
          },
          {
            articleCode: "1289456019",
            colorName: "Light blue",
            hex: "#8C93B3",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872304/hm/men/46a29870073501f9c71d10e8da44f5a60a370482.jpg",
          },
          {
            articleCode: "1289456017",
            colorName: "Light beige",
            hex: "#D4D0C8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872304/hm/men/8319d6771b9266dbe8d4c4e59bb01aa46228d994.jpg",
          },
          {
            articleCode: "1289456020",
            colorName: "Dark denim grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872304/hm/men/b8bdf473ac5add64749ed3655895df7bc8466f3f.jpg",
          },
          {
            articleCode: "1289456024",
            colorName: "Dark green",
            hex: "#383F3D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872304/hm/men/905e79382f89021dd7d884b157831908c6876a75.jpg",
          },
          {
            articleCode: "1289456013",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872305/hm/men/c7cce21914fdd83b018d3470bc870501573b4e24.jpg",
          },
          {
            articleCode: "1289456026",
            colorName: "Dark purple",
            hex: "#4B4355",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872306/hm/men/15d5159cb458c8c19508ce6536acb5b2b8dae899.jpg",
          },
          {
            articleCode: "1289456007",
            colorName: "Light yellow",
            hex: "#D2C594",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872306/hm/men/fb24d45c74a5ca515173fcf747c1ab8ebcc2f902.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1289456022010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1289456022011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1289456022012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1289456022013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1289456022014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1289456022015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Shirt in soft cotton corduroy with a button-down collar. Features a classic front, open chest pocket and a back yoke. Long sleeves with adjustable buttoned cuffs and a sleeve placket with a link button. Finished with a rounded hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [],
        measurements: [
          "Sleeve: Length: 65 cm (size M/L(EUR M))",
          "Shoulder: Width: 53 cm (size M/L(EUR M))",
          "Back: Length: 74 cm (size M/L(EUR M))",
          "XS: Width: 1.03 m, Length: 69 cm",
          "S: Width: 1.11 m, Length: 71 cm",
          "M: Width: 1.19 m, Length: 72 cm",
          "L: Width: 1.27 m, Length: 74 cm",
          "XL: Width: 1.35 m, Length: 75 cm",
          "XXL: Width: 1.43 m, Length: 76 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Button-down collar"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/fbd8e4d96efa33d3b5462c4102c9f63310f35a13.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/daa1bf7ee98e389578387f87d7271fe97f750b06.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/daa1bf7ee98e389578387f87d7271fe97f750b06.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872302/hm/men/1b423c1a23711bd833696d9b4c2027b5f9a6793b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872303/hm/men/92517a4b317430875951210ee0d45c003f31f563.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872303/hm/men/e7d7e19ed1ed1f1173f3b1c6b4ebccb626bfe8d0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872301/hm/men/fbd8e4d96efa33d3b5462c4102c9f63310f35a13.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872303/hm/men/da232466dbb21e089df82e5cf082b19cfb4e407c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1289456022.html",
      },
      {
        id: "1308010003",
        productCode: "1308010_group_003",
        name: "Loose  Fit Zip-through hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_zipup",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark blue",
          hex: "#2B2C32",
          shade: "Dark blue|Navy blue",
        },
        colorVariants: [
          {
            articleCode: "1308010003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/cd977f952616328480cab5601a55406720ad1b74.jpg",
          },
          {
            articleCode: "1308010007",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872277/hm/men/f5a6dc25b55a179edab1d2882d61cb92f06060af.jpg",
          },
          {
            articleCode: "1308010008",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/ed65cdb0f0a44451a47f3d43747c53c719ea34a7.jpg",
          },
          {
            articleCode: "1308010029",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/62e557476c1c68590561284d0c2ed5065832ac84.jpg",
          },
          {
            articleCode: "1308010025",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/834b2f970508f32eb9d1c8251aacacc5533e6e8e.jpg",
          },
          {
            articleCode: "1308010022",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/3249cbcbe17a9b674c471623ee59de12e8620cde.jpg",
          },
          {
            articleCode: "1308010030",
            colorName: "Light dusty blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/cc359f5c4271b921b02bf591c394410f5461821d.jpg",
          },
          {
            articleCode: "1308010016",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/01976be0859293db188c7cb2f680066d16b7f115.jpg",
          },
          {
            articleCode: "1308010027",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872279/hm/men/f155e9e3c1672e7d2a0ff81e1c7724dd20b07e8b.jpg",
          },
          {
            articleCode: "1308010001",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/271f104866f01e07737b6a48dbce4330cb3a5746.jpg",
          },
          {
            articleCode: "1308010018",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/6cc188b9587f0b83a5a5a5a0693cc1710aafa4f1.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308010003010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308010003011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308010003012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308010003013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308010003014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308010003015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Zip-through hoodie in midweight sweatshirt fabric with a soft brushed inside. Hood with a drawstring, zip down the front and front pockets. Dropped shoulders, long sleeves and ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/cd977f952616328480cab5601a55406720ad1b74.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872306/hm/men/a9458b1360141c8db0fed49d77d0f863a7fbc0a9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872306/hm/men/a9458b1360141c8db0fed49d77d0f863a7fbc0a9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872305/hm/men/1907f9e034380c15d6c2f82eefa3f1bb78acb8fe.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872306/hm/men/eb58bd56aa9b188803f875d9d4b2c199c3b16463.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/36ac7c39e70311ffb52b399da37d019fe392bbfa.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872278/hm/men/cd977f952616328480cab5601a55406720ad1b74.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/b8bed2040e197a9949d597016adb1c2c85b47a37.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308010003.html",
      },
      {
        id: "1216851028",
        productCode: "1216851_group_028",
        name: "5-pack Regular Fit T-shirts",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_multipacks",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 2299,
          regular: 2299,
          onSale: false,
          formatted: "Rs.2,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Brown",
          hex: "#594C43",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1216851028",
            colorName: "Brown",
            hex: "#594C43",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/b29e44e7c2f3801c2618fd10b82a5cf8afd98b67.jpg",
          },
          {
            articleCode: "1216851002",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/0e92cb783c64f1e00ba79458491fc75e7e620faa.jpg",
          },
          {
            articleCode: "1216851001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/c347b61f215b45029c6ae267c1a65ab9dc950c39.jpg",
          },
          {
            articleCode: "1216851034",
            colorName: "Green/White/Black/Navy blue",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872309/hm/men/b58336588ea52de1bb5556b5609110deec180996.jpg",
          },
          {
            articleCode: "1216851031",
            colorName: "Dark khaki green/Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872309/hm/men/55c7f958a4f43a8c2b00c579710c4f662b7fe8bf.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1216851028010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1216851028011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1216851028012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1216851028013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1216851028014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1216851028015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "T-shirts in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 95%, Viscose 5%", "Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "95%",
          },
          {
            name: "Viscose",
            amount: "5%",
          },
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          pieces: "5",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/b29e44e7c2f3801c2618fd10b82a5cf8afd98b67.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/b29e44e7c2f3801c2618fd10b82a5cf8afd98b67.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872307/hm/men/b29e44e7c2f3801c2618fd10b82a5cf8afd98b67.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/6b46cecfe38204b20a39cd27324491137207086e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/64189290fc0a2e2fb6d17cdff9440c2b3150ebd5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1216851028.html",
      },
      {
        id: "1340674002",
        productCode: "1340674_group_002",
        name: "Loose Jeans",
        brand: "H&M",
        category: "men",
        subCategory: "men_jeans_loose",
        productType: "Jeans",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 2499,
          regular: 2499,
          onSale: false,
          formatted: "Rs.2,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Denim black",
          hex: "#000000",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1340674002",
            colorName: "Denim black",
            hex: "#000000",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/d0d272ab53cd01669b42a5069f6ac2c73efbcbb2.jpg",
          },
          {
            articleCode: "1340674009",
            colorName: "Washed dark denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/f055df6ef63a2cda9092228ab59a45b1261eef90.jpg",
          },
          {
            articleCode: "1340674001",
            colorName: "Light denim blue",
            hex: "#80AAD8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/688313bbeeda87e0866875ac226c6309eb682b22.jpg",
          },
          {
            articleCode: "1340674011",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/b328e211c693f0651b31c4f43b792d2b7afd2f38.jpg",
          },
          {
            articleCode: "1340674003",
            colorName: "Denim grey",
            hex: "#706C6F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/d96a513678fe7d2822906459db0389dfc710e94d.jpg",
          },
          {
            articleCode: "1340674007",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/c64ca15823e3c94f7a9941d9cf858dd6c2dfa41e.jpg",
          },
          {
            articleCode: "1340674010",
            colorName: "Dark brown",
            hex: "#4B3935",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/77bc239dfdbbe50ac458a9231cf90f94f4e365ae.jpg",
          },
          {
            articleCode: "1340674004",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872313/hm/men/04aad799930158bc8ec63bda56d85e56055d159a.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1340674002013",
            name: "28/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002016",
            name: "29/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002020",
            name: "30/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002021",
            name: "30/32",
            inStock: true,
          },
          {
            sizeCode: "1340674002024",
            name: "31/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002028",
            name: "32/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002029",
            name: "32/32",
            inStock: true,
          },
          {
            sizeCode: "1340674002032",
            name: "33/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002036",
            name: "34/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002040",
            name: "36/30",
            inStock: true,
          },
          {
            sizeCode: "1340674002044",
            name: "38/30",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a button fly.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 19%"],
        careInstructions: [
          "Wash with similar colours",
          "The colour of this denim may transfer onto light coloured materials",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Dry clean only",
        ],
        measurements: [
          "28/30: Width: 79 cm, Length: 72 cm",
          "29/30: Width: 81 cm, Length: 73 cm",
          "30/30: Width: 84 cm, Length: 73 cm",
          "30/32: Width: 84 cm, Length: 77 cm",
          "31/30: Width: 86 cm, Length: 74 cm",
          "32/30: Width: 89 cm, Length: 74 cm",
          "32/32: Width: 89 cm, Length: 78 cm",
          "33/30: Width: 91 cm, Length: 75 cm",
          "34/30: Width: 94 cm, Length: 75 cm",
          "36/30: Width: 98 cm, Length: 76 cm",
          "38/30: Width: 1.03 m, Length: 76 cm",
        ],
        attributes: {
          productTypeName: "JEANS",
          modelHeightGarmentSize:
            "The model is 187cm/6'2\" and wears a size 32/32",
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Loose fit"],
          clothingStyle: ["Straight leg"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/d0d272ab53cd01669b42a5069f6ac2c73efbcbb2.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872309/hm/men/ee3e327724f842844c37c205426bd26c3a492f9c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872309/hm/men/ee3e327724f842844c37c205426bd26c3a492f9c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872310/hm/men/fbd9d4afbc71cf4cfb64a4c227fda251a6bf0917.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872310/hm/men/72a395bdd34f87f2d962e0e971a4eb57ca0b28f7.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872310/hm/men/3a0fe5b67265097e117b9dcb751da082dbc2db1c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872310/hm/men/b4114d5b608c942bb7b964ceb9bd8d693b359f0b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/d0d272ab53cd01669b42a5069f6ac2c73efbcbb2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/badcedb6c1664032bbcced6076daed15ba596c2d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1340674002.html",
      },
      {
        id: "1340674009",
        productCode: "1340674_group_009",
        name: "Loose Jeans",
        brand: "H&M",
        category: "men",
        subCategory: "men_jeans_loose",
        productType: "Jeans",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 2499,
          regular: 2499,
          onSale: false,
          formatted: "Rs.2,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Washed dark denim blue",
          hex: "#3E64A7",
          shade: "Bright blue|Pastel blue|Blue grey|Royal blue",
        },
        colorVariants: [
          {
            articleCode: "1340674009",
            colorName: "Washed dark denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/f055df6ef63a2cda9092228ab59a45b1261eef90.jpg",
          },
          {
            articleCode: "1340674002",
            colorName: "Denim black",
            hex: "#000000",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872308/hm/men/d0d272ab53cd01669b42a5069f6ac2c73efbcbb2.jpg",
          },
          {
            articleCode: "1340674001",
            colorName: "Light denim blue",
            hex: "#80AAD8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/688313bbeeda87e0866875ac226c6309eb682b22.jpg",
          },
          {
            articleCode: "1340674011",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/b328e211c693f0651b31c4f43b792d2b7afd2f38.jpg",
          },
          {
            articleCode: "1340674003",
            colorName: "Denim grey",
            hex: "#706C6F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/d96a513678fe7d2822906459db0389dfc710e94d.jpg",
          },
          {
            articleCode: "1340674007",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/c64ca15823e3c94f7a9941d9cf858dd6c2dfa41e.jpg",
          },
          {
            articleCode: "1340674010",
            colorName: "Dark brown",
            hex: "#4B3935",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872312/hm/men/77bc239dfdbbe50ac458a9231cf90f94f4e365ae.jpg",
          },
          {
            articleCode: "1340674004",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872313/hm/men/04aad799930158bc8ec63bda56d85e56055d159a.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1340674009013",
            name: "28/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009016",
            name: "29/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009020",
            name: "30/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009021",
            name: "30/32",
            inStock: true,
          },
          {
            sizeCode: "1340674009024",
            name: "31/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009028",
            name: "32/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009029",
            name: "32/32",
            inStock: true,
          },
          {
            sizeCode: "1340674009032",
            name: "33/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009036",
            name: "34/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009040",
            name: "36/30",
            inStock: true,
          },
          {
            sizeCode: "1340674009044",
            name: "38/30",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a button fly.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 18%"],
        careInstructions: [
          "The colour of this denim may transfer onto light coloured materials",
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Dry clean only",
        ],
        measurements: [
          "28/30: Width: 79 cm, Length: 72 cm",
          "29/30: Width: 81 cm, Length: 73 cm",
          "30/30: Width: 84 cm, Length: 73 cm",
          "30/32: Width: 84 cm, Length: 77 cm",
          "31/30: Width: 86 cm, Length: 74 cm",
          "32/30: Width: 89 cm, Length: 74 cm",
          "32/32: Width: 89 cm, Length: 78 cm",
          "33/30: Width: 91 cm, Length: 75 cm",
          "34/30: Width: 94 cm, Length: 75 cm",
          "36/30: Width: 98 cm, Length: 76 cm",
          "38/30: Width: 1.03 m, Length: 76 cm",
        ],
        attributes: {
          productTypeName: "JEANS",
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Loose fit"],
          clothingStyle: ["Straight leg"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/f055df6ef63a2cda9092228ab59a45b1261eef90.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872313/hm/men/df3974d46c35910e0ec577707a4f6a2e4314460d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872313/hm/men/df3974d46c35910e0ec577707a4f6a2e4314460d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872313/hm/men/4bbf8366b7f033bc74ef18960c846a79d1b91281.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/ec528f0feb7572fd083c3a2481a4fcdba528bb30.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/30271820925b78bfe209df071fddcf66867ad687.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872311/hm/men/f055df6ef63a2cda9092228ab59a45b1261eef90.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/fbfebe5b88dd8a153e26d876104bb06597432fd5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1340674009.html",
      },
      {
        id: "1257417001",
        productCode: "1257417_group_001",
        name: "Regular Fit Oxford shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_shirts_longsleeved",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1799,
          regular: 1799,
          onSale: false,
          formatted: "Rs.1,799.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1257417001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/aa8feb22d0472f8a7b4f726e5a00574890920512.jpg",
          },
          {
            articleCode: "1257417016",
            colorName: "Dark khaki green",
            hex: "#525346",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872316/hm/men/784a53ebba852f40b551bac499fcb164cafdd6ba.jpg",
          },
          {
            articleCode: "1257417058",
            colorName: "Light yellow",
            hex: "#F3E29A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872317/hm/men/91f9de6f3b3a2123629f805fec65c9968a48ae82.jpg",
          },
          {
            articleCode: "1257417004",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872317/hm/men/7e639d7ca9e6fb90903c1d39b1b6bb2b3492d8ee.jpg",
          },
          {
            articleCode: "1257417047",
            colorName: "Dark brown",
            hex: "#353031",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872316/hm/men/84961935e4aae80ea6b49750b73c85fd50d727ce.jpg",
          },
          {
            articleCode: "1257417002",
            colorName: "Light blue",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872317/hm/men/33458ce48302df12471fe84ce90995982f93dd10.jpg",
          },
          {
            articleCode: "1257417064",
            colorName: "Light pink",
            hex: "#E8D9DC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872317/hm/men/a1fc95e1a9ac32a174518467e7f99b3dc9bc296a.jpg",
          },
          {
            articleCode: "1257417011",
            colorName: "Light blue/Striped",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872318/hm/men/b1a168578c0031696cfd9cf22c945eda0dcdf851.jpg",
          },
          {
            articleCode: "1257417041",
            colorName: "White/Striped",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872318/hm/men/c73800c020a57d927ef2599c2c752f43809239bd.jpg",
          },
          {
            articleCode: "1257417042",
            colorName: "Red/Striped",
            hex: "#6B3241",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872319/hm/men/22ebe305559eb5a8c2640c9d7b87a575a385b2f2.jpg",
          },
          {
            articleCode: "1257417040",
            colorName: "Dark khaki green",
            hex: "#525346",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872320/hm/men/41e06aaf10df63576715058018bde04274e4690d.jpg",
          },
          {
            articleCode: "1257417048",
            colorName: "White/Striped",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872319/hm/men/37e636f785e55575815515691dd19dc2df0f08f2.jpg",
          },
          {
            articleCode: "1257417035",
            colorName: "Green/Striped",
            hex: "#418553",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872319/hm/men/ddf8180b8e0f0b51fda4f8d8147b7709d78e33fd.jpg",
          },
          {
            articleCode: "1257417056",
            colorName: "Pink/Striped",
            hex: "#CC8BAA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872319/hm/men/b26f4d393e182724f5d33f47197c0364fe564ee9.jpg",
          },
          {
            articleCode: "1257417044",
            colorName: "Cream/Striped",
            hex: "#294525",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872320/hm/men/366d8d59275fabd28fa8405f6cc1dcf27d0b7959.jpg",
          },
          {
            articleCode: "1257417059",
            colorName: "Burgundy",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872320/hm/men/d43faa1d1d7e8643c3bd50d1d1128ac4039b4ded.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1257417001010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1257417001011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1257417001012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1257417001013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1257417001014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1257417001015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Shirt in Oxford cotton with a button-down collar, classic front, yoke at the back and an open chest pocket. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Gently rounded hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Hand wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Sleeve: Length: 64.5 cm (size L/L(EUR L))",
          "Back: Length: 77.5 cm (size L/L(EUR L))",
          "Shoulder: Width: 54.5 cm (size L/L(EUR L))",
          "XS: Width: 1.02 m, Length: 71 cm",
          "S: Width: 1.10 m, Length: 73 cm",
          "M: Width: 1.18 m, Length: 74 cm",
          "L: Width: 1.26 m, Length: 76 cm",
          "XL: Width: 1.34 m, Length: 77 cm",
          "XXL: Width: 1.42 m, Length: 78 cm",
        ],
        attributes: {
          weight: "300 g",
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Button-down collar"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/aa8feb22d0472f8a7b4f726e5a00574890920512.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/3e96fe2879706433dfb4fad614056d6a10a96caa.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/3e96fe2879706433dfb4fad614056d6a10a96caa.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872315/hm/men/6cc532467cbe709dec015d09054cb9385972e725.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872316/hm/men/ede1a1a3eab294905cb755bbb84756d8f3bb11c4.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872315/hm/men/fe786398a447977b1c7c5e9fc76b714c1683a08b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872315/hm/men/ee3c881dcbceb7cf93144cb41265ce3c7aefb528.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872314/hm/men/aa8feb22d0472f8a7b4f726e5a00574890920512.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872316/hm/men/62a478cc07bea255593c3c05ea4d63323345a6d2.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872316/hm/men/a2253b013dfc8f1ca53192d67dda7cd03207d9a5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1257417001.html",
      },
      {
        id: "0685816306",
        productCode: "0685816_group_306",
        name: "Regular Fit T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "Burgundy",
          hex: "#3A1A19",
          shade: "Burgundy|Dark maroon|Dark red|Ruby red",
        },
        colorVariants: [
          {
            articleCode: "0685816306",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
          },
          {
            articleCode: "0685816001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
          },
          {
            articleCode: "0685816002",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
          },
          {
            articleCode: "0685816290",
            colorName: "Brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
          },
          {
            articleCode: "0685816266",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/0e5ddc8eb373d825cc004deffee8483684ccd40f.jpg",
          },
          {
            articleCode: "0685816270",
            colorName: "Navy blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/da744bf970c817a240d2364042cb3a4856710cfc.jpg",
          },
          {
            articleCode: "0685816326",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/ae9704f08f3c562ae29e84d51970c008c4fbde28.jpg",
          },
          {
            articleCode: "0685816314",
            colorName: "Light blue",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/88ca101ab17f2b6f70d976424596fcd5d660633b.jpg",
          },
          {
            articleCode: "0685816053",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/369157f78ea0a36638ea42481d0723e9ca7cea58.jpg",
          },
          {
            articleCode: "0685816307",
            colorName: "Pink",
            hex: "#CE8EB4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/26860233c7f171415f6892a26067704486949fe0.jpg",
          },
          {
            articleCode: "0685816315",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/6d750d12f0b497ca9fd241a390506938758a11c6.jpg",
          },
          {
            articleCode: "0685816308",
            colorName: "Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/9b4f8ef64a89a4e89084bec1915b3d7ba4608be8.jpg",
          },
          {
            articleCode: "0685816309",
            colorName: "Green",
            hex: "#5CAE7E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/b9eebe4ce9c0e0df98815ffecf1c10043dec525b.jpg",
          },
          {
            articleCode: "0685816293",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/ea9798f944176af96af5568e0e4e53c96fdf79be.jpg",
          },
          {
            articleCode: "0685816316",
            colorName: "Teal",
            hex: "#616E73",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/165ebfed4c68e0aeef8e45ca801ac57b106d0947.jpg",
          },
          {
            articleCode: "0685816303",
            colorName: "Dark teal",
            hex: "#38484C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/089c79054102a9f57a10b0b70f98f08c0c76050c.jpg",
          },
          {
            articleCode: "0685816322",
            colorName: "Lilac",
            hex: "#BFAED2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/40334cc3684fe96989a66782930938482ffc7944.jpg",
          },
          {
            articleCode: "0685816284",
            colorName: "Light purple",
            hex: "#9C99AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/64ab9798b9bf1a28d7405fb1a53812195a3a8be7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0685816306010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0685816306011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0685816306012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0685816306013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0685816306014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0685816306015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          weight: "205 g",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          modelHeightGarmentSize: "The model is 187cm/6'2\" and wears a size L",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/8fb48357c2380a8e707368fe007de67b1835b319.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/8fb48357c2380a8e707368fe007de67b1835b319.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/153ca5d140b409570f42126aa63300381696c774.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/e6ea77536e99e626264cc3b806a19ec15bd61f1a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/99a45f450a1c226ce07bd130e3848a11357d7ade.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/b13162f9f0c830f26f6810f21abfb820a2d8a45d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0685816306.html",
      },
      {
        id: "1354538002",
        productCode: "1354538_group_002",
        name: "Corduroy workwear overshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_jacketscoats_shirtjackets",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 3999,
          regular: 3999,
          onSale: false,
          formatted: "Rs.3,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Navy blue/Major League",
          hex: "#2B2C32",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1354538002",
            colorName: "Navy blue/Major League",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/a405ff9b04ed6b9841f426e0e19108d1f0b3e666.jpg",
          },
          {
            articleCode: "1354538001",
            colorName: "Light beige/Major League",
            hex: "#D3CFC5",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872328/hm/men/33bdac36ae75a1946d6a9b65368336688500b5c7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1354538002011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1354538002012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1354538002013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1354538002014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1354538002015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Overshirt in corduroy with embroidered motifs. Features a contrasting-colour collar in coated fabric, two-way zip down the front and patch front pockets with a flap. Long sleeves with a press-stud at the cuffs, and a straight-cut hem.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "No dry clean",
        ],
        measurements: [
          "Sleeve: Length: 64.5 cm (size L/L(EUR L))",
          "Shoulder: Width: 54.9 cm (size L/L(EUR L))",
          "Back: Length: 68.5 cm (size L/L(EUR L))",
          "S: Width: 1.16 m, Length: 66 cm",
          "M: Width: 1.24 m, Length: 67 cm",
          "L: Width: 1.32 m, Length: 69 cm",
          "XL: Width: 1.40 m, Length: 70 cm",
          "XXL: Width: 1.48 m, Length: 71 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          collarStyle: ["Classic collar"],
          clothingStyle: ["Overshirt", "Cargo", "Workwear jacket"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/a405ff9b04ed6b9841f426e0e19108d1f0b3e666.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/358ef9c0492ddfd0ebe3e71eebcfbe8e7c08b474.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/358ef9c0492ddfd0ebe3e71eebcfbe8e7c08b474.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/e52e084632880efd1c17b036aa771522169ebd9a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872328/hm/men/1b79f22d25619984886db6b944d4bf992021ab14.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872328/hm/men/afa6bc0b7031c45d66bf19a423ced110081a8208.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872328/hm/men/7b1fb2e3c735854c7fd38f8356c3355f513f2975.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872327/hm/men/a405ff9b04ed6b9841f426e0e19108d1f0b3e666.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872330/hm/men/1800526ac230872ca3d95791056b7cd1aa5e300f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872329/hm/men/fe332bb4e42efa0fbf962960bd161482070a7d66.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1354538002.html",
      },
      {
        id: "1308076032",
        productCode: "1308076_group_032",
        name: "Loose Fit Sweatshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light blue",
          hex: "#8C9AAD",
          shade: "Sky blue|Baby blue|Light blue",
        },
        colorVariants: [
          {
            articleCode: "1308076032",
            colorName: "Light blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          },
          {
            articleCode: "1308076013",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          },
          {
            articleCode: "1308076037",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          },
          {
            articleCode: "1308076031",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          },
          {
            articleCode: "1308076014",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          },
          {
            articleCode: "1308076033",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/b6286978c638e468e8eb9a1ab9c49767c4e2c552.jpg",
          },
          {
            articleCode: "1308076029",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/c893d1dd07ac406d4bbf4d5f53a670d46d38afb3.jpg",
          },
          {
            articleCode: "1308076003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/41297c5db93e65aec5215d5166a7bb15fa0b10c5.jpg",
          },
          {
            articleCode: "1308076030",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/7a41e35cee4bf5572331d5e3b527835ab076beb9.jpg",
          },
          {
            articleCode: "1308076007",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/908265eaea9476d9c7746a7aee8a5f8d5a682663.jpg",
          },
          {
            articleCode: "1308076038",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/b07e11b69eada9f82e8312e3803ec017149cc02c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308076032010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308076032011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308076032012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308076032013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308076032014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308076032015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "basics"],
        markers: [],
        description:
          "Top in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester 21%",
          "Recycled polyester from textiles 11%",
        ],
        careInstructions: ["Line dry", "Medium iron", "Dry clean only"],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck", "Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872329/hm/men/8c659aa5b1de2441cc89762cf4f70f3e22f18b08.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872329/hm/men/8c659aa5b1de2441cc89762cf4f70f3e22f18b08.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872329/hm/men/2aa172c10dcaeb1d7d9dbf4dc890dbb81c898823.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872330/hm/men/cd3cfd857a8a196e88bc6516b04b78041055b4d9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872330/hm/men/c23d896618318f58e87380a055a581fa6a3db8f3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/ab61c7d3faf3ce2670f4ced89114b74324f49114.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308076032.html",
      },
      {
        id: "1344928012",
        productCode: "1344928_group_012",
        name: "Relaxed Fit Printed T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_printed",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Red/East Isles Club",
          hex: "#702B33",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1344928012",
            colorName: "Red/East Isles Club",
            hex: "#702B33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/cb795f5aa98295d755197ccdc41080f81bcf7adc.jpg",
          },
          {
            articleCode: "1344928020",
            colorName: "Dark brown/Field Archives",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872332/hm/men/b79c2b41e748f57f25e428db527612ac6f57d76c.jpg",
          },
          {
            articleCode: "1344928005",
            colorName: "Light blue/1992",
            hex: "#B1BED7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/9937e9ee7643945bfc9db512bf8cc27fc66caf74.jpg",
          },
          {
            articleCode: "1344928007",
            colorName: "Light grey marl/Brooklyn",
            hex: "#C8C8C8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/c97c440443151c4f7688529258dd6cb84b011975.jpg",
          },
          {
            articleCode: "1344928003",
            colorName: "White/Track Unit TRK",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/6d5a8aa265040bcfe46d21b94f6aafe82763d940.jpg",
          },
          {
            articleCode: "1344928009",
            colorName: "Pale yellow/Sports Club",
            hex: "#EEEFD0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872332/hm/men/2f94c7c1ccf32d28b4b8d8bfaeff05f54d1c8031.jpg",
          },
          {
            articleCode: "1344928021",
            colorName: "White/Club Sports",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/da0b8eab76a94598b398bbc5520031e8e4ffa057.jpg",
          },
          {
            articleCode: "1344928001",
            colorName: "White/St. Ives Hôtel",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/b0d20860a6b9a683c10b3ee9ccbf13e988f8e159.jpg",
          },
          {
            articleCode: "1344928011",
            colorName: "Cream/Sports Soc.",
            hex: "#F0F1F0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872335/hm/men/3cceeaa326b61e2121acb03a3a92c441661cdde5.jpg",
          },
          {
            articleCode: "1344928002",
            colorName: "Dark blue/St Ives Hotel",
            hex: "#393C57",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872334/hm/men/8b9b4ea8e19c1c86622a07950ff8a4eef2c6d52f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1344928012010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1344928012011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1344928012012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1344928012013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1344928012014",
            name: "XL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "T-shirt in soft, printed jersey with a round, rib-trimmed neckline, dropped shoulders and a straight-cut hem. Relaxed fit for a casual but not oversized silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Do not iron on print",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "XS: Width: 1.00 m, Length: 67 cm",
          "S: Width: 1.08 m, Length: 68 cm",
          "M: Width: 1.16 m, Length: 69 cm",
          "L: Width: 1.24 m, Length: 71 cm",
          "XL: Width: 1.32 m, Length: 72 cm",
        ],
        attributes: {
          productTypeName: "T-shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Relaxed fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/cb795f5aa98295d755197ccdc41080f81bcf7adc.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/fc73d98f460b4cb16ae6ec4058b68d9752285fec.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/fc73d98f460b4cb16ae6ec4058b68d9752285fec.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872332/hm/men/63191df0eefe60f04b02a857d87d75349e910f91.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872332/hm/men/23794d5c9399866ed49c5d5cc547d5e1a18972c0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/cb795f5aa98295d755197ccdc41080f81bcf7adc.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872331/hm/men/651c6936cdc21c88ae8410626f15d5b641a402ab.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1344928012.html",
      },
      {
        id: "1308076014",
        productCode: "1308076_group_014",
        name: "Loose Fit Sweatshirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Grey marl",
          hex: "#AFAFAF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1308076014",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          },
          {
            articleCode: "1308076013",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872287/hm/men/b9eeaf5073f3c8b681ecbc95746e7ad9ec833763.jpg",
          },
          {
            articleCode: "1308076037",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872288/hm/men/455c07f376555db8e15ddc96f142e4be24c9b4d9.jpg",
          },
          {
            articleCode: "1308076031",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/221998a2e9752529c2f6b2b412a0ac66c72ef6c5.jpg",
          },
          {
            articleCode: "1308076032",
            colorName: "Light blue",
            hex: "#8C9AAD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/d8ce5f504a17fc0da5549192b5d807549511bb23.jpg",
          },
          {
            articleCode: "1308076033",
            colorName: "Dark khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/b6286978c638e468e8eb9a1ab9c49767c4e2c552.jpg",
          },
          {
            articleCode: "1308076029",
            colorName: "Cream",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/c893d1dd07ac406d4bbf4d5f53a670d46d38afb3.jpg",
          },
          {
            articleCode: "1308076003",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/41297c5db93e65aec5215d5166a7bb15fa0b10c5.jpg",
          },
          {
            articleCode: "1308076030",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872290/hm/men/7a41e35cee4bf5572331d5e3b527835ab076beb9.jpg",
          },
          {
            articleCode: "1308076007",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/908265eaea9476d9c7746a7aee8a5f8d5a682663.jpg",
          },
          {
            articleCode: "1308076038",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/b07e11b69eada9f82e8312e3803ec017149cc02c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308076014010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1308076014011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1308076014012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1308076014013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1308076014014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1308076014015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Top in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 75%, Polyester 22%, Viscose 3%"],
        materials: [
          {
            name: "Cotton",
            amount: "75%",
          },
          {
            name: "Polyester",
            amount: "22%",
          },
          {
            name: "Viscose",
            amount: "3%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester from textiles 11%",
          "Recycled polyester 6%",
        ],
        careInstructions: ["Line dry", "Medium iron", "Dry clean only"],
        measurements: [
          "XS: Width: 1.04 m, Length: 67 cm",
          "S: Width: 1.12 m, Length: 69 cm",
          "M: Width: 1.20 m, Length: 70 cm",
          "L: Width: 1.28 m, Length: 72 cm",
          "XL: Width: 1.36 m, Length: 73 cm",
          "XXL: Width: 1.43 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck", "Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/94cfd016bf79eae6210cfdc4ae815f6ed75e3402.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872333/hm/men/94cfd016bf79eae6210cfdc4ae815f6ed75e3402.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872334/hm/men/6da0c16c51e092616fee66aee6733571fc596496.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/97e8eaf64bcea156e802f7a25c4678280dec44a7.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872289/hm/men/1f2a844ca920ac8917e9325bb9d2a42ccde920b1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872335/hm/men/ec91df04ff026db2032a977cd7ad9ae63f2015b3.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308076014.html",
      },
      {
        id: "1302372003",
        productCode: "1302372_group_003",
        name: "Loose Fit Sweatpants",
        brand: "H&M",
        category: "men",
        subCategory: "men_trousers_casual",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light grey marl",
          hex: "#AFAFAF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1302372003",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/ecedfe5492def4518cbd18ba0946a0215b48a1fe.jpg",
          },
          {
            articleCode: "1302372001",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872291/hm/men/d2574d505cc6cd3bfbe677cf5348cda3d5ffb939.jpg",
          },
          {
            articleCode: "1302372018",
            colorName: "Navy blue",
            hex: "#2D323F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/51da3679d417aa5694336b3021a1b891c908cfc4.jpg",
          },
          {
            articleCode: "1302372017",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/95ec135c6ea2a6fc4a9cff007d02ccab047b61e9.jpg",
          },
          {
            articleCode: "1302372019",
            colorName: "Dark beige",
            hex: "#746A5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872293/hm/men/7261f784a491831b2dfc874754ab4f39a2bd7614.jpg",
          },
          {
            articleCode: "1302372015",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/cd6a6bd782e247c384dc22c55adbc28d1388f9be.jpg",
          },
          {
            articleCode: "1302372022",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872294/hm/men/ca490b444ea994a7db462af69bc29a6931d25bcd.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1302372003008",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1302372003009",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1302372003010",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1302372003011",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1302372003012",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1302372003013",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Sweatpants in heavyweight sweatshirt fabric made from a cotton blend, with a soft brushed inside. Designed with covered elastication and a drawstring at the waist, and side pockets. Loose fit for a generous but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 37%, Viscose 3%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "37%",
          },
          {
            name: "Viscose",
            amount: "3%",
          },
        ],
        sustainableMaterials: ["Recycled polyester 35%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "Outside leg: Length: 111 cm (size L/L(EUR L))",
          "XS: Width: 73 cm, Length: 70 cm",
          "S: Width: 80 cm, Length: 71 cm",
          "M: Width: 87 cm, Length: 72 cm",
          "L: Width: 94 cm, Length: 73 cm",
          "XL: Width: 1.01 m, Length: 74 cm",
          "XXL: Width: 1.07 m, Length: 74 cm",
        ],
        attributes: {
          productTypeName: "Trousers",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Loose fit"],
          clothingStyle: ["Sweatpants"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/ecedfe5492def4518cbd18ba0946a0215b48a1fe.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872334/hm/men/d0a8cc841f0a95e8477f659a403c343557ba0ff1.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872334/hm/men/d0a8cc841f0a95e8477f659a403c343557ba0ff1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872335/hm/men/409cb76b5a8297387c802d8f1c672ef59a9e91e1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872335/hm/men/ad1e8557a7cd7bc84489ac0a6733ce9dbb5433e1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/23fc8ee0495d4bb05be682df0f28805fa58a0719.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872292/hm/men/ecedfe5492def4518cbd18ba0946a0215b48a1fe.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/e50029ea77de7fa9f87773faa9168c111a2152be.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1302372003.html",
      },
      {
        id: "1316883004",
        productCode: "1316883_group_004",
        name: "Relaxed Jeans",
        brand: "H&M",
        category: "men",
        subCategory: "men_jeans_relaxed",
        productType: "Jeans",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#000000",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1316883004",
            colorName: "Black",
            hex: "#000000",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/f9196c11b94c59edbfe0612c342aef54fa0139b8.jpg",
          },
          {
            articleCode: "1316883006",
            colorName: "Denim blue",
            hex: "#3E64A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/2f40aee66d637efc96e1b5358597a8b919703b79.jpg",
          },
          {
            articleCode: "1316883001",
            colorName: "Light denim blue",
            hex: "#80AAD8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/db5ca18fca0db5d6a8b6a05a131601a2c0780507.jpg",
          },
          {
            articleCode: "1316883007",
            colorName: "Cream",
            hex: "#EAE5D6",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872337/hm/men/b5638e02178c9e8519991762c48a911a9731d3e7.jpg",
          },
          {
            articleCode: "1316883003",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/0c32891ee7a6a76c38ca6b24140938b98f88a6f6.jpg",
          },
          {
            articleCode: "1316883002",
            colorName: "Dark denim blue",
            hex: "#2E3036",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/c0cbaeb11365436f283eb6d6e99f6624abf64fa5.jpg",
          },
          {
            articleCode: "1316883005",
            colorName: "Denim grey",
            hex: "#706C6F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872339/hm/men/d9d22770c6399170f81f951c3985a5df1af61949.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1316883004013",
            name: "28/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004016",
            name: "29/30",
            inStock: false,
          },
          {
            sizeCode: "1316883004020",
            name: "30/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004021",
            name: "30/32",
            inStock: false,
          },
          {
            sizeCode: "1316883004024",
            name: "31/30",
            inStock: false,
          },
          {
            sizeCode: "1316883004028",
            name: "32/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004029",
            name: "32/32",
            inStock: false,
          },
          {
            sizeCode: "1316883004032",
            name: "33/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004036",
            name: "34/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004037",
            name: "34/32",
            inStock: true,
          },
          {
            sizeCode: "1316883004040",
            name: "36/30",
            inStock: true,
          },
          {
            sizeCode: "1316883004044",
            name: "38/30",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "5-pocket jeans in rigid cotton denim with a straight leg and a relaxed fit from the seat to the hem with extra room from the thigh down. Regular waist and a zip fly. An original-cut classic.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 19%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry low",
          "High iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "28/30: Width: 79 cm, Length: 74 cm",
          "29/30: Width: 81 cm, Length: 75 cm",
          "30/30: Width: 84 cm, Length: 75 cm",
          "30/32: Width: 84 cm, Length: 79 cm",
          "31/30: Width: 86 cm, Length: 76 cm",
          "32/30: Width: 89 cm, Length: 76 cm",
          "32/32: Width: 89 cm, Length: 80 cm",
          "33/30: Width: 91 cm, Length: 77 cm",
          "34/30: Width: 94 cm, Length: 77 cm",
          "34/32: Width: 94 cm, Length: 81 cm",
          "36/30: Width: 98 cm, Length: 78 cm",
          "38/30: Width: 1.03 m, Length: 78 cm",
        ],
        attributes: {
          productTypeName: "JEANS",
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Straight leg"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/f9196c11b94c59edbfe0612c342aef54fa0139b8.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/0d4fc3272697a2b8f364181c76e1b8e313d20368.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/0d4fc3272697a2b8f364181c76e1b8e313d20368.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/9afaae9a12af52d0022502f8d4a0fdc92c4860dd.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872337/hm/men/1f75c4247340540c455fd40dba0597c032ee58f5.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/d7399df9589c5a1c1aa589c9d6317c5cab6afd56.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872336/hm/men/f9196c11b94c59edbfe0612c342aef54fa0139b8.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872337/hm/men/c79f29aac4032a6e9b6cb0249975974d3530a4a2.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1316883004.html",
      },
      {
        id: "0685816001",
        productCode: "0685816_group_001",
        name: "Regular Fit T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "0685816001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
          },
          {
            articleCode: "0685816306",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
          },
          {
            articleCode: "0685816002",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
          },
          {
            articleCode: "0685816290",
            colorName: "Brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
          },
          {
            articleCode: "0685816266",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/0e5ddc8eb373d825cc004deffee8483684ccd40f.jpg",
          },
          {
            articleCode: "0685816270",
            colorName: "Navy blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/da744bf970c817a240d2364042cb3a4856710cfc.jpg",
          },
          {
            articleCode: "0685816326",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/ae9704f08f3c562ae29e84d51970c008c4fbde28.jpg",
          },
          {
            articleCode: "0685816314",
            colorName: "Light blue",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/88ca101ab17f2b6f70d976424596fcd5d660633b.jpg",
          },
          {
            articleCode: "0685816053",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/369157f78ea0a36638ea42481d0723e9ca7cea58.jpg",
          },
          {
            articleCode: "0685816307",
            colorName: "Pink",
            hex: "#CE8EB4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/26860233c7f171415f6892a26067704486949fe0.jpg",
          },
          {
            articleCode: "0685816315",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/6d750d12f0b497ca9fd241a390506938758a11c6.jpg",
          },
          {
            articleCode: "0685816308",
            colorName: "Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/9b4f8ef64a89a4e89084bec1915b3d7ba4608be8.jpg",
          },
          {
            articleCode: "0685816309",
            colorName: "Green",
            hex: "#5CAE7E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/b9eebe4ce9c0e0df98815ffecf1c10043dec525b.jpg",
          },
          {
            articleCode: "0685816293",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/ea9798f944176af96af5568e0e4e53c96fdf79be.jpg",
          },
          {
            articleCode: "0685816316",
            colorName: "Teal",
            hex: "#616E73",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/165ebfed4c68e0aeef8e45ca801ac57b106d0947.jpg",
          },
          {
            articleCode: "0685816303",
            colorName: "Dark teal",
            hex: "#38484C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/089c79054102a9f57a10b0b70f98f08c0c76050c.jpg",
          },
          {
            articleCode: "0685816322",
            colorName: "Lilac",
            hex: "#BFAED2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/40334cc3684fe96989a66782930938482ffc7944.jpg",
          },
          {
            articleCode: "0685816284",
            colorName: "Light purple",
            hex: "#9C99AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/64ab9798b9bf1a28d7405fb1a53812195a3a8be7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0685816001001",
            name: "XS/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001002",
            name: "S/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001003",
            name: "M/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001004",
            name: "L/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001005",
            name: "XL/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001006",
            name: "XXL/L",
            inStock: false,
          },
          {
            sizeCode: "0685816001010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0685816001011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0685816001012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0685816001013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0685816001014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0685816001015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 94 cm, Length: 68 cm",
          "S: Width: 1.02 m, Length: 70 cm",
          "M: Width: 1.10 m, Length: 71 cm",
          "L: Width: 1.18 m, Length: 73 cm",
          "XL: Width: 1.26 m, Length: 74 cm",
          "XXL: Width: 1.34 m, Length: 75 cm",
        ],
        attributes: {
          weight: "205 g",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          modelHeightGarmentSize:
            "The model is 185cm/6'1\" and wears a size M/L",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/fe4bc3765fc41e4b116394a8e6c0f83a6597d5ff.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872338/hm/men/fe4bc3765fc41e4b116394a8e6c0f83a6597d5ff.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872339/hm/men/14a1c834892a334f858a5ad260526b2737a84133.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872339/hm/men/97a3d1b31de464b85f4ef15a23173fb9f8b1166a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872339/hm/men/6be72b38b0cae0e5262dd5820a522b4e5c8d6f80.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872339/hm/men/ea8d96590fcdac8f92ed69c6ae119ede1325530b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0685816001.html",
      },
      {
        id: "0685816002",
        productCode: "0685816_group_002",
        name: "Regular Fit T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "0685816002",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
          },
          {
            articleCode: "0685816306",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
          },
          {
            articleCode: "0685816001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
          },
          {
            articleCode: "0685816290",
            colorName: "Brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
          },
          {
            articleCode: "0685816266",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/0e5ddc8eb373d825cc004deffee8483684ccd40f.jpg",
          },
          {
            articleCode: "0685816270",
            colorName: "Navy blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/da744bf970c817a240d2364042cb3a4856710cfc.jpg",
          },
          {
            articleCode: "0685816326",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/ae9704f08f3c562ae29e84d51970c008c4fbde28.jpg",
          },
          {
            articleCode: "0685816314",
            colorName: "Light blue",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/88ca101ab17f2b6f70d976424596fcd5d660633b.jpg",
          },
          {
            articleCode: "0685816053",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/369157f78ea0a36638ea42481d0723e9ca7cea58.jpg",
          },
          {
            articleCode: "0685816307",
            colorName: "Pink",
            hex: "#CE8EB4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/26860233c7f171415f6892a26067704486949fe0.jpg",
          },
          {
            articleCode: "0685816315",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/6d750d12f0b497ca9fd241a390506938758a11c6.jpg",
          },
          {
            articleCode: "0685816308",
            colorName: "Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/9b4f8ef64a89a4e89084bec1915b3d7ba4608be8.jpg",
          },
          {
            articleCode: "0685816309",
            colorName: "Green",
            hex: "#5CAE7E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/b9eebe4ce9c0e0df98815ffecf1c10043dec525b.jpg",
          },
          {
            articleCode: "0685816293",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/ea9798f944176af96af5568e0e4e53c96fdf79be.jpg",
          },
          {
            articleCode: "0685816316",
            colorName: "Teal",
            hex: "#616E73",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/165ebfed4c68e0aeef8e45ca801ac57b106d0947.jpg",
          },
          {
            articleCode: "0685816303",
            colorName: "Dark teal",
            hex: "#38484C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/089c79054102a9f57a10b0b70f98f08c0c76050c.jpg",
          },
          {
            articleCode: "0685816322",
            colorName: "Lilac",
            hex: "#BFAED2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/40334cc3684fe96989a66782930938482ffc7944.jpg",
          },
          {
            articleCode: "0685816284",
            colorName: "Light purple",
            hex: "#9C99AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/64ab9798b9bf1a28d7405fb1a53812195a3a8be7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0685816002001",
            name: "XS/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002002",
            name: "S/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002003",
            name: "M/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002004",
            name: "L/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002005",
            name: "XL/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002006",
            name: "XXL/L",
            inStock: false,
          },
          {
            sizeCode: "0685816002010",
            name: "XS",
            inStock: false,
          },
          {
            sizeCode: "0685816002011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0685816002012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0685816002013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0685816002014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0685816002015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 100 cm, Length: 68 cm",
          "S: Width: 1.08 m, Length: 70 cm",
          "M: Width: 1.16 m, Length: 71 cm",
          "L: Width: 1.24 m, Length: 73 cm",
          "XL: Width: 1.32 m, Length: 74 cm",
          "XXL: Width: 1.40 m, Length: 76 cm",
        ],
        attributes: {
          weight: "205 g",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          modelHeightGarmentSize:
            "The model is 185cm/6'1\" and wears a size M/L",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/fc772bd40549837a94becd97c4bf73b27d33fc94.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/fc772bd40549837a94becd97c4bf73b27d33fc94.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/75de40bf1a601ab6fb6a58d435c247ad7a9db37a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872341/hm/men/8fefe7f03e647d89b4f0e99e1e6b062a96b40fa5.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/29d216b818caaea9cc8ae7482af23fe47f475955.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/bddf2d435d2f48af8ca30a3f93360f59a092372d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0685816002.html",
      },
      {
        id: "1012056001",
        productCode: "1012056_group_001",
        name: "Relaxed Fit Sweatpants",
        brand: "H&M",
        category: "men",
        subCategory: "men_trousers_casual",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1012056001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/1188aed4ededda980c7b9a51541fe4948e7bcf6c.jpg",
          },
          {
            articleCode: "1012056002",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872342/hm/men/d8a85a6bcbdfb16750451b8ba44b05634d4dfd6f.jpg",
          },
          {
            articleCode: "1012056045",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872341/hm/men/38cbbecb0818d27a7bfaaf44a605ec8c2cf31d1e.jpg",
          },
          {
            articleCode: "1012056044",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872342/hm/men/5c863de6820bb78e6ec7d341fa09779db26fb14b.jpg",
          },
          {
            articleCode: "1012056050",
            colorName: "Khaki green",
            hex: "#4E514B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872343/hm/men/fb426b6c606ba5263b3900432c2d2b44304b36f0.jpg",
          },
          {
            articleCode: "1012056032",
            colorName: "Dark blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872342/hm/men/6982f6bf6800e448bf34a3075a1840dd668035fd.jpg",
          },
          {
            articleCode: "1012056046",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872343/hm/men/546bad00a9a77b23e52f1660d41e309d6e97f0b3.jpg",
          },
          {
            articleCode: "1012056035",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872343/hm/men/655adb624c05673ec8beb940ce9294f4a76ec6b4.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1012056001008",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "1012056001009",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1012056001010",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1012056001011",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1012056001012",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1012056001013",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "Sweatpants in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Covered elastication and a drawstring at the waist, pockets in the side seams and ribbed hems. Relaxed fit for a casual but not oversized silhouette.",
        compositions: ["Cotton 60%, Polyester 40%"],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 73 cm, Length: 70 cm",
          "S: Width: 80 cm, Length: 71 cm",
          "M: Width: 87 cm, Length: 72 cm",
          "L: Width: 94 cm, Length: 73 cm",
          "XL: Width: 1.01 m, Length: 73 cm",
          "XXL: Width: 1.08 m, Length: 74 cm",
        ],
        attributes: {
          weight: "475 g",
          productTypeName: "Trousers",
          concepts: ["BASICS"],
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Sweatpants"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/1188aed4ededda980c7b9a51541fe4948e7bcf6c.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/759dfbacd53485b10540e60bf9f8f5ab14f2da8b.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/759dfbacd53485b10540e60bf9f8f5ab14f2da8b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872341/hm/men/c6399252216aa44bb58d9b5e7b0e8be94650b305.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872341/hm/men/aac9887b2041f63fd78c53fac648e16b1ec62858.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872342/hm/men/46a4ff44a20da6939754166db7abca28da8454f6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872340/hm/men/1188aed4ededda980c7b9a51541fe4948e7bcf6c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872342/hm/men/193aa6d058f323ae55b7315a258324d825edcaa7.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1012056001.html",
      },
      {
        id: "0685816290",
        productCode: "0685816_group_290",
        name: "Regular Fit T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "Brown",
          hex: "#3F3838",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "0685816290",
            colorName: "Brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
          },
          {
            articleCode: "0685816306",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872321/hm/men/d99e8ad37ea94cb8c01abb821c8b16d739763ba7.jpg",
          },
          {
            articleCode: "0685816001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872322/hm/men/bde4ef42f917ccb678c4ff1d218520ce2f10ff6d.jpg",
          },
          {
            articleCode: "0685816002",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/4442fbac4e3080ec20b2f14e353fea267249b0dd.jpg",
          },
          {
            articleCode: "0685816266",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/0e5ddc8eb373d825cc004deffee8483684ccd40f.jpg",
          },
          {
            articleCode: "0685816270",
            colorName: "Navy blue",
            hex: "#2B2C32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/da744bf970c817a240d2364042cb3a4856710cfc.jpg",
          },
          {
            articleCode: "0685816326",
            colorName: "Green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/ae9704f08f3c562ae29e84d51970c008c4fbde28.jpg",
          },
          {
            articleCode: "0685816314",
            colorName: "Light blue",
            hex: "#AFBFDF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/88ca101ab17f2b6f70d976424596fcd5d660633b.jpg",
          },
          {
            articleCode: "0685816053",
            colorName: "Grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/369157f78ea0a36638ea42481d0723e9ca7cea58.jpg",
          },
          {
            articleCode: "0685816307",
            colorName: "Pink",
            hex: "#CE8EB4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/26860233c7f171415f6892a26067704486949fe0.jpg",
          },
          {
            articleCode: "0685816315",
            colorName: "Beige",
            hex: "#AE9E80",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872324/hm/men/6d750d12f0b497ca9fd241a390506938758a11c6.jpg",
          },
          {
            articleCode: "0685816308",
            colorName: "Orange",
            hex: "#C18D53",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872325/hm/men/9b4f8ef64a89a4e89084bec1915b3d7ba4608be8.jpg",
          },
          {
            articleCode: "0685816309",
            colorName: "Green",
            hex: "#5CAE7E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/b9eebe4ce9c0e0df98815ffecf1c10043dec525b.jpg",
          },
          {
            articleCode: "0685816293",
            colorName: "Khaki green",
            hex: "#6F7060",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/ea9798f944176af96af5568e0e4e53c96fdf79be.jpg",
          },
          {
            articleCode: "0685816316",
            colorName: "Teal",
            hex: "#616E73",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/165ebfed4c68e0aeef8e45ca801ac57b106d0947.jpg",
          },
          {
            articleCode: "0685816303",
            colorName: "Dark teal",
            hex: "#38484C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/089c79054102a9f57a10b0b70f98f08c0c76050c.jpg",
          },
          {
            articleCode: "0685816322",
            colorName: "Lilac",
            hex: "#BFAED2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/40334cc3684fe96989a66782930938482ffc7944.jpg",
          },
          {
            articleCode: "0685816284",
            colorName: "Light purple",
            hex: "#9C99AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872326/hm/men/64ab9798b9bf1a28d7405fb1a53812195a3a8be7.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0685816290010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0685816290011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0685816290012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0685816290013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0685816290014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0685816290015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["basics"],
        markers: [],
        description:
          "T-shirt in lightweight cotton jersey with a round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: [
          "XS: Width: 94 cm, Length: 68 cm",
          "S: Width: 1.02 m, Length: 70 cm",
          "M: Width: 1.10 m, Length: 71 cm",
          "L: Width: 1.18 m, Length: 73 cm",
          "XL: Width: 1.26 m, Length: 74 cm",
          "XXL: Width: 1.34 m, Length: 75 cm",
        ],
        attributes: {
          weight: "205 g",
          productTypeName: "T-shirt",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872343/hm/men/3354004ab7cda37c2c1afb19b006bab508e09aa1.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872343/hm/men/3354004ab7cda37c2c1afb19b006bab508e09aa1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872344/hm/men/f60ffea0db2719ff346fc758b52bee64864cb138.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872344/hm/men/765c05153616682909b4fffb0dfafde3dc06549f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/b1c3ee2099071f471d99b8b764ec79c03c566c01.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872323/hm/men/8bb193ed390ae2e341911de9b03f1d125ee4923a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/720b69fe958c20d2aa7e7e666888940990bfd2d5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0685816290.html",
      },
      {
        id: "1353418005",
        productCode: "1353418_group_005",
        name: "Regular Fit Cotton T-shirt",
        brand: "H&M",
        category: "men",
        subCategory: "men_tshirtstanks_shortsleeve",
        productType: "T-shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Ivory",
          hex: "#EEEDE4",
          shade: "Cream|Ivory|Grey white|White grey",
        },
        colorVariants: [
          {
            articleCode: "1353418005",
            colorName: "Ivory",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/6c3acea19797cd1a1229121b0156087c75560872.jpg",
          },
          {
            articleCode: "1353418006",
            colorName: "Dark khaki green",
            hex: "#3E362D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/62d4f0efe01ad7a9597e43de0b42945e974e61e1.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353418005011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "1353418005012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "1353418005013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "1353418005014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "1353418005015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "T-shirt in heavyweight cotton jersey with contrasting-colour trims. Round, rib-trimmed neckline and a straight-cut hem. Regular fit for comfortable wear and a classic silhouette.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "S: Width: 1.04 m, Length: 70 cm",
          "M: Width: 1.12 m, Length: 71 cm",
          "L: Width: 1.20 m, Length: 73 cm",
          "XL: Width: 1.28 m, Length: 74 cm",
          "XXL: Width: 1.36 m, Length: 75 cm",
        ],
        attributes: {
          productTypeName: "T-shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Ringer T-shirt"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/6c3acea19797cd1a1229121b0156087c75560872.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/6c3acea19797cd1a1229121b0156087c75560872.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872345/hm/men/6c3acea19797cd1a1229121b0156087c75560872.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872346/hm/men/30f2ca833aee34f91aa6a688dda94e7008f3c3e6.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353418005.html",
      },
      {
        id: "0970819140",
        productCode: "0970819_group_140",
        name: "Loose Fit Hoodie",
        brand: "H&M",
        category: "men",
        subCategory: "men_hoodiessweatshirts_hoodies",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#3F3838",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "0970819140",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
          },
          {
            articleCode: "0970819127",
            colorName: "Red",
            hex: "#8B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/0a4dc494667bb947adad5b4b7453793e21bf1c85.jpg",
          },
          {
            articleCode: "0970819138",
            colorName: "Burgundy",
            hex: "#3A1A19",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872280/hm/men/8323d9b01914b1aad027c68b512001be1bd63ebc.jpg",
          },
          {
            articleCode: "0970819001",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/154fc8cea8d1781a1700bcbd90ef1dbe506e4831.jpg",
          },
          {
            articleCode: "0970819137",
            colorName: "Light khaki green",
            hex: "#888D82",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/6585a60a2b07cd427c5930dd8e25f6bda9c106d3.jpg",
          },
          {
            articleCode: "0970819007",
            colorName: "Light grey marl",
            hex: "#AFAFAF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/b85be7b1fb12ea62271f18c4ce7271138d47b696.jpg",
          },
          {
            articleCode: "0970819136",
            colorName: "White",
            hex: "#F4F3E9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/de8b6ce453b053fa39e0e6474c9f17fb5cd76630.jpg",
          },
          {
            articleCode: "0970819133",
            colorName: "Dark grey",
            hex: "#444647",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/3131552cbe7d2de5542f19aabf765610dd1e56bb.jpg",
          },
          {
            articleCode: "0970819135",
            colorName: "Dark green",
            hex: "#3C514C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872282/hm/men/d304f2570b3f356f4b5d758c3d1d295d16197826.jpg",
          },
          {
            articleCode: "0970819121",
            colorName: "Dark forest green",
            hex: "#2D3938",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/1334bb05a7c4714ad7ac040b9dd2249c11360197.jpg",
          },
          {
            articleCode: "0970819139",
            colorName: "Light blue",
            hex: "#B0BDC8",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/4a5a1cfbe6662cc6a6f9c6f906ba49562a4e2ea4.jpg",
          },
          {
            articleCode: "0970819116",
            colorName: "Dark grey",
            hex: "#5B5E62",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/dd6b022f57e4776494de78650599b067cc124536.jpg",
          },
          {
            articleCode: "0970819126",
            colorName: "Dark brown",
            hex: "#3F3838",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872283/hm/men/8f5cd5043d33bc8b9a14bdc41ca22a9c06b0e62c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0970819140010",
            name: "XS",
            inStock: true,
          },
          {
            sizeCode: "0970819140011",
            name: "S",
            inStock: true,
          },
          {
            sizeCode: "0970819140012",
            name: "M",
            inStock: true,
          },
          {
            sizeCode: "0970819140013",
            name: "L",
            inStock: true,
          },
          {
            sizeCode: "0970819140014",
            name: "XL",
            inStock: true,
          },
          {
            sizeCode: "0970819140015",
            name: "XXL",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable", "basics"],
        markers: [],
        description:
          "Hoodie in midweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, a kangaroo pocket and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.",
        compositions: [
          "Shell: Cotton 60%, Polyester 40%",
          "Hood lining: Cotton 60%, Polyester 40%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
          {
            name: "Cotton",
            amount: "60%",
          },
          {
            name: "Polyester",
            amount: "40%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester 23%",
          "Recycled polyester from textiles 11%",
        ],
        careInstructions: [
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "Dry clean only",
        ],
        measurements: [
          "XS: Width: 1.04 m, Length: 65 cm",
          "S: Width: 1.12 m, Length: 67 cm",
          "M: Width: 1.20 m, Length: 68 cm",
          "L: Width: 1.28 m, Length: 70 cm",
          "XL: Width: 1.36 m, Length: 71 cm",
          "XXL: Width: 1.43 m, Length: 72 cm",
        ],
        attributes: {
          weight: "600 g",
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          modelHeightGarmentSize: "The model is 190cm/6'3\" and wears a size L",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          clothingStyle: ["Hoodie"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872346/hm/men/7a1cc1d9070c01fd6e50cbb1ae2979f41c30a85c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872346/hm/men/7a1cc1d9070c01fd6e50cbb1ae2979f41c30a85c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872348/hm/men/63ce97fbaf10800b3cbfdbc2dcf0c26a082a5080.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872347/hm/men/dfac9f06e01a771a248117150122b24e916c1478.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872347/hm/men/d10ce303254071afbd97d6f12ec7bdfd590c5430.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872281/hm/men/89d7c51e245e85b3e5c6fb8e09158421b10b2eef.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872355/hm/men/7167b261b8d00ba54d943e38c302b45da31357d4.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0970819140.html",
      },
    ],
  },
  {
    category: "kids",
    count: 30,
    products: [
      {
        id: "1359470001",
        productCode: "1359470_group_001",
        name: "Flower-appliqué dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_formal",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 3999,
          regular: 3999,
          onSale: false,
          formatted: "Rs.3,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#6E3744",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1359470001",
            colorName: "Dark red",
            hex: "#6E3744",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872348/hm/kids/e3f5eb36731a9bcba3cc0b88f2f2a590dc51d2ca.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1359470001009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001011",
            name: "3-4Y",
            inStock: false,
          },
          {
            sizeCode: "1359470001012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1359470001017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Dress in mesh with all-over flower appliqués and a yoke in organza. Round neckline, zip at the back, short sleeves with elasticated cuffs and a flared skirt. Partly lined.",
        compositions: [
          "Shell: Polyester 100%",
          "Ornamentation: Polyester 100%",
          "Bottom part lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled polyester from textiles 98%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 56 cm, Length: 50 cm",
          "2-3Y: Width: 58 cm, Length: 53 cm",
          "3-4Y: Width: 60 cm, Length: 57 cm",
          "4-5Y: Width: 62 cm, Length: 60 cm",
          "5-6Y: Width: 64 cm, Length: 64 cm",
          "6-7Y: Width: 66 cm, Length: 67 cm",
          "7-8Y: Width: 68 cm, Length: 71 cm",
          "8-9Y: Width: 72 cm, Length: 74 cm",
          "9-10Y: Width: 75 cm, Length: 78 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Flared"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872348/hm/kids/e3f5eb36731a9bcba3cc0b88f2f2a590dc51d2ca.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872349/hm/kids/f3d96f3f02f9b1400bd911f8c7d630317687ee0c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872349/hm/kids/f3d96f3f02f9b1400bd911f8c7d630317687ee0c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872349/hm/kids/0d5d459335c0c2d48c1abcac678d9419e4a69721.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872348/hm/kids/e3f5eb36731a9bcba3cc0b88f2f2a590dc51d2ca.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872350/hm/kids/c383452d5f2f55bda39b5fdc84613e2491f2536f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1359470001.html",
      },
      {
        id: "1362594001",
        productCode: "1362594_group_001",
        name: "Bubble-hem bow-detail dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_party",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#6D333E",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1362594001",
            colorName: "Dark red",
            hex: "#6D333E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872350/hm/kids/4861ebc9eb22b6327f5ffb500f6a4e9b0dda2b90.jpg",
          },
          {
            articleCode: "1362594002",
            colorName: "Dark blue",
            hex: "#393A45",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872351/hm/kids/d1295b6e82eeec368b8d33a00bbb0fd11fe97649.jpg",
          },
          {
            articleCode: "1362594003",
            colorName: "Red/Checked",
            hex: "#8D1330",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872352/hm/kids/2c534ba5718a1acd075aeb79bbc362c54823fee6.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1362594001006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1362594001007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1362594001008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1362594001009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1362594001010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Dress featuring a bodice in soft jersey and a skirt in woven fabric with a slight sheen.",
        compositions: [
          "Upper part: Polyester 74%, Viscose 22%, Elastane 4%",
          "Bottom part: Polyester 100%",
          "Bottom part lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "74%",
          },
          {
            name: "Viscose",
            amount: "22%",
          },
          {
            name: "Elastane",
            amount: "4%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 53 cm, Length: 57 cm",
          "2-4Y: Width: 57 cm, Length: 63 cm",
          "4-6Y: Width: 61 cm, Length: 69 cm",
          "6-8Y: Width: 66 cm, Length: 74 cm",
          "8-10Y: Width: 71 cm, Length: 80 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Flared", "Bubble hem"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872350/hm/kids/4861ebc9eb22b6327f5ffb500f6a4e9b0dda2b90.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872350/hm/kids/4861ebc9eb22b6327f5ffb500f6a4e9b0dda2b90.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872350/hm/kids/4861ebc9eb22b6327f5ffb500f6a4e9b0dda2b90.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872351/hm/kids/6475fc533dde211668478671b720caffe944fbd8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1362594001.html",
      },
      {
        id: "1366357007",
        productCode: "1366357_group_007",
        name: "Appliquéd sweatshirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jumperssweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red/Bows",
          hex: "#5F353C",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1366357007",
            colorName: "Dark red/Bows",
            hex: "#5F353C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872358/hm/kids/5537cc38ed6225ac69863d3788543258a8410716.jpg",
          },
          {
            articleCode: "1366357006",
            colorName: "Dusty pink/Hearts",
            hex: "#BBA3A2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872354/hm/kids/849aae64fa09ffd7422ab027e3f2c66512c9f3dc.jpg",
          },
          {
            articleCode: "1366357003",
            colorName: "Dark grey/Stars",
            hex: "#3A3A3D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872354/hm/kids/f3ee99f91f65cf2147019890720945bb27d66b2b.jpg",
          },
          {
            articleCode: "1366357001",
            colorName: "Cream/Happy",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872357/hm/kids/66f3d6dc3f07fccbff4af6ea1caeb1af050e0135.jpg",
          },
          {
            articleCode: "1366357008",
            colorName: "White/Paris",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872355/hm/kids/c02a653da14d5ea2c726ac1f06dd8182eca5852d.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1366357007008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1366357007009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1366357007010",
            name: "8-10Y",
            inStock: true,
          },
          {
            sizeCode: "1366357007025",
            name: "3-4Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Top in fleece cotton-blend sweatshirt fabric detailed with appliqués at the front. Round, rib-trimmed neckline, dropped shoulders, long sleeves and ribbing at the cuffs and hem.",
        compositions: ["Cotton 80%, Polyester 20%"],
        materials: [
          {
            name: "Cotton",
            amount: "80%",
          },
          {
            name: "Polyester",
            amount: "20%",
          },
        ],
        sustainableMaterials: ["Organic cotton 62%", "Recycled cotton 19%"],
        careInstructions: [],
        measurements: [
          "3-4Y: Width: 77 cm, Length: 37 cm",
          "4-6Y: Width: 86 cm, Length: 44 cm",
          "6-8Y: Width: 91 cm, Length: 48 cm",
          "8-10Y: Width: 97 cm, Length: 52 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872358/hm/kids/5537cc38ed6225ac69863d3788543258a8410716.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872352/hm/kids/663e59cc8d17b60fde350014cca44b9a79dfd7e6.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872352/hm/kids/663e59cc8d17b60fde350014cca44b9a79dfd7e6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872353/hm/kids/bbea0399e8e29b630cd1d0117a3e3a9c0adee262.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872353/hm/kids/269101f56ecb68cab4001caa06e53aebb5e76411.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872358/hm/kids/5537cc38ed6225ac69863d3788543258a8410716.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872362/hm/kids/dbc782a93cde4256e25a824043e33be5fbd39934.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1366357007.html",
      },
      {
        id: "1355286002",
        productCode: "1355286_group_002",
        name: "Cotton trousers",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_trousers_drawstringtrousers",
        productType: "Trousers",
        productGroup: "Bottoms",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige",
          hex: "#B7AB97",
          shade: "Taupe|Wheat|Ecru",
        },
        colorVariants: [
          {
            articleCode: "1355286002",
            colorName: "Light beige",
            hex: "#B7AB97",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872357/hm/kids/6cf95667cbc789c42da4afef300c513f8bddc6cc.jpg",
          },
          {
            articleCode: "1355286001",
            colorName: "Dark grey",
            hex: "#323B45",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872361/hm/kids/1d1839a483ed0e4b51a525eb52d43f52661f6af1.jpg",
          },
          {
            articleCode: "1355286003",
            colorName: "Brown",
            hex: "#53443C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872364/hm/kids/894f1ec7b9050d68b1c39b16ad4d7d9813edbbb5.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355286002008",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002009",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002010",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002011",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002012",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002013",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002014",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002015",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355286002016",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Loose-fit trousers in an airy cotton weave with an elasticated, drawstring waist and tapered legs with patch front pockets and a patch back pocket.",
        compositions: ["Linen 55%, Cotton 45%"],
        materials: [
          {
            name: "Linen",
            amount: "55%",
          },
          {
            name: "Cotton",
            amount: "45%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Trousers",
          garmentLength: ["Long"],
          waistRise: ["Regular waist"],
          fits: ["Loose fit"],
          clothingStyle: ["Tapered", "Pull-on trousers"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872357/hm/kids/6cf95667cbc789c42da4afef300c513f8bddc6cc.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872359/hm/kids/c43ef64fec12137e9a4adf3e37a51f9655b3ed67.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872359/hm/kids/c43ef64fec12137e9a4adf3e37a51f9655b3ed67.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872359/hm/kids/add331326719a91a47c9fc16c97164d678f04928.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872357/hm/kids/6cf95667cbc789c42da4afef300c513f8bddc6cc.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872363/hm/kids/e199a8e112b640abf30264b6e155e27e2037a52d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355286002.html",
      },
      {
        id: "1289801009",
        productCode: "1289801_group_009",
        name: "Cotton shirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_tshirtsshirts_shirts_longsleeve",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Red",
          hex: "#6F202B",
          shade: "Burgundy|Dark maroon|Dark red|Ruby red",
        },
        colorVariants: [
          {
            articleCode: "1289801009",
            colorName: "Red",
            hex: "#6F202B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872365/hm/kids/55906cd2960d6ea00088c969bf739ba7f5c27343.jpg",
          },
          {
            articleCode: "1289801001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872366/hm/kids/fde02aa898d1d7f95553b2ba2fc14cab940affa5.jpg",
          },
          {
            articleCode: "1289801013",
            colorName: "White/Dark red striped",
            hex: "#6E1D29",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872367/hm/kids/68e4966b7a57a7c8de72d0073c5e49b881e7b251.jpg",
          },
          {
            articleCode: "1289801005",
            colorName: "Light blue",
            hex: "#4C72AD",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872367/hm/kids/474f56148cfd2353f41864ddafd61de15cd0f3c4.jpg",
          },
          {
            articleCode: "1289801010",
            colorName: "Blue/White striped",
            hex: "#283F69",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872368/hm/kids/b6ceaea57a4a99083fe300d56fc3da789e59d750.jpg",
          },
          {
            articleCode: "1289801008",
            colorName: "White/Beige striped",
            hex: "#B7AB9A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872370/hm/kids/e71f999df863b60935df6c47ba1ef63dc7639345.jpg",
          },
          {
            articleCode: "1289801002",
            colorName: "Blue/White striped",
            hex: "#3B4EA3",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872369/hm/kids/d56c3c7c5a8839457ec4c836435a051918b66906.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1289801009009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1289801009017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Shirt in an airy cotton weave with a turn-down collar, buttons down the front and long sleeves with buttoned cuffs. Gently rounded hem that is slightly longer at the back.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: ["Line dry", "High iron", "No dry clean"],
        measurements: [
          "1½-2Y: Width: 66 cm, Length: 42 cm",
          "2-3Y: Width: 68 cm, Length: 44 cm",
          "3-4Y: Width: 70 cm, Length: 46 cm",
          "4-5Y: Width: 72 cm, Length: 48 cm",
          "5-6Y: Width: 74 cm, Length: 50 cm",
          "6-7Y: Width: 76 cm, Length: 52 cm",
          "7-8Y: Width: 78 cm, Length: 54 cm",
          "8-9Y: Width: 82 cm, Length: 57 cm",
          "9-10Y: Width: 85 cm, Length: 59 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Classic collar"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872365/hm/kids/55906cd2960d6ea00088c969bf739ba7f5c27343.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872365/hm/kids/55906cd2960d6ea00088c969bf739ba7f5c27343.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872365/hm/kids/55906cd2960d6ea00088c969bf739ba7f5c27343.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872365/hm/kids/6c3b9d47966cf197bab05c4fee4d48f5ddf86a23.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1289801009.html",
      },
      {
        id: "1355283005",
        productCode: "1355283_group_005",
        name: "Grandad shirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_tshirtsshirts_shirts_longsleeve",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B313D",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1355283005",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872369/hm/kids/1843dc4e7b16b6ab631eb76fa2bcef0fb00b20aa.jpg",
          },
          {
            articleCode: "1355283006",
            colorName: "Brown",
            hex: "#53443C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/8d9c57fce69cc5040199993f01dc2bcff4092ea3.jpg",
          },
          {
            articleCode: "1355283004",
            colorName: "Light dusty turquoise",
            hex: "#929B9A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/05fca6eeac5af7d7ce370ac11ebdf385a30bdb9c.jpg",
          },
          {
            articleCode: "1355283003",
            colorName: "Natural beige",
            hex: "#B7AB97",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872374/hm/kids/26bb397d7598d9f97a4fe0fb9b1b6dd8ef2d9607.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355283005009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355283005017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Shirt in a soft, airy weave with a band collar, buttons down the front and long roll-up sleeves with a tab and button, and buttoned cuffs.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 68 cm, Length: 43 cm",
          "2-3Y: Width: 70 cm, Length: 45 cm",
          "3-4Y: Width: 72 cm, Length: 47 cm",
          "4-5Y: Width: 75 cm, Length: 49 cm",
          "5-6Y: Width: 77 cm, Length: 50 cm",
          "6-7Y: Width: 79 cm, Length: 52 cm",
          "7-8Y: Width: 82 cm, Length: 54 cm",
          "8-9Y: Width: 85 cm, Length: 56 cm",
          "9-10Y: Width: 88 cm, Length: 58 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Grandad collar "],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872369/hm/kids/1843dc4e7b16b6ab631eb76fa2bcef0fb00b20aa.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872371/hm/kids/6d82a3176f16361c140a0a4a9c4d088315fdb65b.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872371/hm/kids/6d82a3176f16361c140a0a4a9c4d088315fdb65b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872371/hm/kids/bb0b31288fe15a18fc7b4cfb6ab78b8ceacea557.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872369/hm/kids/1843dc4e7b16b6ab631eb76fa2bcef0fb00b20aa.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872372/hm/kids/4a1c4a77ed0586232a856570aa82941c298fd108.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355283005.html",
      },
      {
        id: "1356899001",
        productCode: "1356899_group_001",
        name: "2-piece shirt and trousers set",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_baby_boy_clothing_trousersjeans_trousers",
        productType: "Top & trousers set",
        productGroup: "Sets",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Beige/Brown",
          hex: "#885241",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1356899001",
            colorName: "Beige/Brown",
            hex: "#885241",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/6575a71a45b5870888f04c78ff25fbc94f18624b.jpg",
          },
          {
            articleCode: "1356899002",
            colorName: "Dark turquoise",
            hex: "#929B9A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/ff9f995bb069adfa38738750a11c38a5c4c55e0d.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1356899001005",
            name: "4-6M",
            inStock: true,
          },
          {
            sizeCode: "1356899001006",
            name: "6-9M",
            inStock: true,
          },
          {
            sizeCode: "1356899001007",
            name: "9-12M",
            inStock: true,
          },
          {
            sizeCode: "1356899001008",
            name: "12-18M",
            inStock: true,
          },
          {
            sizeCode: "1356899001009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1356899001010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1356899001011",
            name: "3-4Y",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Set with a shirt and pair of trousers in a soft, airy cotton weave. Shirt with a band collar, buttons down the front and long, buttoned roll-up sleeves with a tab and button. Trousers with an elasticated, drawstring waist, a fake fly, front pockets and wide legs.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Organic cotton 100%"],
        careInstructions: [],
        measurements: [
          "4-6M: Width: Shirt: 60 cm\nTrousers: 42 cm , Length: Shirt: 31 cm\nTrousers: 18 cm ",
          "6-9M: Width: Shirt: 62 cm\nTrousers: 43 cm , Length: Shirt: 33 cm\nTrousers: 21 cm ",
          "9-12M: Width: Shirt: 64 cm\nTrousers: 44 cm , Length: Shirt: 35 cm\nTrousers: 24 cm ",
          "12-18M: Width: Shirt: 66 cm\nTrousers: 45 cm , Length: Shirt: 37 cm\nTrousers: 27 cm ",
          "1½-2Y: Width: Shirt: 68 cm\nTrousers: 46 cm , Length: Shirt: 39 cm\nTrousers: 31 cm ",
          "2-3Y: Width: Shirt: 70 cm\nTrousers: 47 cm , Length: Shirt: 40 cm\nTrousers: 34 cm ",
          "3-4Y: Width: Shirt: 72 cm\nTrousers: 48 cm , Length: Shirt: 42 cm\nTrousers: 38 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "GARMENT SET - TOP + LONG LEGGED BOTTOM",
          garmentLength: ["Regular length", "Long"],
          sleeveLength: ["Long sleeve"],
          collarStyle: ["Band collar"],
          clothingStyle: ["Henley shirt", "Wide leg"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/6575a71a45b5870888f04c78ff25fbc94f18624b.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/6575a71a45b5870888f04c78ff25fbc94f18624b.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/6575a71a45b5870888f04c78ff25fbc94f18624b.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/1abc5af1d201bbeee6136f855ea7c91044c6cfb1.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1356899001.html",
      },
      {
        id: "1356899002",
        productCode: "1356899_group_002",
        name: "2-piece shirt and trousers set",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_baby_boy_clothing_trousersjeans_trousers",
        productType: "Top & trousers set",
        productGroup: "Sets",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark turquoise",
          hex: "#929B9A",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1356899002",
            colorName: "Dark turquoise",
            hex: "#929B9A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/ff9f995bb069adfa38738750a11c38a5c4c55e0d.jpg",
          },
          {
            articleCode: "1356899001",
            colorName: "Beige/Brown",
            hex: "#885241",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872375/hm/kids/6575a71a45b5870888f04c78ff25fbc94f18624b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1356899002005",
            name: "4-6M",
            inStock: true,
          },
          {
            sizeCode: "1356899002006",
            name: "6-9M",
            inStock: true,
          },
          {
            sizeCode: "1356899002007",
            name: "9-12M",
            inStock: true,
          },
          {
            sizeCode: "1356899002008",
            name: "12-18M",
            inStock: true,
          },
          {
            sizeCode: "1356899002009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1356899002010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1356899002011",
            name: "3-4Y",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Set with a shirt and pair of trousers in a soft, airy cotton weave. Shirt with a band collar, buttons down the front and long, buttoned roll-up sleeves with a tab and button. Trousers with an elasticated, drawstring waist, a fake fly, front pockets and wide legs.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Organic cotton 100%"],
        careInstructions: [],
        measurements: [
          "4-6M: Width: Top: 60 cm\nBottom: 42 cm , Length: Top: 31 cm\nBottom: 18 cm ",
          "6-9M: Width: Top: 62 cm\nBottom: 43 cm , Length: Top: 33 cm\nBottom: 21 cm ",
          "9-12M: Width: Top: 64 cm\nBottom: 44 cm , Length: Top: 35 cm\nBottom: 24 cm ",
          "12-18M: Width: Top: 66 cm\nBottom: 45 cm , Length: Top: 37 cm\nBottom: 27 cm ",
          "1½-2Y: Width: Top: 68 cm\nBottom: 46 cm , Length: Top: 39 cm\nBottom: 31 cm ",
          "2-3Y: Width: Top: 70 cm\nBottom: 47 cm , Length: Top: 40 cm\nBottom: 34 cm ",
          "3-4Y: Width: Top: 72 cm\nBottom: 48 cm , Length: Top: 42 cm\nBottom: 38 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "GARMENT SET - TOP + LONG LEGGED BOTTOM",
          garmentLength: ["Regular length", "Long"],
          sleeveLength: ["Long sleeve"],
          collarStyle: ["Band collar"],
          clothingStyle: ["Henley shirt", "Wide leg"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/ff9f995bb069adfa38738750a11c38a5c4c55e0d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/ff9f995bb069adfa38738750a11c38a5c4c55e0d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/ff9f995bb069adfa38738750a11c38a5c4c55e0d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872377/hm/kids/a5ee14128cba7f9ac6fdca0e02a5f2043a3ce3b5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1356899002.html",
      },
      {
        id: "1353669005",
        productCode: "1353669_group_005",
        name: "Peter Pan-collared corduroy dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_collared",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5F353C",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1353669005",
            colorName: "Dark red",
            hex: "#5F353C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/b0cb7bd855e6164f5bfda506988002a5b7367781.jpg",
          },
          {
            articleCode: "1353669001",
            colorName: "Pale turquoise/Floral",
            hex: "#8E9A9B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872377/hm/kids/f22e259609b626ae702004bca052befec3d77c80.jpg",
          },
          {
            articleCode: "1353669002",
            colorName: "Old rose",
            hex: "#B09A95",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872378/hm/kids/0649fa0a093dc54cf74240e50d687808b60429ea.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353669005009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005010",
            name: "2-3Y",
            inStock: false,
          },
          {
            sizeCode: "1353669005011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1353669005017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Dress in soft cotton corduroy featuring a rounded Peter Pan collar in woven fabric with a scalloped broderie anglaise trim. Buttons down the front, long sleeves with elasticated cuffs and a gathered seam at the waist.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 59 cm, Length: 50 cm",
          "2-3Y: Width: 61 cm, Length: 53 cm",
          "3-4Y: Width: 63 cm, Length: 56 cm",
          "4-5Y: Width: 65 cm, Length: 59 cm",
          "5-6Y: Width: 67 cm, Length: 62 cm",
          "6-7Y: Width: 69 cm, Length: 65 cm",
          "7-8Y: Width: 71 cm, Length: 69 cm",
          "8-9Y: Width: 75 cm, Length: 72 cm",
          "9-10Y: Width: 78 cm, Length: 76 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Peter Pan collar"],
          clothingStyle: ["A-line"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/b0cb7bd855e6164f5bfda506988002a5b7367781.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/6f0a9b5f4560a2b58c581664922dbd0da06b0259.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/6f0a9b5f4560a2b58c581664922dbd0da06b0259.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872378/hm/kids/deb8694d8ead192ef4839bbdb93c3df276c9b0fe.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872376/hm/kids/b0cb7bd855e6164f5bfda506988002a5b7367781.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872377/hm/kids/d01c0304bc5475ec7ed345b0fc8c9cf10584e3b2.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353669005.html",
      },
      {
        id: "1355326002",
        productCode: "1355326_group_002",
        name: "2-piece cotton seersucker set",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_trousers_straight",
        productType: "Top & trousers set",
        productGroup: "Sets",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B313D",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1355326002",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/9fe40e0bc650cb225caa38cc102939070cde8ff4.jpg",
          },
          {
            articleCode: "1355326003",
            colorName: "Old rose/Floral",
            hex: "#A98686",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/8f43123450d9d3c686dad32c2deb48de41acef56.jpg",
          },
          {
            articleCode: "1355326001",
            colorName: "Dark yellow",
            hex: "#CBAA5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/4b1a1e3a71db14c28ae8957eb7c910455d2c652b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355326002009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355326002017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Set with a top and pair of trousers in soft cotton seersucker. Sleeveless top with a round neckline, a keyhole opening with a button at the back, and small bow details on the sides. Trousers with an elasticated waist, side pockets, and straight legs.",
        compositions: ["Cotton 100%", "Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: Top: 59 cm Bottom: 47 cm , Length: Top: 31 cm Bottom: 50 cm ",
          "2-3Y: Width: Top: 61 cm Bottom: 48 cm , Length: Top: 33 cm Bottom: 55 cm ",
          "3-4Y: Width: Top: 63 cm Bottom: 50 cm , Length: Top: 34 cm Bottom: 60 cm ",
          "4-5Y: Width: Top: 65 cm Bottom: 51 cm , Length: Top: 36 cm Bottom: 64 cm ",
          "5-6Y: Width: Top: 67 cm Bottom: 52 cm , Length: Top: 38 cm Bottom: 68 cm ",
          "6-7Y: Width: Top: 69 cm Bottom: 53 cm , Length: Top: 40 cm Bottom: 72 cm ",
          "7-8Y: Width: Top: 72 cm Bottom: 54 cm , Length: Top: 41 cm Bottom: 77 cm ",
          "8-9Y: Width: Top: 75 cm Bottom: 56 cm , Length: Top: 44 cm Bottom: 81 cm ",
          "9-10Y: Width: Top: 78 cm Bottom: 57 cm , Length: Top: 46 cm Bottom: 86 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "GARMENT SET - TOP + LONG LEGGED BOTTOM",
          garmentLength: ["Regular length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Pull-on trousers", "Straight leg"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/9fe40e0bc650cb225caa38cc102939070cde8ff4.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/6ef30691a83baca79a04bf7f01d823d380c0888b.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/6ef30691a83baca79a04bf7f01d823d380c0888b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/43b566b58f429caaaf0c955bf7a7c7f0f6e90076.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/9fe40e0bc650cb225caa38cc102939070cde8ff4.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872380/hm/kids/a4231647511d4a7aeccf7c74231c4b1132387437.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355326002.html",
      },
      {
        id: "1362445001",
        productCode: "1362445_group_001",
        name: "Appliquéd ballet pumps",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_shoes_ballerinasflats",
        productType: "Ballet pumps",
        productGroup: "Shoes",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dusty pink",
          hex: "#C1A59D",
          shade: "Peach|Salmon",
        },
        colorVariants: [
          {
            articleCode: "1362445001",
            colorName: "Dusty pink",
            hex: "#C1A59D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872380/hm/kids/b27721b7ba6e565def403a1d5b6d0bb48820880e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1362445001003",
            name: "7",
            inStock: true,
          },
          {
            sizeCode: "1362445001004",
            name: "8",
            inStock: true,
          },
          {
            sizeCode: "1362445001005",
            name: "9",
            inStock: true,
          },
          {
            sizeCode: "1362445001006",
            name: "9.5",
            inStock: true,
          },
          {
            sizeCode: "1362445001007",
            name: "10.5",
            inStock: true,
          },
          {
            sizeCode: "1362445001008",
            name: "11",
            inStock: true,
          },
          {
            sizeCode: "1362445001009",
            name: "12",
            inStock: true,
          },
          {
            sizeCode: "1362445001010",
            name: "13",
            inStock: true,
          },
          {
            sizeCode: "1362445001011",
            name: "13.5",
            inStock: true,
          },
          {
            sizeCode: "1362445001012",
            name: "1",
            inStock: true,
          },
          {
            sizeCode: "1362445001013",
            name: "2",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Glittery ballet pumps featuring an elasticated strap with floral appliqués across the foot. Grosgrain trim around the top and a loop at the back. Jersey linings and patterned soles.",
        compositions: [
          "Lining: Polyester 100%",
          "Upper: Polyester 100%",
          "Sock: Polyurethane 100%",
          "Sole: Thermoplastic rubber 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
          {
            name: "Thermoplastic rubber",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled thermoplastic rubber 41%"],
        careInstructions: [],
        measurements: null,
        attributes: {
          productTypeName: "Ballerinas",
          heelHeight: ["Low heel"],
          footwearStyle: ["Ballet pumps"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872380/hm/kids/b27721b7ba6e565def403a1d5b6d0bb48820880e.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872380/hm/kids/b27721b7ba6e565def403a1d5b6d0bb48820880e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872380/hm/kids/b27721b7ba6e565def403a1d5b6d0bb48820880e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/1c3fa9819d788a768623a3ecb075ac20015c5a67.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/5e5026ae910ac60bc2ca154574fd0ba3a8981951.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1362445001.html",
      },
      {
        id: "1353135004",
        productCode: "1353135_group_004",
        name: "Cotton polo jumper",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_jumperssweatshirts_jumpers",
        productType: "Jumper",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#8D1330",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1353135004",
            colorName: "Dark red",
            hex: "#8D1330",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/64c95ee5dbee6aea02eb77edbbcbf33d50a9d637.jpg",
          },
          {
            articleCode: "1353135003",
            colorName: "Dark green/Striped",
            hex: "#344340",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/a111402274b0daf7ed9aea26a99201772ab9428b.jpg",
          },
          {
            articleCode: "1353135006",
            colorName: "Cream/Striped",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/ed6faf698c35450ffde559440319e5def8c45b0f.jpg",
          },
          {
            articleCode: "1353135002",
            colorName: "Light beige",
            hex: "#DCD6C7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872382/hm/kids/4e39147b53719e9fa8a300a3e176e63dce447c3a.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353135004006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1353135004007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1353135004008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1353135004009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1353135004010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Long-sleeved polo jumper in fine-knit cotton featuring a collar and a button placket. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 64 cm, Length: 38 cm",
          "2-4Y: Width: 68 cm, Length: 42 cm",
          "4-6Y: Width: 72 cm, Length: 45 cm",
          "6-8Y: Width: 78 cm, Length: 49 cm",
          "8-10Y: Width: 84 cm, Length: 55 cm",
        ],
        attributes: {
          productTypeName: "JUMPER",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Classic collar"],
          clothingStyle: ["Polo shirt"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/64c95ee5dbee6aea02eb77edbbcbf33d50a9d637.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/64c95ee5dbee6aea02eb77edbbcbf33d50a9d637.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/64c95ee5dbee6aea02eb77edbbcbf33d50a9d637.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/94a9341fa47eb697708f02e4c5f4afc6f9753e05.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353135004.html",
      },
      {
        id: "1353176002",
        productCode: "1353176_group_002",
        name: "Motif-detail jumper",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_jumperssweatshirts_jumpers",
        productType: "Jumper",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Red/Reindeer",
          hex: "#D90000",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1353176002",
            colorName: "Red/Reindeer",
            hex: "#D90000",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/00659374dffa531c4dd4329a2e6b728f4c43ab24.jpg",
          },
          {
            articleCode: "1353176001",
            colorName: "Dark green/Snowman",
            hex: "#2D3938",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872386/hm/kids/95f57841cc4117a47d101a23fbcf90774b88e20d.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353176002006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1353176002007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1353176002008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1353176002009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1353176002010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Jumper in a soft knit with a motif on the front. Round, rib-trimmed neckline, dropped shoulders and ribbing at the cuffs and hem.",
        compositions: ["Polyester 52%, Acrylic 40%, Wool 5%, Elastane 3%"],
        materials: [
          {
            name: "Polyester",
            amount: "52%",
          },
          {
            name: "Acrylic",
            amount: "40%",
          },
          {
            name: "Wool",
            amount: "5%",
          },
          {
            name: "Elastane",
            amount: "3%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 64 cm, Length: 38 cm",
          "2-4Y: Width: 68 cm, Length: 42 cm",
          "4-6Y: Width: 72 cm, Length: 45 cm",
          "6-8Y: Width: 78 cm, Length: 49 cm",
          "8-10Y: Width: 84 cm, Length: 53 cm",
        ],
        attributes: {
          productTypeName: "JUMPER",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/00659374dffa531c4dd4329a2e6b728f4c43ab24.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872384/hm/kids/220c6e4b2abaa6c44f2227d7f4903364ec5617ad.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872384/hm/kids/220c6e4b2abaa6c44f2227d7f4903364ec5617ad.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872386/hm/kids/041d12ea4766f9f653b70f467a2634904dbe2d6c.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872383/hm/kids/00659374dffa531c4dd4329a2e6b728f4c43ab24.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872384/hm/kids/d5601c9d726f6228f78177db0c1d823715fca351.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353176002.html",
      },
      {
        id: "1343770006",
        productCode: "1343770_group_006",
        name: "Zip-through brushed-inside  hoodie",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_jumperssweatshirts_hoodies_zipup",
        productType: "Hoodie",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#4B262D",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1343770006",
            colorName: "Dark red",
            hex: "#4B262D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872385/hm/kids/5dc1e2cb339eaa8b69e6a874d6631acfeb297bc8.jpg",
          },
          {
            articleCode: "1343770011",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872386/hm/kids/ddd5761b29108fe3163b791d16352a69bcc115bd.jpg",
          },
          {
            articleCode: "1343770002",
            colorName: "Navy blue",
            hex: "#2C303E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872386/hm/kids/c49fbf063ced1aba831bc8b3d02a57fead1273d8.jpg",
          },
          {
            articleCode: "1343770004",
            colorName: "Beige",
            hex: "#AA9E94",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872387/hm/kids/dc14a9c3ab2012ab260e92ae9de1ac4d118857f0.jpg",
          },
          {
            articleCode: "1343770010",
            colorName: "Dusty blue",
            hex: "#545B6F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872388/hm/kids/96c0b57da1baa2818c7a6a1e77614a595ae283d9.jpg",
          },
          {
            articleCode: "1343770003",
            colorName: "Light blue",
            hex: "#7B91A5",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872390/hm/kids/d5d3671d1355d6f4528c4cec4bf1f063d14c63c9.jpg",
          },
          {
            articleCode: "1343770005",
            colorName: "Khaki green",
            hex: "#5C6054",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872388/hm/kids/4dbffdd38d62188a343a683bf012d5da34603186.jpg",
          },
          {
            articleCode: "1343770001",
            colorName: "Light grey marl",
            hex: "#AAAAAA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872388/hm/kids/defc54d6412f765d242a72f719e8cab56f6e646a.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1343770006006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1343770006007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1343770006008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1343770006009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1343770006010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Zip-through hoodie in lightweight sweatshirt fabric with a soft brushed inside. Jersey-lined hood and a zip down the front with an anti-chafe chin guard. Dropped shoulders, long sleeves and front pockets. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 80%, Polyester 20%"],
        materials: [
          {
            name: "Cotton",
            amount: "80%",
          },
          {
            name: "Polyester",
            amount: "20%",
          },
        ],
        sustainableMaterials: ["Organic cotton 56%", "Recycled cotton 18%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 75 cm, Length: 41 cm",
          "2-4Y: Width: 79 cm, Length: 45 cm",
          "4-6Y: Width: 82 cm, Length: 48 cm",
          "6-8Y: Width: 86 cm, Length: 52 cm",
          "8-10Y: Width: 92 cm, Length: 57 cm",
        ],
        attributes: {
          productTypeName: "Hoodie",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Oversized"],
          clothingStyle: ["Hooded jacket"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872385/hm/kids/5dc1e2cb339eaa8b69e6a874d6631acfeb297bc8.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872385/hm/kids/5dc1e2cb339eaa8b69e6a874d6631acfeb297bc8.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872385/hm/kids/5dc1e2cb339eaa8b69e6a874d6631acfeb297bc8.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872386/hm/kids/a5685361aedc0b6d3eb07930af1ea675f4a68b3f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1343770006.html",
      },
      {
        id: "1170400033",
        productCode: "1170400_group_033",
        name: "Water-repellent puffer jacket",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_jacketscoats_jackets",
        productType: "Jacket",
        productGroup: "Outerwear",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1170400033",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/b2fafa284bfa2653e0c2a998a038b40bec28688a.jpg",
          },
          {
            articleCode: "1170400032",
            colorName: "Navy blue",
            hex: "#393A45",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872390/hm/kids/f4dac63258a39b6ff174171b34949f5fb9bc35e0.jpg",
          },
          {
            articleCode: "1170400031",
            colorName: "Dark dusty green",
            hex: "#5B615B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872390/hm/kids/b5dc13e78ea2ae236a81c77e86f91284dadaf62b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1170400033006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1170400033007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1170400033008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1170400033009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1170400033010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Puffer jacket in a water-repellent, quilted weave designed to keep your child dry during light showers and to protect from the wind. Detachable hood, stand-up collar and zip down the front with an anti-chafe chin guard. Pockets in the side seams and elasticated trims around the hood, cuffs and hem. Lined. The jacket can be worn as it is or as an insulating layer.",
        compositions: [
          "Shell: Polyester 100%",
          "Padding: Polyester 100%",
          "Lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester from textiles 56%",
          "Recycled polyester from textiles 43%",
        ],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 69 cm, Length: 38 cm",
          "2-4Y: Width: 73 cm, Length: 42 cm",
          "4-6Y: Width: 77 cm, Length: 46 cm",
          "6-8Y: Width: 81 cm, Length: 50 cm",
          "8-10Y: Width: 88 cm, Length: 55 cm",
        ],
        attributes: {
          weight: "25 g",
          productTypeName: "Jacket",
          garmentLength: ["Cropped"],
          sleeveLength: ["Long sleeve"],
          fits: ["Slim fit"],
          collarStyle: ["Stand collar"],
          functionality: ["Water-repellent", "Reflective details"],
          niceToKnow: ["Lightweight", "Padded"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/b2fafa284bfa2653e0c2a998a038b40bec28688a.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/b2fafa284bfa2653e0c2a998a038b40bec28688a.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/b2fafa284bfa2653e0c2a998a038b40bec28688a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872390/hm/kids/debdb5cbd986f1c1f7c746b7d9825de8ff73916d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872389/hm/kids/16c66ef894052381717eb172d0b0c0d8a920734a.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1170400033.html",
      },
      {
        id: "1355326003",
        productCode: "1355326_group_003",
        name: "2-piece cotton seersucker set",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_trousers_straight",
        productType: "Top & trousers set",
        productGroup: "Sets",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Old rose/Floral",
          hex: "#A98686",
          shade: "Bright pink|Hot pink|Neon pink|Rose",
        },
        colorVariants: [
          {
            articleCode: "1355326003",
            colorName: "Old rose/Floral",
            hex: "#A98686",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/8f43123450d9d3c686dad32c2deb48de41acef56.jpg",
          },
          {
            articleCode: "1355326002",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/9fe40e0bc650cb225caa38cc102939070cde8ff4.jpg",
          },
          {
            articleCode: "1355326001",
            colorName: "Dark yellow",
            hex: "#CBAA5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872381/hm/kids/4b1a1e3a71db14c28ae8957eb7c910455d2c652b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355326003009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355326003017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Set with a top and pair of trousers in soft cotton seersucker. Sleeveless top with a round neckline, a keyhole opening with a button at the back, and small bow details on the sides. Trousers with an elasticated waist, side pockets, and straight legs.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: Top: 59 cm\nBottom: 47 cm, Length: Top: 31 cm\nBottom: 50 cm",
          "2-3Y: Width: Top: 61 cm\nBottom: 48 cm, Length: Top: 33 cm\nBottom: 55 cm",
          "3-4Y: Width: Top: 63 cm\nBottom: 50 cm, Length: Top: 34 cm\nBottom: 60 cm",
          "4-5Y: Width: Top: 65 cm\nBottom: 51 cm, Length: Top: 36 cm\nBottom: 64 cm",
          "5-6Y: Width: Top: 67 cm\nBottom: 52 cm, Length: Top: 38 cm\nBottom: 68 cm",
          "6-7Y: Width: Top: 69 cm\nBottom: 53 cm, Length: Top: 40 cm\nBottom: 72 cm",
          "7-8Y: Width: Top: 72 cm\nBottom: 54 cm, Length: Top: 41 cm\nBottom: 77 cm",
          "8-9Y: Width: Top: 75 cm\nBottom: 56 cm, Length: Top: 44 cm\nBottom: 81 cm",
          "9-10Y: Width: Top: 78 cm\nBottom: 57 cm, Length: Top: 46 cm\nBottom: 86 cm",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "GARMENT SET - TOP + LONG LEGGED BOTTOM",
          garmentLength: ["Regular length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Pull-on trousers", "Straight leg"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/8f43123450d9d3c686dad32c2deb48de41acef56.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872391/hm/kids/e418b88a71464aa37218bc5e0394a3a70d59f2d6.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872391/hm/kids/e418b88a71464aa37218bc5e0394a3a70d59f2d6.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872391/hm/kids/4d00e42dd5745c2ad6f53235a0f12383fd0bb762.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872379/hm/kids/8f43123450d9d3c686dad32c2deb48de41acef56.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872393/hm/kids/2d1204e25e2bd1e832c6ff74dc9ec048305367d9.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872392/hm/kids/eb084361e2d7fd211859f99ddc695088f02ea0e7.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355326003.html",
      },
      {
        id: "1355283006",
        productCode: "1355283_group_006",
        name: "Grandad shirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_tshirtsshirts_shirts_longsleeve",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Brown",
          hex: "#53443C",
          shade: "Rust|Mahogany",
        },
        colorVariants: [
          {
            articleCode: "1355283006",
            colorName: "Brown",
            hex: "#53443C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/8d9c57fce69cc5040199993f01dc2bcff4092ea3.jpg",
          },
          {
            articleCode: "1355283005",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872369/hm/kids/1843dc4e7b16b6ab631eb76fa2bcef0fb00b20aa.jpg",
          },
          {
            articleCode: "1355283004",
            colorName: "Light dusty turquoise",
            hex: "#929B9A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/05fca6eeac5af7d7ce370ac11ebdf385a30bdb9c.jpg",
          },
          {
            articleCode: "1355283003",
            colorName: "Natural beige",
            hex: "#B7AB97",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872374/hm/kids/26bb397d7598d9f97a4fe0fb9b1b6dd8ef2d9607.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355283006009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355283006017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Shirt in a soft, airy weave with a band collar, buttons down the front and long roll-up sleeves with a tab and button, and buttoned cuffs.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 68 cm, Length: 43 cm",
          "2-3Y: Width: 70 cm, Length: 45 cm",
          "3-4Y: Width: 72 cm, Length: 47 cm",
          "4-5Y: Width: 75 cm, Length: 49 cm",
          "5-6Y: Width: 77 cm, Length: 50 cm",
          "6-7Y: Width: 79 cm, Length: 52 cm",
          "7-8Y: Width: 82 cm, Length: 54 cm",
          "8-9Y: Width: 85 cm, Length: 56 cm",
          "9-10Y: Width: 88 cm, Length: 58 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Grandad collar "],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/8d9c57fce69cc5040199993f01dc2bcff4092ea3.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872392/hm/kids/ee41bee27435d164b8717f87be5721224f8d785a.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872392/hm/kids/ee41bee27435d164b8717f87be5721224f8d785a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872392/hm/kids/190666805da5a08ae142738a2404dd3774ddbd3b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872393/hm/kids/a9c72df76a4441ebd5b88e406939770e5595818a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872373/hm/kids/8d9c57fce69cc5040199993f01dc2bcff4092ea3.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872393/hm/kids/5080a6e1ec7fb5004877ef807a299da5b1611c63.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355283006.html",
      },
      {
        id: "1353638001",
        productCode: "1353638_group_001",
        name: "Appliquéd A-line dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_formal",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige",
          hex: "#DFD8C9",
          shade: "Taupe|Wheat|Ecru|Ivory",
        },
        colorVariants: [
          {
            articleCode: "1353638001",
            colorName: "Light beige",
            hex: "#DFD8C9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872396/hm/kids/3fde374413d6ab3c038b74a2da92b9e0bf352bdf.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353638001011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1353638001017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Sleeveless A-line dress in sheer tulle covered with small flower appliqués. Round neckline and opening with a button at the back. Lined.",
        compositions: [
          "Shell: Polyester 100%",
          "Lining: Polyester 100%",
          "Ornamentation: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester from textiles 17%",
          "Recycled polyester from textiles 15%",
        ],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "No iron",
          "Machine wash at 30°",
          "No dry clean",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Shift dress", "A-line"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872396/hm/kids/3fde374413d6ab3c038b74a2da92b9e0bf352bdf.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872393/hm/kids/783c8036a87c5ebb3e46f38bd2ca72477b713484.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872393/hm/kids/783c8036a87c5ebb3e46f38bd2ca72477b713484.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/06cd8591e69da09e84ae368ff94dd14a4d4903ce.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/95df1bf7ce73dbc39eca24bb4b3e4bd5421de9ca.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872396/hm/kids/3fde374413d6ab3c038b74a2da92b9e0bf352bdf.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/4c03268b5efba0b9f213e0c79804d1d8d2ef6462.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/d3015b731dce7c953b08643377354f4e8d7e192e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353638001.html",
      },
      {
        id: "1355278001",
        productCode: "1355278_group_001",
        name: "Cotton resort shirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_tshirtsshirts_shirts_shortsleeve",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B313D",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1355278001",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/3aeda3fab6e53e0ddb55d5a8d33e56e0b0ca1702.jpg",
          },
          {
            articleCode: "1355278003",
            colorName: "Dark turquoise",
            hex: "#4A535B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872397/hm/kids/149631d959947c60e133c0fed3bf3860409f485a.jpg",
          },
          {
            articleCode: "1355278002",
            colorName: "Burnt orange/Flowers",
            hex: "#8A6359",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872397/hm/kids/94f71373a1ea950870dd939d1bb14e798ab779ab.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355278001009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1355278001017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Short-sleeved shirt in a soft cotton weave. Resort collar, buttons down the front, dropped shoulders and a patch chest pocket.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 70 cm, Length: 39 cm",
          "2-3Y: Width: 72 cm, Length: 41 cm",
          "3-4Y: Width: 74 cm, Length: 43 cm",
          "4-5Y: Width: 76 cm, Length: 45 cm",
          "5-6Y: Width: 78 cm, Length: 47 cm",
          "6-7Y: Width: 80 cm, Length: 49   cm",
          "7-8Y: Width: 82 cm, Length: 51 cm",
          "8-9Y: Width: 86 cm, Length: 54 cm",
          "9-10Y: Width: 89 cm, Length: 56 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Relaxed fit"],
          collarStyle: ["Resort collar"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/3aeda3fab6e53e0ddb55d5a8d33e56e0b0ca1702.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872396/hm/kids/773ad383311ab0535f0159a481f1373d6f817165.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872396/hm/kids/773ad383311ab0535f0159a481f1373d6f817165.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872397/hm/kids/b6aaae77c8601eed805b779c2c067c26f05d192d.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872395/hm/kids/3aeda3fab6e53e0ddb55d5a8d33e56e0b0ca1702.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872397/hm/kids/9e3e5ae4848aeea47ce798c998449d2868a86f1c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355278001.html",
      },
      {
        id: "1355302003",
        productCode: "1355302_group_003",
        name: "Appliquéd crochet-look dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_sleeveless",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Yellow/Lemon",
          hex: "#DDCC82",
          shade: "Lemon|Light yellow|Bright yellow",
        },
        colorVariants: [
          {
            articleCode: "1355302003",
            colorName: "Yellow/Lemon",
            hex: "#DDCC82",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/f851fddbe0062440f06fe5cd88e75c4decc665c2.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355302003006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355302003007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355302003008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355302003009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355302003010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Slightly A-line, sleeveless dress in a soft, crochet-look knit with embroidered appliqués on the front and ribbed, scalloped trims along the edges.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 54 cm, Length: 46 cm",
          "2-4Y: Width: 56 cm, Length: 52 cm",
          "4-6Y: Width: 58 cm, Length: 58 cm",
          "6-8Y: Width: 64 cm, Length: 64 cm",
          "8-10Y: Width: 70 cm, Length: 70 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["A-line", "Shift dress"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/f851fddbe0062440f06fe5cd88e75c4decc665c2.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/f851fddbe0062440f06fe5cd88e75c4decc665c2.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/f851fddbe0062440f06fe5cd88e75c4decc665c2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/0bb8411a8cc1257cd49e9748d8f0c4cad26994e9.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355302003.html",
      },
      {
        id: "1305893011",
        productCode: "1305893_group_011",
        name: "Teddy jacket",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_jacketscoats_fleece",
        productType: "Jacket",
        productGroup: "Outerwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark blue/Colour block",
          hex: "#505661",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1305893011",
            colorName: "Dark blue/Colour block",
            hex: "#505661",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/a753b878f48d88179b749453a6b281b7dc3d177e.jpg",
          },
          {
            articleCode: "1305893008",
            colorName: "Navy blue/Colour-block",
            hex: "#393A45",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/585f73d81a6d816527e87c269218c64d5000dacd.jpg",
          },
          {
            articleCode: "1305893010",
            colorName: "Cream/Colour block",
            hex: "#5B615B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/81d22c3623b3c4e73ed8a78df9ec09d6022ba876.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1305893011006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1305893011007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1305893011008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1305893011009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1305893011010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Colour-blocked jacket in soft teddy. Stand collar, zip down the front with an anti-chafe chin guard and a zipped chest pocket. Jersey trims at the cuffs and hem. Lined.",
        compositions: ["Shell: Polyester 100%", "Lining: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled polyester from textiles 18%"],
        careInstructions: [],
        measurements: null,
        attributes: {
          productTypeName: "Jacket",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Stand collar"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/a753b878f48d88179b749453a6b281b7dc3d177e.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/a753b878f48d88179b749453a6b281b7dc3d177e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872398/hm/kids/a753b878f48d88179b749453a6b281b7dc3d177e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/03879934ff60fc7d2274b174825622dc58882f73.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1305893011.html",
      },
      {
        id: "1345414003",
        productCode: "1345414_group_003",
        name: "2-piece set",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jumperssweatshirts_sweatshirts",
        productType: "Top & trousers set",
        productGroup: "Sets",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B2433",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1345414003",
            colorName: "Dark red",
            hex: "#5B2433",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/270dc6be25b0dbf896cae700f6f5f3c5cb949450.jpg",
          },
          {
            articleCode: "1345414006",
            colorName: "Red",
            hex: "#8D1330",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/87d0eb053c386b12ceceedb709810517043c99ba.jpg",
          },
          {
            articleCode: "1345414002",
            colorName: "Light dusty pink",
            hex: "#DBC2C2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/75d7a1d90fdb439d786ca3c2a75d11ea5e1c14f5.jpg",
          },
          {
            articleCode: "1345414005",
            colorName: "Ivory/Hearts",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872402/hm/kids/3bd94af00e4ef7b7bfd7edfe76a117571675a1c0.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1345414003009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1345414003017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Set with a top in fleece sweatshirt fabric and a pair of leggings in ribbed cotton jersey. Top with a round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem. Leggings with an elasticated waist and legs with flared hems.",
        compositions: [
          "Top: Cotton 80%, Polyester 20%",
          "Bottom part: Cotton 95%, Elastane 5%",
        ],
        materials: [
          {
            name: "Cotton",
            amount: "80%",
          },
          {
            name: "Polyester",
            amount: "20%",
          },
          {
            name: "Cotton",
            amount: "95%",
          },
          {
            name: "Elastane",
            amount: "5%",
          },
        ],
        sustainableMaterials: ["Organic cotton 71%", "Recycled cotton 8%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: Top: 75 cm\nBottom: 45 cm , Length: Top: 41 cm\nBottom: 38 cm ",
          "2-3Y: Width: Top: 77 cm\nBottom: 47 cm , Length: Top: 42 cm\nBottom: 42 cm ",
          "3-4Y: Width: Top: 79 cm\nBottom: 48 cm , Length: Top: 45 cm\nBottom: 45 cm ",
          "4-5Y: Width: Top: 80 cm\nBottom: 50 cm , Length: Top: 46 cm\nBottom: 49 cm ",
          "5-6Y: Width: Top: 82 cm\nBottom: 51 cm , Length: Top: 48 cm\nBottom: 52 cm ",
          "6-7Y: Width: Top: 84 cm\nBottom: 53 cm , Length: Top: 50 cm\nBottom: 56 cm ",
          "7-8Y: Width: Top: 86 cm\nBottom: 54 cm , Length: Top: 52 cm\nBottom: 59 cm ",
          "8-9Y: Width: Top: 89 cm\nBottom: 56 cm , Length: Top: 55 cm\nBottom: 62 cm ",
          "9-10Y: Width: Top: 92 cm\nBottom: 58 cm , Length: Top: 57 cm\nBottom: 66 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "GARMENT SET - TOP + LONG LEGGED BOTTOM",
          concepts: ["BASICS"],
          garmentLength: ["Long", "Regular length"],
          waistRise: ["Regular waist"],
          sleeveLength: ["Long sleeve"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/270dc6be25b0dbf896cae700f6f5f3c5cb949450.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/284156b55c087154d74eed2be4882119ef8124f9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/284156b55c087154d74eed2be4882119ef8124f9.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/7eae7c5e4e07c3100efb6c619ef8914d43d32ede.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/f962ca9165a323e9d44f74c7beff8e836d9fd2d3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872401/hm/kids/6f9ee0864039ad0ea6b3a30ac7010ef1dd9c6e12.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872399/hm/kids/270dc6be25b0dbf896cae700f6f5f3c5cb949450.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872400/hm/kids/21a2bd1cc0c2496af8beb7f20a93f96def60110f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1345414003.html",
      },
      {
        id: "1355303001",
        productCode: "1355303_group_001",
        name: "Tulle-skirt velour dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_longsleeve",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#6E3744",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1355303001",
            colorName: "Dark red",
            hex: "#6E3744",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872402/hm/kids/56f92030f7aa027166bdc09bfff4acf92529ca69.jpg",
          },
          {
            articleCode: "1355303003",
            colorName: "Plum",
            hex: "#332B32",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872404/hm/kids/14a512fb0467ef073e0998ce453f1833854a9c58.jpg",
          },
          {
            articleCode: "1355303002",
            colorName: "Old rose",
            hex: "#A98686",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872404/hm/kids/b32f6e8088cdfe090c86de64286a790c1818809b.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1355303001006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1355303001007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1355303001008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1355303001009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1355303001010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Dress in soft velour with a glittery tulle skirt. Round neckline, long sleeves and a voluminous skirt with a small frill trim and gathers at the waist. Lined skirt.",
        compositions: [
          "Top: Polyester 95%, Elastane 5%",
          "Bottom part: Polyester 100%",
          "Bottom part lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "95%",
          },
          {
            name: "Elastane",
            amount: "5%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Tutu skirt"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872402/hm/kids/56f92030f7aa027166bdc09bfff4acf92529ca69.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872403/hm/kids/20ee299d09ee1de94077806434fce3df3b8dafa8.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872403/hm/kids/20ee299d09ee1de94077806434fce3df3b8dafa8.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872403/hm/kids/4919c4325b362ccf331e08994026c22ce0153da0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872403/hm/kids/3c317d19b3f0e320c79c666c2b37fdcb8196539b.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872402/hm/kids/56f92030f7aa027166bdc09bfff4acf92529ca69.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872404/hm/kids/9bad954c57ca98483b8d3df9aa464edb3ae17b9b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1355303001.html",
      },
      {
        id: "1368910001",
        productCode: "1368910_group_001",
        name: "Bow-detail shift dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses_sleeveless",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B313D",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1368910001",
            colorName: "Dark red",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/2febabb4625ade2bae754747d371ab8966df960b.jpg",
          },
          {
            articleCode: "1368910002",
            colorName: "Red",
            hex: "#9A4F5C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/2bd76f3c318b0245b986cbdd9ff226667080eac3.jpg",
          },
          {
            articleCode: "1368910003",
            colorName: "Light pink",
            hex: "#DAB6B6",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/6e75047342d2e45474f1f7ce3ffdd669d4e8fd4e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1368910001006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1368910001007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1368910001008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1368910001009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1368910001010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Dress in a soft bouclé jersey with a large, decorative bow on one shoulder. Round neckline and a keyhole opening with a button at the back. Lined.",
        compositions: ["Polyester 88%, Cotton 11%, Elastane 1%"],
        materials: [
          {
            name: "Polyester",
            amount: "88%",
          },
          {
            name: "Cotton",
            amount: "11%",
          },
          {
            name: "Elastane",
            amount: "1%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 55 cm, Length: 48 cm",
          "2-4Y: Width: 59 cm, Length: 55 cm",
          "4-6Y: Width: 63 cm, Length: 62 cm",
          "6-8Y: Width: 67 cm, Length: 69 cm",
          "8-10Y: Width: 74 cm, Length: 76 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Knee length"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Shift dress"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/2febabb4625ade2bae754747d371ab8966df960b.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/bad4366e94dd15b29815d2106dc1fe989e762cfa.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/bad4366e94dd15b29815d2106dc1fe989e762cfa.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/aab19306bc5ddd0f670da61a17bf376837b4a421.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872405/hm/kids/2febabb4625ade2bae754747d371ab8966df960b.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/70aa69c4f41cb05111f255bd32c1282b94e034c3.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1368910001.html",
      },
      {
        id: "1353706003",
        productCode: "1353706_group_003",
        name: "Chenille-knit cardigan",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jumperssweatshirts_cardigans",
        productType: "Cardigan",
        productGroup: "Knitwear",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark plum red",
          hex: "#543741",
          shade: "Burgundy|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1353706003",
            colorName: "Dark plum red",
            hex: "#543741",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/98b4c1695cf1b8f3fed0fff60248b87be179ee23.jpg",
          },
          {
            articleCode: "1353706001",
            colorName: "Light beige",
            hex: "#837C77",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/b0aeabefa0eb75049e52aaf3e690f4694b34f5a3.jpg",
          },
          {
            articleCode: "1353706002",
            colorName: "Light pink",
            hex: "#DBC2C2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/11934281831e92a25dab1c1ca05f62e289dd1f60.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1353706003006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1353706003007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1353706003008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1353706003009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1353706003010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Cardigan in a soft chenille-knit with a round, rib-trimmed neckline, buttons down the front and narrow, ribbed trims at the cuffs and hem.",
        compositions: ["Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 57 cm, Length: 34 cm",
          "2-4Y: Width: 61 cm, Length: 36 cm",
          "4-6Y: Width: 66 cm, Length: 40 cm",
          "6-8Y: Width: 71 cm, Length: 44 cm",
          "8-10Y: Width: 76 cm, Length: 48 cm",
        ],
        attributes: {
          productTypeName: "Cardigan",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Relaxed fit"],
          neckLineStyle: ["Round neck"],
          countryOfProduction: "Myanmar",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/98b4c1695cf1b8f3fed0fff60248b87be179ee23.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/98b4c1695cf1b8f3fed0fff60248b87be179ee23.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872406/hm/kids/98b4c1695cf1b8f3fed0fff60248b87be179ee23.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/0ccc4f3e971ed90790df6081e3fdbd036f2f0136.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1353706003.html",
      },
      {
        id: "1348003001",
        productCode: "1348003_group_001",
        name: "Water-repellent puffer jacket",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jacketscoats_jackets",
        productType: "Jacket",
        productGroup: "Outerwear",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dusty pink",
          hex: "#A48E90",
          shade: "Bright pink|Hot pink|Neon pink|Rose",
        },
        colorVariants: [
          {
            articleCode: "1348003001",
            colorName: "Dusty pink",
            hex: "#A48E90",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/bb50d410c0f5664174f0b9ac4b7ee3bd9264d285.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1348003001006",
            name: "1½-2Y",
            inStock: false,
          },
          {
            sizeCode: "1348003001007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1348003001008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1348003001009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1348003001010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Puffer jacket in a water-repellent, quilted weave. Detachable hood, stand-up collar and a zip down the front with an anti-chafe chin guard. Pockets in the side seams and elasticated trims around the hood, cuffs and hem. Lined. The jacket can be worn as it is or as an insulating layer.",
        compositions: [
          "Shell: Polyester 100%",
          "Padding: Polyester 100%",
          "Lining: Polyester 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [
          "Recycled polyester from textiles 56%",
          "Recycled polyester from textiles 43%",
        ],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 69 cm, Length: 38 cm",
          "2-4Y: Width: 73 cm, Length: 42 cm",
          "4-6Y: Width: 77 cm, Length: 46 cm",
          "6-8Y: Width: 81 cm, Length: 50 cm",
          "8-10Y: Width: 88 cm, Length: 55 cm",
        ],
        attributes: {
          productTypeName: "Jacket",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Stand collar"],
          clothingStyle: ["Puffer"],
          functionality: ["Water-repellent"],
          niceToKnow: ["Padded"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/bb50d410c0f5664174f0b9ac4b7ee3bd9264d285.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/bb50d410c0f5664174f0b9ac4b7ee3bd9264d285.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/bb50d410c0f5664174f0b9ac4b7ee3bd9264d285.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872407/hm/kids/86277500441bee003ffc969fdd82348f849df25b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/691aa5176b2f34005abd737b2ccbbeddba367e44.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1348003001.html",
      },
      {
        id: "1343383025",
        productCode: "1343383_group_025",
        name: "Brushed-inside sweatshirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jumperssweatshirts_sweatshirts",
        productType: "Sweatshirt",
        productGroup: "Sweatshirts & hoodies",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light pink/Hearts",
          hex: "#E4BCCB",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1343383025",
            colorName: "Light pink/Hearts",
            hex: "#E4BCCB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/d5f6853b4b73ca213971ad4d6802e8d7aab273bb.jpg",
          },
          {
            articleCode: "1343383015",
            colorName: "Red/Hearts",
            hex: "#8D1330",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/90d157f27ba5d9f80be3f6ee0c02caefbdb25703.jpg",
          },
          {
            articleCode: "1343383019",
            colorName: "Dark red/Hearts",
            hex: "#4B262D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/f943f55b81ae6713d978ca71b29ce464074a515f.jpg",
          },
          {
            articleCode: "1343383005",
            colorName: "Ivory/Hearts",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872409/hm/kids/786a79358f2214348d7aabd381532b4b76121073.jpg",
          },
          {
            articleCode: "1343383001",
            colorName: "Dusty purple/Hearts",
            hex: "#917585",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872410/hm/kids/c70937f53338f414ed712db4320fb7eb61fbaf07.jpg",
          },
          {
            articleCode: "1343383003",
            colorName: "Cream/Hearts",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872409/hm/kids/50c0dce8a3b57eab1a98a93de3d545ea02821145.jpg",
          },
          {
            articleCode: "1343383012",
            colorName: "Light blue/Cherries",
            hex: "#8E9BC1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872409/hm/kids/8bdf1d6358e32cb7254e15e2e195872e8478832b.jpg",
          },
          {
            articleCode: "1343383021",
            colorName: "Dark brown/Polka dot",
            hex: "#4B3935",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872409/hm/kids/331cbf9b3254a5f563c2dddb1413dafa405f82b4.jpg",
          },
          {
            articleCode: "1343383009",
            colorName: "Dark grey/Hearts",
            hex: "#45464A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/323ff05de144ce74dadc5ce9ea1b9f3553c63f18.jpg",
          },
          {
            articleCode: "1343383013",
            colorName: "Light dusty pink/Cherries",
            hex: "#DBC2C2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/9741e7366c13b6fd4152c0ef514b3f2a6a50a596.jpg",
          },
          {
            articleCode: "1343383017",
            colorName: "Turquoise/Hearts",
            hex: "#9CAAAE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872410/hm/kids/f6d56048c9648db00eaf8d4234e85e3c7cc465d9.jpg",
          },
          {
            articleCode: "1343383004",
            colorName: "Mole/Hearts",
            hex: "#928581",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/ae4f295ec2fbe00071a1aacf973d0eea0eefd6f5.jpg",
          },
          {
            articleCode: "1343383030",
            colorName: "Cream/Hearts",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/72b06a4cd7a8acdf94969e8b6335d1a0dc88dfa8.jpg",
          },
          {
            articleCode: "1343383024",
            colorName: "Light beige/Leopard print",
            hex: "#BEB3A2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/815d281b7c57cd8d24a2eab51066237ef346cbf0.jpg",
          },
          {
            articleCode: "1343383026",
            colorName: "Pink",
            hex: "#D6A2B2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872411/hm/kids/da2933ff2bf27e3ce61a52e3c65aa569780b840f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1343383025006",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1343383025007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1343383025008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1343383025009",
            name: "6-8Y",
            inStock: false,
          },
          {
            sizeCode: "1343383025010",
            name: "8-10Y",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable", "basics"],
        markers: [],
        description:
          "Top in lightweight sweatshirt fabric with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders and long sleeves. Ribbing at the cuffs and hem.",
        compositions: ["Cotton 80%, Polyester 20%"],
        materials: [
          {
            name: "Cotton",
            amount: "80%",
          },
          {
            name: "Polyester",
            amount: "20%",
          },
        ],
        sustainableMaterials: ["Organic cotton 62%", "Recycled cotton 19%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 75 cm, Length: 41 cm",
          "2-4Y: Width: 79 cm, Length: 45 cm",
          "4-6Y: Width: 82 cm, Length: 48 cm",
          "6-8Y: Width: 86 cm, Length: 52 cm",
          "8-10Y: Width: 92 cm, Length: 57 cm",
        ],
        attributes: {
          productTypeName: "SWEATSHIRT",
          concepts: ["BASICS"],
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          clothingStyle: ["Sweatshirt"],
          neckLineStyle: ["Crew-neck"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/d5f6853b4b73ca213971ad4d6802e8d7aab273bb.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/d5f6853b4b73ca213971ad4d6802e8d7aab273bb.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/d5f6853b4b73ca213971ad4d6802e8d7aab273bb.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872408/hm/kids/3629bc5029762ece0c02641e8fa2777ebb463176.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1343383025.html",
      },
      {
        id: "1293495009",
        productCode: "1293495_group_009",
        name: "Fluffy jacket",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_jacketscoats_jackets",
        productType: "Jacket",
        productGroup: "Outerwear",
        price: {
          currency: "INR",
          current: 2299,
          regular: 2299,
          onSale: false,
          formatted: "Rs.2,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Mole",
          hex: "#7F7366",
          shade: "Ecru|Stone",
        },
        colorVariants: [
          {
            articleCode: "1293495009",
            colorName: "Mole",
            hex: "#7F7366",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/90bede496a5506d5333c4a9f7d0d25a261be2ee4.jpg",
          },
          {
            articleCode: "1293495006",
            colorName: "Dusty pink",
            hex: "#A48E90",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872413/hm/kids/f94843c6d1814b435b62f09f172e705d383868eb.jpg",
          },
          {
            articleCode: "1293495010",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872415/hm/kids/7d55eb8f6b2fff2d515a639bcbabb4891b46986f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1293495009006",
            name: "1½-2Y",
            inStock: false,
          },
          {
            sizeCode: "1293495009007",
            name: "2-4Y",
            inStock: true,
          },
          {
            sizeCode: "1293495009008",
            name: "4-6Y",
            inStock: true,
          },
          {
            sizeCode: "1293495009009",
            name: "6-8Y",
            inStock: true,
          },
          {
            sizeCode: "1293495009010",
            name: "8-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "Jacket in soft, fluffy fabric featuring a turn-down collar, zip down the front with a heart-shaped metal puller, and discreet side pockets. Lined.",
        compositions: ["Polyester 100%", "Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled polyester from textiles 9%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Low iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: [
          "1½-2Y: Width: 66 cm, Length: 32 cm",
          "2-4Y: Width: 70 cm, Length: 36 cm",
          "4-6Y: Width: 74 cm, Length: 40 cm",
          "6-8Y: Width: 78 cm, Length: 43 cm",
          "8-10Y: Width: 85 cm, Length: 47 cm",
        ],
        attributes: {
          productTypeName: "Jacket",
          garmentLength: ["Regular length"],
          sleeveLength: ["Long sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Classic collar"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/90bede496a5506d5333c4a9f7d0d25a261be2ee4.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/2ceb1963092bff705fec87bfea4363cc273a1629.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/2ceb1963092bff705fec87bfea4363cc273a1629.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/c6c50a975fc39146293dcd4585f580034008902e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/d29334126478ed77531433f23514f5655364f567.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872413/hm/kids/8af114ee130265b95cce89ecc607f8b1f8917e58.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872412/hm/kids/90bede496a5506d5333c4a9f7d0d25a261be2ee4.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872413/hm/kids/897db5bce684b75f2d89017c602a1dddca5ed8f5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1293495009.html",
      },
      {
        id: "1349185004",
        productCode: "1349185_group_004",
        name: "Linen-blend resort shirt",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_boys_clothing_tshirtsshirts_shirts_linen",
        productType: "Shirt",
        productGroup: "Tops",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#5B2433",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1349185004",
            colorName: "Dark red",
            hex: "#5B2433",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/kids/92e1731dac98acc12de04b0d0d891f8bc392fcc8.jpg",
          },
          {
            articleCode: "1349185005",
            colorName: "Brown",
            hex: "#796145",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872415/hm/kids/d5bb4c10cb7e6ecf49406b90d25b610edfa42e43.jpg",
          },
          {
            articleCode: "1349185001",
            colorName: "Light mole/Dinosaurs",
            hex: "#C3BEB7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872415/hm/kids/83569f07b0937c52648d1c91dbe142ffe735e2a3.jpg",
          },
          {
            articleCode: "1349185003",
            colorName: "Dusty khaki green",
            hex: "#5B615B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872415/hm/kids/83b7d0fe2e61c213cf812514f6cb83d08ccb3e49.jpg",
          },
          {
            articleCode: "1349185002",
            colorName: "Dark blue/Mole striped",
            hex: "#303241",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872416/hm/kids/458493a3e0f5f9f518a6049e2cc42cd32c6ae4a6.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1349185004009",
            name: "1½-2Y",
            inStock: false,
          },
          {
            sizeCode: "1349185004010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1349185004017",
            name: "9-10Y",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Short-sleeved shirt in an airy weave made from a linen and cotton blend. Features a resort collar, buttons down the front and gently dropped shoulders.",
        compositions: ["Cotton 70%, Linen 30%"],
        materials: [
          {
            name: "Cotton",
            amount: "70%",
          },
          {
            name: "Linen",
            amount: "30%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 70 cm, Length: 39 cm",
          "2-3Y: Width: 72 cm, Length: 41 cm",
          "3-4Y: Width: 74 cm, Length: 43 cm",
          "4-5Y: Width: 76 cm, Length: 45 cm",
          "5-6Y: Width: 78 cm, Length: 47 cm",
          "6-7Y: Width: 80 cm, Length: 49 cm",
          "7-8Y: Width: 82 cm, Length: 51 cm",
          "8-9Y: Width: 86 cm, Length: 54 cm",
          "9-10Y: Width: 89 cm, Length: 56 cm",
        ],
        attributes: {
          productTypeName: "Shirt",
          garmentLength: ["Regular length"],
          sleeveLength: ["Short sleeve"],
          fits: ["Regular fit"],
          collarStyle: ["Resort collar"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/kids/92e1731dac98acc12de04b0d0d891f8bc392fcc8.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/kids/92e1731dac98acc12de04b0d0d891f8bc392fcc8.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/kids/92e1731dac98acc12de04b0d0d891f8bc392fcc8.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/f9cbf48644f100324e7cd9106446fb78861683c5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1349185004.html",
      },
      {
        id: "1367246001",
        productCode: "1367246_group_001",
        name: "Smocked strappy dress",
        brand: "H&M",
        category: "kids",
        subCategory: "kids_girls_clothing_dresses",
        productType: "Dress",
        productGroup: "Dresses",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red/White",
          hex: "#5B313D",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1367246001",
            colorName: "Dark red/White",
            hex: "#5B313D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/a8d49efe7ff3db801feb0cd4e541991172f6460f.jpg",
          },
          {
            articleCode: "1367246002",
            colorName: "Dark yellow",
            hex: "#CBAA5F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/kids/a74ac333968232ce20983391608052bb7eda0a79.jpg",
          },
          {
            articleCode: "1367246003",
            colorName: "Blue",
            hex: "#7191C1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/kids/592c225361ac46cf671d2f337ef1f279abdbb35c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1367246001009",
            name: "1½-2Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001010",
            name: "2-3Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001011",
            name: "3-4Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001012",
            name: "4-5Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001013",
            name: "5-6Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001014",
            name: "6-7Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001015",
            name: "7-8Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001016",
            name: "8-9Y",
            inStock: true,
          },
          {
            sizeCode: "1367246001017",
            name: "9-10Y",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Dress in seersucker with smocking at the top. Features a square, frill-trimmed neckline, elasticated shoulder straps and a flared skirt. Unlined.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "1½-2Y: Width: 44 cm, Length: 51 cm",
          "2-3Y: Width: 45 cm, Length: 54 cm",
          "3-4Y: Width: 47 cm, Length: 58 cm",
          "4-5Y: Width: 48 cm, Length: 61 cm",
          "5-6Y: Width: 50 cm, Length: 65 cm",
          "6-7Y: Width: 52 cm, Length: 68 cm",
          "7-8Y: Width: 54 cm, Length: 72 cm",
          "8-9Y: Width: 56 cm, Length: 76 cm",
          "9-10Y: Width: 59 cm, Length: 80 cm",
        ],
        attributes: {
          productTypeName: "Dress",
          garmentLength: ["Midi"],
          sleeveLength: ["Sleeveless"],
          fits: ["Regular fit"],
          clothingStyle: ["Strappy dress", "Smocked", "Flared"],
          neckLineStyle: ["Straight neckline"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/a8d49efe7ff3db801feb0cd4e541991172f6460f.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/852c8f97d8e634cf0104d40ec095e546b4d956c3.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/852c8f97d8e634cf0104d40ec095e546b4d956c3.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/702612ed4810e6612d1cecfb3cb7a9b4bf7711a4.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/a8d49efe7ff3db801feb0cd4e541991172f6460f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872417/hm/kids/8423b14e7ea3d0ff08074579badffb0ca9da8e61.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1367246001.html",
      },
    ],
  },
  {
    category: "home",
    count: 30,
    products: [
      {
        id: "1206055030",
        productCode: "1206055_group_030",
        name: "Muslin dressing gown",
        brand: "H&M",
        category: "home",
        subCategory: "ladies_nightwear_dressing_gowns",
        productType: "Dressing gown",
        productGroup: "Nightwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light dusty pink",
          hex: "#B89F90",
          shade: "Peach",
        },
        colorVariants: [
          {
            articleCode: "1206055030",
            colorName: "Light dusty pink",
            hex: "#B89F90",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/3fda8502debc39718e3a1da954dbd7f84b22e839.jpg",
          },
          {
            articleCode: "1206055015",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/home/14aa3d62b0522dca6a5182795579d3c62bc64b74.jpg",
          },
          {
            articleCode: "1206055012",
            colorName: "Anthracite grey",
            hex: "#4C4D50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/6c619a60d02a9e250a9e8d6fedb2a587ca3757ed.jpg",
          },
          {
            articleCode: "1206055032",
            colorName: "Green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/4fb08c91f7916231cb5e4c0ec0b1738a58447a64.jpg",
          },
          {
            articleCode: "1206055029",
            colorName: "Light greige",
            hex: "#B7B2AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/d0cdc08cc2d2440cab3d1358590f6378a31eafe0.jpg",
          },
          {
            articleCode: "1206055013",
            colorName: "Beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/home/d97467624b913167bb3df63f13d37eb9c10754d3.jpg",
          },
          {
            articleCode: "1206055022",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/fae19f231beeef1b850393026b80654e89e89e2e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1206055030002",
            name: "S/M/T",
            inStock: true,
          },
          {
            sizeCode: "1206055030004",
            name: "L/XL/T",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Dressing gown in soft cotton muslin with a shawl collar, detachable tie belt at the waist and patch front pockets.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Robe",
          garmentLength: ["Midi"],
          sleeveLength: ["Long sleeve"],
          roomCategory: ["Bathroom", "Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/3fda8502debc39718e3a1da954dbd7f84b22e839.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/3fda8502debc39718e3a1da954dbd7f84b22e839.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/3fda8502debc39718e3a1da954dbd7f84b22e839.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/5071c9a1e9865a24fa62b62ffd5929039d385314.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/1f71eff5884eb0b9d6e9f17fc299fae05cec8657.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1206055030.html",
      },
      {
        id: "0997809084",
        productCode: "0997809_group_084",
        name: "Soft toy",
        brand: "H&M",
        category: "home",
        subCategory: "home_kidsbaby_toys",
        productType: "Soft toy",
        productGroup: "Toys",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "Brown/Monkey",
          hex: "#594B3D",
          shade: "Mahogany|Rust",
        },
        colorVariants: [
          {
            articleCode: "0997809084",
            colorName: "Brown/Monkey",
            hex: "#594B3D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/90f8df68795eb97261b6655fc200f0021fe93108.jpg",
          },
          {
            articleCode: "0997809081",
            colorName: "Light green/Dinosaur",
            hex: "#8E906C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/f2d10f035f892c1877e14db52a63fa7763acf074.jpg",
          },
          {
            articleCode: "0997809099",
            colorName: "Light grey/Elephant",
            hex: "#BCBDBE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/a02f718ccf5312cd0481a2219f015772f83035fe.jpg",
          },
          {
            articleCode: "0997809082",
            colorName: "Brown/Squirrel",
            hex: "#8C7256",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/8588837ac9ddd857e4ab097b19c81052e0603592.jpg",
          },
          {
            articleCode: "0997809079",
            colorName: "Light beige/Alpaca",
            hex: "#C5B9AB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/3c0344a5d6120a9126cd120c1fa62c4027c6e1aa.jpg",
          },
          {
            articleCode: "0997809083",
            colorName: "Light beige/Giraffe",
            hex: "#C5B9AB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/3025415e500f2c35b236ee783763cab5327fde8b.jpg",
          },
          {
            articleCode: "0997809100",
            colorName: "Black/Bird",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/10a1d935bf47e833cfe321b0aaa83d0ddb49e325.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0997809084001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Soft toy with embroidered details and appliqués. The soft toys vary in size, measuring approximately 15–22 cm in length depending on the model.",
        compositions: ["Shell: Polyester 100%", "Padding: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry low",
          "No iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: ["Width: 8 cm", "Length: 9 cm", "Height: 28 cm"],
        attributes: {
          weight: "85 g",
          productTypeName: "Soft toy",
          roomCategory: ["Kids room"],
          recommendedAge: "0+",
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/90f8df68795eb97261b6655fc200f0021fe93108.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/90f8df68795eb97261b6655fc200f0021fe93108.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/90f8df68795eb97261b6655fc200f0021fe93108.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/5e7d3072fdbe4104c0efc6d8a1eeabe5d7f0546c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/7f6c12ae5b452dcddca498d831e44952438e6b8b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0997809084.html",
      },
      {
        id: "1317827001",
        productCode: "1317827_group_001",
        name: "Reed diffuser",
        brand: "H&M",
        category: "home",
        subCategory: "home_livingroom_decorations",
        productType: "Reed diffuser",
        productGroup: "Home fragrance",
        price: {
          currency: "INR",
          current: 1299,
          regular: 1299,
          onSale: false,
          formatted: "Rs.1,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Sublime Patchouli",
          hex: "#B5AFA0",
          shade: "Ecru|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1317827001",
            colorName: "Sublime Patchouli",
            hex: "#B5AFA0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/5a21b6ffe2b712b09b76175463c16bcaea472530.jpg",
          },
          {
            articleCode: "1317827004",
            colorName: "Sage Serenity",
            hex: "#825C39",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872428/hm/home/844f4d960de1e28aa7be97906ca1273ade769933.jpg",
          },
          {
            articleCode: "1317827003",
            colorName: "Crisp Cotton",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/2bd95cca2f1e9bf1073e024986f067156c38c20d.jpg",
          },
          {
            articleCode: "1317827007",
            colorName: "Winter's Eve",
            hex: "#732D3B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872427/hm/home/74cdfa8a53d23d6497fc49c300787d8e6340c6c9.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1317827001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Glass bottle with diffuser sticks. The bottle has a pinewood ring around the opening and a label on the front. The diffuser sticks absorb the oil and spread a pleasant fragrance around the room. 100 ml.",
        compositions: ["Container: Glass 100%"],
        materials: [
          {
            name: "Glass",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Container: Height: 11.5 cm",
          "Top: Diameter: 3.5 cm",
          "Height: Bottle: 11 cm",
          "Diameter: Bottle: 6 cm",
          "Volume: Bottle: 120 ml",
        ],
        attributes: {
          fragranceFamily: ["Floral"],
          volume: "100 ml",
          ingredients: "Cinnamyl Alcohol, Benzyl Salicylate",
          productTypeName: "REED DIFFUSER",
          roomCategory: ["Living room"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/5a21b6ffe2b712b09b76175463c16bcaea472530.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/5a21b6ffe2b712b09b76175463c16bcaea472530.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/5a21b6ffe2b712b09b76175463c16bcaea472530.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/7e4b20687f7c8aa316fa59f11d2bc24b27ab4837.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872427/hm/home/d47146be5723853e2f9ebdb174416c7200200f22.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/67d65dec59c3d67a4933ec4bf8894378e1b1d5e6.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1317827001.html",
      },
      {
        id: "1317827003",
        productCode: "1317827_group_003",
        name: "Reed diffuser",
        brand: "H&M",
        category: "home",
        subCategory: "home_livingroom_decorations",
        productType: "Reed diffuser",
        productGroup: "Home fragrance",
        price: {
          currency: "INR",
          current: 1299,
          regular: 1299,
          onSale: false,
          formatted: "Rs.1,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Crisp Cotton",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1317827003",
            colorName: "Crisp Cotton",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/2bd95cca2f1e9bf1073e024986f067156c38c20d.jpg",
          },
          {
            articleCode: "1317827001",
            colorName: "Sublime Patchouli",
            hex: "#B5AFA0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/5a21b6ffe2b712b09b76175463c16bcaea472530.jpg",
          },
          {
            articleCode: "1317827004",
            colorName: "Sage Serenity",
            hex: "#825C39",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872428/hm/home/844f4d960de1e28aa7be97906ca1273ade769933.jpg",
          },
          {
            articleCode: "1317827007",
            colorName: "Winter's Eve",
            hex: "#732D3B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872427/hm/home/74cdfa8a53d23d6497fc49c300787d8e6340c6c9.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1317827003001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Glass bottle with diffuser sticks. The bottle has a pinewood ring around the opening and a label on the front. The diffuser sticks absorb the oil and spread a pleasant fragrance around the room. 100 ml.",
        compositions: ["Container: Glass 100%"],
        materials: [
          {
            name: "Glass",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Container: Height: 11.5 cm",
          "Top: Diameter: 3.5 cm",
          "Height: Bottle: 11 cm",
          "Diameter: Bottle: 6 cm",
          "Volume: Bottle: 120 ml",
        ],
        attributes: {
          fragranceFamily: ["Fresh"],
          volume: "100 ml",
          ingredients:
            "Benzyl Salicylate, Hydroxycitronellal, Hexyl Cinnamal, Alpha-Isomethyl Ionone",
          productTypeName: "REED DIFFUSER",
          roomCategory: ["Living room"],
          countryOfProduction: "Vietnam",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/2bd95cca2f1e9bf1073e024986f067156c38c20d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/2bd95cca2f1e9bf1073e024986f067156c38c20d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872426/hm/home/2bd95cca2f1e9bf1073e024986f067156c38c20d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872428/hm/home/9a77505e7918dcc30f25e0af717612774671b2d1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872433/hm/home/f9ae91fbd1fb89d216d6e07486a4739143df060f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1317827003.html",
      },
      {
        id: "1206055012",
        productCode: "1206055_group_012",
        name: "Muslin dressing gown",
        brand: "H&M",
        category: "home",
        subCategory: "ladies_nightwear_dressing_gowns",
        productType: "Dressing gown",
        productGroup: "Nightwear",
        price: {
          currency: "INR",
          current: 1999,
          regular: 1999,
          onSale: false,
          formatted: "Rs.1,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Anthracite grey",
          hex: "#4C4D50",
          shade: "Charcoal|Dark grey",
        },
        colorVariants: [
          {
            articleCode: "1206055012",
            colorName: "Anthracite grey",
            hex: "#4C4D50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/6c619a60d02a9e250a9e8d6fedb2a587ca3757ed.jpg",
          },
          {
            articleCode: "1206055030",
            colorName: "Light dusty pink",
            hex: "#B89F90",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872419/hm/home/3fda8502debc39718e3a1da954dbd7f84b22e839.jpg",
          },
          {
            articleCode: "1206055015",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/home/14aa3d62b0522dca6a5182795579d3c62bc64b74.jpg",
          },
          {
            articleCode: "1206055032",
            colorName: "Green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/4fb08c91f7916231cb5e4c0ec0b1738a58447a64.jpg",
          },
          {
            articleCode: "1206055029",
            colorName: "Light greige",
            hex: "#B7B2AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/d0cdc08cc2d2440cab3d1358590f6378a31eafe0.jpg",
          },
          {
            articleCode: "1206055013",
            colorName: "Beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872421/hm/home/d97467624b913167bb3df63f13d37eb9c10754d3.jpg",
          },
          {
            articleCode: "1206055022",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/fae19f231beeef1b850393026b80654e89e89e2e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1206055012002",
            name: "S/M/T",
            inStock: true,
          },
          {
            sizeCode: "1206055012004",
            name: "L/XL/T",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Dressing gown in soft cotton muslin with a shawl collar, detachable tie belt at the waist and patch front pockets.",
        compositions: ["Shell: Cotton 100%", "Back lining: Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Robe",
          garmentLength: ["Midi"],
          sleeveLength: ["Long sleeve"],
          roomCategory: ["Bathroom", "Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/6c619a60d02a9e250a9e8d6fedb2a587ca3757ed.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/e0705cd01b5c61246d878a7cd0fc722cdb139d17.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/e0705cd01b5c61246d878a7cd0fc722cdb139d17.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872420/hm/home/6c619a60d02a9e250a9e8d6fedb2a587ca3757ed.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/604bb5def3469ff09b58cc4cadece632bf16d7be.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/4e24dfeb1cc356c3e373d3ca643280fdf38fc6ce.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1206055012.html",
      },
      {
        id: "1282399001",
        productCode: "1282399_group_001",
        name: "Footed marble serving bowl",
        brand: "H&M",
        category: "home",
        subCategory: "home_cookwarebakeware_kitchenutencils",
        productType: "Serving bowl",
        productGroup: "Kitchen & dining",
        price: {
          currency: "INR",
          current: 3999,
          regular: 3999,
          onSale: false,
          formatted: "Rs.3,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Beige",
          hex: "#B3AB98",
          shade: "Ecru|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1282399001",
            colorName: "Beige",
            hex: "#B3AB98",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/7b651c30ac3b201ca762b71c9a5ca1ccb972319e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1282399001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Large, footed serving bowl crafted from marble with a high rim. A dignified centrepiece in its own right, this bowl is also a unique way to display fruit, flowers and other decorative arrangements. As marble is a natural material, the colour and texture of each product may vary.",
        compositions: ["Marble 100%"],
        materials: [
          {
            name: "Marble",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Food contact safe",
          "Not freezer safe",
          "Not oven safe",
          "Not microwave safe",
          "Hand wash",
        ],
        measurements: [
          "Height: 8 cm",
          "Diameter: 25 cm",
          "Height: 4 cm",
          "Diameter: 25 cm",
          "Volume: 1963 cm3 ",
        ],
        attributes: {
          weight: "2,69 kg",
          productTypeName: "Serving bowl",
          roomCategory: ["Kitchen"],
          countryOfProduction: "Indonesia",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/7b651c30ac3b201ca762b71c9a5ca1ccb972319e.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/7b651c30ac3b201ca762b71c9a5ca1ccb972319e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872429/hm/home/7b651c30ac3b201ca762b71c9a5ca1ccb972319e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/3fd673491c6829c972b401675c00e2b35596a763.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/ee53fe582841288feab1034350ba4cfa2ea0bd96.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1282399001.html",
      },
      {
        id: "1313399001",
        productCode: "1313399_group_001",
        name: "Stainless steel espresso cup and saucer",
        brand: "H&M",
        category: "home",
        subCategory: "home_cookingdining_cupsmugs",
        productType: "Espresso cup set",
        productGroup: "Kitchen & dining",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Silver-coloured",
          hex: "#ABAAAA",
          shade: "Grey silver",
        },
        colorVariants: [
          {
            articleCode: "1313399001",
            colorName: "Silver-coloured",
            hex: "#ABAAAA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872430/hm/home/780d8188d067037ecc1aaa6b6a57a92a67e737fc.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1313399001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Espresso cup and saucer in stainless steel with a timeless design. Stackable construction for easy storage.",
        compositions: ["Stainless steel 100%"],
        materials: [
          {
            name: "Stainless steel",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Food contact safe",
          "Not freezer safe",
          "Not microwave safe",
          "Not oven safe",
          "Dishwasher safe",
        ],
        measurements: [
          "Cup: Height: 5 cm",
          "Cup: Diameter: 6.2 cm",
          "Saucer: Diameter: 11.9 cm",
          "Height: Cup: 5 cm",
          "Diameter: Cup: 6 cm\nSaucer: 12 cm",
          "Volume: Cup: 140 ml",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "Kitchen products set",
          roomCategory: ["Dining room"],
          homewareStyle: ["Espresso cup"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872430/hm/home/780d8188d067037ecc1aaa6b6a57a92a67e737fc.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/31e7de7051d69e2d87b19d1adb0b475a5d4b9d0f.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/31e7de7051d69e2d87b19d1adb0b475a5d4b9d0f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872430/hm/home/780d8188d067037ecc1aaa6b6a57a92a67e737fc.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872432/hm/home/8e400df1646a49dd5f537e8923b40bf90cc7b651.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872432/hm/home/c54d4ba158d5fb4f183f415d5f646444e0339089.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872432/hm/home/2c1c8faf6df11addacef0465b2a7f7b2af68da9c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1313399001.html",
      },
      {
        id: "1335331001",
        productCode: "1335331_group_001",
        name: "Marble serving tray",
        brand: "H&M",
        category: "home",
        subCategory: "home_cookingdining_trays",
        productType: "Serving tray",
        productGroup: "Kitchen & dining",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige/Marbled",
          hex: "#C3BFB5",
          shade: "Ecru|Ivory|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1335331001",
            colorName: "Light beige/Marbled",
            hex: "#C3BFB5",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/2f3397110b1418ac33481c01036fc10fd5b99657.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1335331001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Serving tray in marble with a rectangular design and a raised rim. As marble is a natural material, the colour and texture of each product may vary.",
        compositions: ["Marble 100%"],
        materials: [
          {
            name: "Marble",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Food contact safe",
          "Not freezer safe",
          "Not oven safe",
          "Not microwave safe",
          "Hand wash",
        ],
        measurements: [
          "Height: 4 cm",
          "Width: 19 cm",
          "Length: 28 cm",
          "Width: 190 mm",
          "Length: 280 mm",
          "Height: 40 mm",
        ],
        attributes: {
          weight: "2,67 kg",
          productTypeName: "Serving tray",
          roomCategory: ["Kitchen"],
          shapes: ["Rectangular"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/2f3397110b1418ac33481c01036fc10fd5b99657.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872433/hm/home/20904bb32281bdb8aee45056cc34e07beb1a1268.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872433/hm/home/20904bb32281bdb8aee45056cc34e07beb1a1268.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872431/hm/home/2f3397110b1418ac33481c01036fc10fd5b99657.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872433/hm/home/da29019812f1480ec7d967e5b6979e50d30dc457.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872433/hm/home/1a729c9f7f148fe70ec70919e740ae01e0f31907.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872434/hm/home/5f10efd4efe5298e87dd50f24535dff55fd97a45.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1335331001.html",
      },
      {
        id: "1022528035",
        productCode: "1022528_group_035",
        name: "Cotton bath mat",
        brand: "H&M",
        category: "home",
        subCategory: "home_bathshower_accessories_bathmats",
        productType: "Bath mat",
        productGroup: "Bath",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Light green",
          hex: "#999C85",
          shade: "Khaki green",
        },
        colorVariants: [
          {
            articleCode: "1022528035",
            colorName: "Light green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872434/hm/home/592dbdbb4d2f3c4f09ac4dc617cdcdb89a512609.jpg",
          },
          {
            articleCode: "1022528034",
            colorName: "Light dusty blue",
            hex: "#9FA8B6",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872436/hm/home/f73d53522f35163466902d55d9675541fbd577e7.jpg",
          },
          {
            articleCode: "1022528017",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872436/hm/home/14c33d486fd6d949021ce32824ab153a032e661c.jpg",
          },
          {
            articleCode: "1022528013",
            colorName: "Black",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872438/hm/home/07d2f45b77c10e82b7680e7552e2345c4fcfaf82.jpg",
          },
          {
            articleCode: "1022528039",
            colorName: "Dark green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872437/hm/home/890de3199c12bc6344ca9d059b820443cf512e97.jpg",
          },
          {
            articleCode: "1022528046",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872437/hm/home/b8aa7e29a4748700b606f6f787b297da86738280.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1022528035004",
            name: "50x70",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Bath mat in soft, fast-drying cotton terry with a high absorption rate. Anti-slip protectors on the back.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 100%"],
        careInstructions: [
          "Loose fibers or linting may occur during wash and use",
          "Only non-chlorine bleach when needed",
          "Line dry",
          "No iron",
          "Machine wash at 30°",
          "No dry clean",
        ],
        measurements: ["50x70: Width: 50 cm, Length: 70 cm, Height: 1 cm"],
        attributes: {
          productTypeName: "Bath mat",
          roomCategory: ["Bathroom"],
          shapes: ["Rectangular"],
          niceToKnow: ["Anti-slip protectors"],
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872434/hm/home/592dbdbb4d2f3c4f09ac4dc617cdcdb89a512609.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872435/hm/home/64f81a80f357d12775394c149cc02a9f7378d569.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872435/hm/home/64f81a80f357d12775394c149cc02a9f7378d569.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872434/hm/home/592dbdbb4d2f3c4f09ac4dc617cdcdb89a512609.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872435/hm/home/490d2cc3fc1d8862bbecccb7979caaa03d6ced9d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872435/hm/home/c8ab22a066b2772798328c8f9e6bb225b81ebb6f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1022528035.html",
      },
      {
        id: "1331756001",
        productCode: "1331756_group_001",
        name: "Broderie anglaise double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 7999,
          regular: 7999,
          onSale: false,
          formatted: "Rs.7,999.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1331756001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872441/hm/home/888339aef4457b0988734a7528f1ea1e102bc280.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1331756001025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Double/king duvet cover set in a soft cotton weave with a thread count of 200, detailed with a wide border in broderie anglaise and a scalloped hem. The set includes one duvet cover with discreet buttons at the bottom, and two matching pillowcases with an envelope opening.",
        compositions: ["Front: Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet Cover: 2.40 m\nPillow Cover:70 cm , Length: Duvet Cover:2.20 m\nPillow Cover:50 cm ",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872441/hm/home/888339aef4457b0988734a7528f1ea1e102bc280.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872438/hm/home/1af588a31b187e4f2f56ece66b5fc71e4a2bd107.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872438/hm/home/1af588a31b187e4f2f56ece66b5fc71e4a2bd107.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872441/hm/home/888339aef4457b0988734a7528f1ea1e102bc280.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872438/hm/home/9c94f07b52f7a28da821e7a9c97550d6e5528557.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872439/hm/home/9e9c2c3cb28507c0764e517dbab4b0b803ac6ae8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872440/hm/home/2927af6084b14a6f2b2a48eba940ca5c37ecdc01.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1331756001.html",
      },
      {
        id: "1331746002",
        productCode: "1331746_group_002",
        name: "Striped lyocell satin pyjamas",
        brand: "H&M",
        category: "home",
        subCategory: "home_homewear",
        productType: "Pyjama set",
        productGroup: "Nightwear",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige/Striped",
          hex: "#C9C4BA",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1331746002",
            colorName: "Light beige/Striped",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872439/hm/home/9c21e6d08227f2e422110f04829c45298d031571.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1331746002002",
            name: "XS/T",
            inStock: false,
          },
          {
            sizeCode: "1331746002003",
            name: "S/T",
            inStock: true,
          },
          {
            sizeCode: "1331746002004",
            name: "M/T",
            inStock: false,
          },
          {
            sizeCode: "1331746002005",
            name: "L/T",
            inStock: false,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Pyjamas with a long-sleeved shirt and a pair of bottoms in softly draping lyocell satin with a striped print. Shirt with a turn-down collar, buttons down the front, low dropped shoulders and a yoke at the back with a box pleat. Finished with wide cuffs and a rounded hem. Bottoms with an elasticated, drawstring waist, diagonal side pockets and wide legs. Part of a series of coordinating pieces.",
        compositions: ["Lyocell 100%"],
        materials: [
          {
            name: "Lyocell",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["TENCEL™ Lyocell 100%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "Medium iron",
          "Machine wash at 30°",
          "No dry clean",
        ],
        measurements: [
          "XS/T: Width: Top: 1.06 m\nBottom: 64 cm , Length: Top: 66 cm\nBottom: 74 cm ",
          "S/T: Width: Top: 1.14 m\nBottom: 72 cm , Length: Top: 67 cm\nBottom: 74 cm ",
          "M/T: Width: Top: 1.22 m\nBottom: 80 cm , Length: Top: 68 cm\nBottom: 74 cm ",
          "L/T: Width: Top: 1.30 m\nBottom: 88 cm , Length: Top: 69 cm\nBottom: 74 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "Pyjama set",
          sleeveLength: ["Long sleeve"],
          roomCategory: ["Bedroom"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872439/hm/home/9c21e6d08227f2e422110f04829c45298d031571.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872440/hm/home/7883266a823606b7c043e2182c1c22a340609c37.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872440/hm/home/7883266a823606b7c043e2182c1c22a340609c37.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872439/hm/home/9c21e6d08227f2e422110f04829c45298d031571.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872441/hm/home/e403b07599b6725456c249379a502c52b9bb3b69.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872442/hm/home/fb5e806bbd7f205638ccecf7c455fcb057ab058c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1331746002.html",
      },
      {
        id: "1352516001",
        productCode: "1352516_group_001",
        name: "Patterned king bed sheet set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Bed sheet set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 3499,
          regular: 3499,
          onSale: false,
          formatted: "Rs.3,499.00",
          discountPercentage: null,
        },
        color: {
          name: "White/Flowers",
          hex: "#ECE7E1",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1352516001",
            colorName: "White/Flowers",
            hex: "#ECE7E1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872442/hm/home/cfc1efd2cb65b7ccb44e0132826065a3cf0ba159.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1352516001003",
            name: "DOUBLE KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sustainable"],
        markers: [],
        description:
          "King bed sheet set in a soft cotton weave with an all-over print. The set includes one flat sheet and two matching pillowcases with an opening at the side and contrasting colour piping around the edges.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "No dry clean",
        ],
        measurements: [
          "DOUBLE KING: Width: Duvet cover: 2.75 m\nPillow cover: 70 cm, Length: Duvet cover: 2.75 m\nPillow cover: 50 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "BED SHEET SET",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872442/hm/home/cfc1efd2cb65b7ccb44e0132826065a3cf0ba159.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872443/hm/home/c5d0c578b81b34189da23ed364b86cdc7722958f.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872443/hm/home/c5d0c578b81b34189da23ed364b86cdc7722958f.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872442/hm/home/cfc1efd2cb65b7ccb44e0132826065a3cf0ba159.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872443/hm/home/56a7dc30c1fc3c83f69f55556478aa667a0c3df7.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872446/hm/home/70daa268b5a6a91cb81ad72b585849bebc5c164f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1352516001.html",
      },
      {
        id: "1100263002",
        productCode: "1100263_group_002",
        name: "Polyester-filled inner cushion",
        brand: "H&M",
        category: "home",
        subCategory: "home_textiles_cushions_innercushions",
        productType: "Inner cushion",
        productGroup: "Cushions & throws",
        price: {
          currency: "INR",
          current: 599,
          regular: 599,
          onSale: false,
          formatted: "Rs.599.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1100263002",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/06434d4480f1e0e766e1bf6c75b198bfefacda64.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1100263002008",
            name: "50x50",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Inner cushion in a cotton weave with a polyester filling.",
        compositions: ["Shell: Cotton 100%", "Padding: Polyester 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: ["50x50: Width: 50 cm, Length: 50 cm"],
        attributes: {
          productTypeName: "Inner cushion",
          roomCategory: ["Living room"],
          shapes: ["Square"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/06434d4480f1e0e766e1bf6c75b198bfefacda64.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/06434d4480f1e0e766e1bf6c75b198bfefacda64.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/06434d4480f1e0e766e1bf6c75b198bfefacda64.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/658168fe5b11d4c391b94da749db83a9a7cea2ee.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872447/hm/home/8caeb121c762c2ba2b0731d28a1101b7b5e15e51.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872447/hm/home/76e4ab216fdab693a44573ef76d991397852a282.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872447/hm/home/d4bf3e2451dc2798b4650555887591b34b6079d1.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872448/hm/home/d124126ee1daa51c6aa304cccefc4aa8196b14e3.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/b1010fa3d24ef7faa13ff3d8424f706ec289e7a8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1100263002.html",
      },
      {
        id: "0496279117",
        productCode: "0496279_group_117",
        name: "Cotton double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Burgundy",
          hex: "#512529",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "0496279117",
            colorName: "Burgundy",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
          },
          {
            articleCode: "0496279096",
            colorName: "Dark brown",
            hex: "#4F453F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
          },
          {
            articleCode: "0496279119",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
          },
          {
            articleCode: "0496279101",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          },
          {
            articleCode: "0496279082",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/4ecf8f8458681c6c9a940294b9295aa3d9342316.jpg",
          },
          {
            articleCode: "0496279116",
            colorName: "Terracotta",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/fb430ce3032baf3492ce2661bfeacf82d816d494.jpg",
          },
          {
            articleCode: "0496279115",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/520e00627e829538aa43da79f1f5a784c0c15e5b.jpg",
          },
          {
            articleCode: "0496279112",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/d700622194d00185bc1a06382502b2e3c03f7b95.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0496279117025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Double duvet cover set in fine-threaded cotton with a thread count of 144. The duvet cover features an open-bottom design for quick and easy bed-making. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          weight: "1,5 kg",
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/f0c4a2a8be35b367a3559fc661345496b9978479.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/f0c4a2a8be35b367a3559fc661345496b9978479.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/0b3ade558b1aa8b91162214a1c1ffedd4c865c00.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/4c5211b0b484bda801bf8ac437ff471af2bdde3c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0496279117.html",
      },
      {
        id: "1361695001",
        productCode: "1361695_group_001",
        name: "Pleated velvet cushion cover",
        brand: "H&M",
        category: "home",
        subCategory: "home_textiles_cushions_covers",
        productType: "Cushion cover",
        productGroup: "Cushions & throws",
        price: {
          currency: "INR",
          current: 999,
          regular: 999,
          onSale: false,
          formatted: "Rs.999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red",
          hex: "#512529",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1361695001",
            colorName: "Dark red",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/6555179c277067c81f08a0389b953be1d2c73570.jpg",
          },
          {
            articleCode: "1361695002",
            colorName: "Dark brown",
            hex: "#443630",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/2d307b227ede8e7a72df136224370b9ebbca30bd.jpg",
          },
          {
            articleCode: "1361695003",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/fb1bc4a0c4cea1343b5c3921a2f10df3cb3d26ab.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1361695001039",
            name: "48x48",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Cushion cover in soft velvet featuring a pleated border around the edges. Concealed zip at the back.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "High iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          productTypeName: "Cushion cover",
          roomCategory: ["Living room"],
          shapes: ["Square"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/6555179c277067c81f08a0389b953be1d2c73570.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/b151529bd615a03bde45ee3d162fbfbfc96c7f65.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/b151529bd615a03bde45ee3d162fbfbfc96c7f65.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/6555179c277067c81f08a0389b953be1d2c73570.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/29cd90e396966a96969578095bf30bfe9c792630.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1361695001.html",
      },
      {
        id: "1100265002",
        productCode: "1100265_group_002",
        name: "Polyester inner cushion",
        brand: "H&M",
        category: "home",
        subCategory: "home_textiles_cushions_innercushions",
        productType: "Inner cushion",
        productGroup: "Cushions & throws",
        price: {
          currency: "INR",
          current: 799,
          regular: 799,
          onSale: false,
          formatted: "Rs.799.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1100265002",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872454/hm/home/e33a927c2b21004d0424f5424f77d38be27d2c9c.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1100265002051",
            name: "40x60",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Inner cushion in a cotton weave with a polyester filling.",
        compositions: ["Shell: Cotton 100%", "Filling: Polyester 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: ["40x60: Width: 40 cm, Length: 60 cm"],
        attributes: {
          productTypeName: "Inner cushion",
          roomCategory: ["Living room"],
          shapes: ["Rectangular"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872454/hm/home/e33a927c2b21004d0424f5424f77d38be27d2c9c.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872454/hm/home/e33a927c2b21004d0424f5424f77d38be27d2c9c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872454/hm/home/e33a927c2b21004d0424f5424f77d38be27d2c9c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872453/hm/home/ecac3c3df272e0bbe03cab0481380185717212c8.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872445/hm/home/658168fe5b11d4c391b94da749db83a9a7cea2ee.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872447/hm/home/8caeb121c762c2ba2b0731d28a1101b7b5e15e51.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872454/hm/home/53b47fd173680e9600edb93db3e4f33b567e96d5.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872455/hm/home/9153f62f0fb5923ba426ae94720d7a953625db83.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872455/hm/home/4e0e48882403367ec600433bb22dccfdbfa31e6e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872455/hm/home/89107f2acb31c3a89217d142da0da6dba7e813e6.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1100265002.html",
      },
      {
        id: "0496279096",
        productCode: "0496279_group_096",
        name: "Cotton double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark brown",
          hex: "#4F453F",
          shade: "Mahogany|Rust",
        },
        colorVariants: [
          {
            articleCode: "0496279096",
            colorName: "Dark brown",
            hex: "#4F453F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
          },
          {
            articleCode: "0496279117",
            colorName: "Burgundy",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
          },
          {
            articleCode: "0496279119",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
          },
          {
            articleCode: "0496279101",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          },
          {
            articleCode: "0496279082",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/4ecf8f8458681c6c9a940294b9295aa3d9342316.jpg",
          },
          {
            articleCode: "0496279116",
            colorName: "Terracotta",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/fb430ce3032baf3492ce2661bfeacf82d816d494.jpg",
          },
          {
            articleCode: "0496279115",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/520e00627e829538aa43da79f1f5a784c0c15e5b.jpg",
          },
          {
            articleCode: "0496279112",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/d700622194d00185bc1a06382502b2e3c03f7b95.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0496279096025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Double duvet cover set in fine-threaded cotton with a thread count of 144. The duvet cover features an open-bottom design for quick and easy bed-making. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 70 cm , Length: Duvet cover: 2.20 m\nPillow cover: 50 cm ",
        ],
        attributes: {
          weight: "1,5 kg",
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872455/hm/home/11e2b2c5860cae8ac3ba658cc60edd80f5226411.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872455/hm/home/11e2b2c5860cae8ac3ba658cc60edd80f5226411.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/1d7204b2225b683f7f7944edd5cf7b06bca21705.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/55a3391622e9b2e2f120ddf28a272117a04283cc.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0496279096.html",
      },
      {
        id: "1323630006",
        productCode: "1323630_group_006",
        name: "Cotton sateen double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 4999,
          regular: 4999,
          onSale: false,
          formatted: "Rs.4,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark mole",
          hex: "#726A5D",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1323630006",
            colorName: "Dark mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/354be6be25647722f9c7d028207118aee453c5ef.jpg",
          },
          {
            articleCode: "1323630008",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872457/hm/home/399aa83a5958ed5b921513d7a2a0758d5486ee8c.jpg",
          },
          {
            articleCode: "1323630003",
            colorName: "Powder pink",
            hex: "#CDB6A9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872457/hm/home/338e658b68da8e18cd44b67ff4fe2ecb365dace3.jpg",
          },
          {
            articleCode: "1323630001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872458/hm/home/1203b06c15fc7ef6161ebca68eda56c3b1571772.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1323630006025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "premium"],
        markers: ["H&M Premium Selection"],
        description:
          "Double/king duvet cover set in soft cotton sateen with a thread count of 430, detailed with a satin-stitched frame. The set includes a duvet cover that fastens at the bottom with discreet buttons, and two matching pillowcases with an envelope opening. Sateen has a subtle sheen that adds a luxurious look and feel to your bedding.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 60°",
          "No dry clean",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 50 cm, Length: Duvet cover: 2.20 m\nPillow cover: 70 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          niceToKnow: ["H&M Premium Selection"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/354be6be25647722f9c7d028207118aee453c5ef.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872459/hm/home/9dbd188a3db40dfd1d0d04fcb97497cbfa0c0b7e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872459/hm/home/9dbd188a3db40dfd1d0d04fcb97497cbfa0c0b7e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/354be6be25647722f9c7d028207118aee453c5ef.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872456/hm/home/76f5d6497464a0ce01914a0cd93ba95247e714fc.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872457/hm/home/6201add8eedb4d931426b263a01ea1f7ea0ad171.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1323630006.html",
      },
      {
        id: "1308439004",
        productCode: "1308439_group_004",
        name: "2-pack blackout curtain lengths",
        brand: "H&M",
        category: "home",
        subCategory: "home_livingroom_curtains",
        productType: "Curtain",
        productGroup: "Curtains",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Greige",
          hex: "#8E8A89",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1308439004",
            colorName: "Greige",
            hex: "#8E8A89",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872458/hm/home/cada9e4954d2cc7306003da9fd46f155a0ad1d77.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308439004003",
            name: "140x250",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "A pair of curtain lengths made from a very dense weave that significantly reduces the light in the room but does not block it out completely. A multiway header allows for various hanging styles, making it adaptable to different rods or tracks and perfect for easily changing your curtain look. Hooks not included. Hemmed. Keep in mind that dark colours generally block out light more effectively than light colours.",
        compositions: ["Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          pieces: "2",
          productTypeName: "Curtain",
          functionality: ["Blackout"],
          roomCategory: ["Living room"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872458/hm/home/cada9e4954d2cc7306003da9fd46f155a0ad1d77.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872458/hm/home/cada9e4954d2cc7306003da9fd46f155a0ad1d77.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872458/hm/home/cada9e4954d2cc7306003da9fd46f155a0ad1d77.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872459/hm/home/617a8a1d5b9f4a7ae15f8febdced2b4598f3e4fe.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/6180a479947483f74a22bc2a7e6c4e719ce46a70.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/70f22e45ffd4ac628e24d44e9d68097d18b1ae08.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308439004.html",
      },
      {
        id: "1308304001",
        productCode: "1308304_group_001",
        name: "Fluffy cushion cover",
        brand: "H&M",
        category: "home",
        subCategory: "home_textiles_cushions_covers",
        productType: "Cushion cover",
        productGroup: "Cushions & throws",
        price: {
          currency: "INR",
          current: 1299,
          regular: 1299,
          onSale: false,
          formatted: "Rs.1,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige",
          hex: "#C9C4BA",
          shade: "Ecru|Ivory|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1308304001",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/ed17be65a9530778bea40d6a50d0cccbe193d8c6.jpg",
          },
          {
            articleCode: "1308304002",
            colorName: "Dark brown",
            hex: "#443630",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/c8696299991ac884fa421af97c0b0fa22cb068a5.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308304001008",
            name: "50x50",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description: "Fluffy cushion cover with a hidden zip on the back.",
        compositions: ["Front: Polyester 100%", "Back: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry low",
          "No iron",
          "Machine wash at 30°",
          "Can be dry cleaned",
        ],
        measurements: ["50x50: Width: 50 cm, Length: 50 cm"],
        attributes: {
          productTypeName: "Cushion cover",
          roomCategory: ["Living room"],
          shapes: ["Square"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/ed17be65a9530778bea40d6a50d0cccbe193d8c6.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/ed17be65a9530778bea40d6a50d0cccbe193d8c6.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/ed17be65a9530778bea40d6a50d0cccbe193d8c6.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/4cb9a3e1207bafbef17cdd87f541d7e866f81c30.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872460/hm/home/f1368a1afea9307612bed466cb2b4586b8555494.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308304001.html",
      },
      {
        id: "0888322040",
        productCode: "0888322_group_040",
        name: "Muslin double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 4999,
          regular: 4999,
          onSale: false,
          formatted: "Rs.4,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige",
          hex: "#C9C4BA",
          shade: "Ecru|Ivory|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "0888322040",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/d942f8a336a7676abe21bc17bcc5e6a4765937b1.jpg",
          },
          {
            articleCode: "0888322058",
            colorName: "Light greige",
            hex: "#B7B2AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/769861b55f494677d5faa0d373b4aafe30070747.jpg",
          },
          {
            articleCode: "0888322062",
            colorName: "Dusty pink",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
          },
          {
            articleCode: "0888322064",
            colorName: "Dusty blue",
            hex: "#767F8F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e3dae800c9e243c9a468729aea1cf98cc156b6ea.jpg",
          },
          {
            articleCode: "0888322036",
            colorName: "Anthracite grey",
            hex: "#4C4D50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/c61cf2c660473c62e3fe07e1b1b853ec638b87d5.jpg",
          },
          {
            articleCode: "0888322061",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/99ae086d6bc5a91b9bf1dbdc0f3332b21493453d.jpg",
          },
          {
            articleCode: "0888322063",
            colorName: "Green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/74b93fe0df34fc1e92492348047ce11bed8af33e.jpg",
          },
          {
            articleCode: "0888322066",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e8287d1bedb0e26554e9cc9919182c327fc7fab4.jpg",
          },
          {
            articleCode: "0888322053",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/8b90f80ceb6bef1baea1641917a079f5d3d26346.jpg",
          },
          {
            articleCode: "0888322060",
            colorName: "Dark beige",
            hex: "#8F6C4B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/b7befcec558f0249f14ec4e6a7a5b7e299fc39ac.jpg",
          },
          {
            articleCode: "0888322001",
            colorName: "White",
            hex: "#ECEBE9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/7d449b5314440e94de0f74b83d744a37f957e76f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0888322040025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Double duvet cover set in soft cotton muslin with a thread count of 250 that is cool and comfortable to sleep in. The duvet cover fastens at the bottom with concealed metal press-studs. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 70 cm, Length: Duvet cover: 2.20 m\nPillow cover: 50 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/d942f8a336a7676abe21bc17bcc5e6a4765937b1.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/c7d05e54d5d6bc2a34a1c7b5b4d4323c40fd9ec0.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/c7d05e54d5d6bc2a34a1c7b5b4d4323c40fd9ec0.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/d942f8a336a7676abe21bc17bcc5e6a4765937b1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/0511fc2c2a7701f98602c7b37c283e6ea1c62f70.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/8336e00108668b0470f35dc0c6899b93665a3ebd.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/1a8763e646f77d2bf2d7da7a447c34e12070b175.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0888322040.html",
      },
      {
        id: "0496279119",
        productCode: "0496279_group_119",
        name: "Cotton double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark green",
          hex: "#3C4434",
          shade: "Dark green|Khaki green",
        },
        colorVariants: [
          {
            articleCode: "0496279119",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
          },
          {
            articleCode: "0496279117",
            colorName: "Burgundy",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
          },
          {
            articleCode: "0496279096",
            colorName: "Dark brown",
            hex: "#4F453F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
          },
          {
            articleCode: "0496279101",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          },
          {
            articleCode: "0496279082",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/4ecf8f8458681c6c9a940294b9295aa3d9342316.jpg",
          },
          {
            articleCode: "0496279116",
            colorName: "Terracotta",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/fb430ce3032baf3492ce2661bfeacf82d816d494.jpg",
          },
          {
            articleCode: "0496279115",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/520e00627e829538aa43da79f1f5a784c0c15e5b.jpg",
          },
          {
            articleCode: "0496279112",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/d700622194d00185bc1a06382502b2e3c03f7b95.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0496279119025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Double duvet cover set in fine-threaded cotton with a thread count of 144. The duvet cover features an open-bottom design for quick and easy bed-making. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          weight: "1,5 kg",
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872466/hm/home/9958bdb3948bc708ad232e574346c432037902bb.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872466/hm/home/9958bdb3948bc708ad232e574346c432037902bb.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/0778978d19f064dd85dff48d21a75d730f02018c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/9d2ce85f970b4b2b85d2d82696a86f394ef41788.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0496279119.html",
      },
      {
        id: "1305092002",
        productCode: "1305092_group_002",
        name: "Egyptian cotton double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 7999,
          regular: 7999,
          onSale: false,
          formatted: "Rs.7,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light beige",
          hex: "#C9C4BA",
          shade: "Ecru|Ivory|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1305092002",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/6fcc17b2c220a15a59d7a6f31d85987236ac1035.jpg",
          },
          {
            articleCode: "1305092004",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872467/hm/home/4276c0315b8b3b0048cd1fdd125e7e5a39a4c553.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1305092002025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["premium"],
        markers: ["H&M Premium Selection"],
        description:
          "Double/king duvet cover set in fine-threaded, closely woven Egyptian cotton satin with a thread count of 350. Detailed with tone-on-tone ladder lace trims. The duvet cover fastens at the bottom with concealed buttons. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 70 cm, Length: Duvet cover: 2.20 m\nPillow cover: 50 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          niceToKnow: ["H&M Premium Selection"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/6fcc17b2c220a15a59d7a6f31d85987236ac1035.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872467/hm/home/4975f34dbf476b661ff4961434c1149c1c0b39a1.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872467/hm/home/4975f34dbf476b661ff4961434c1149c1c0b39a1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/6fcc17b2c220a15a59d7a6f31d85987236ac1035.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872467/hm/home/96eb8b595a827d947c60a73a14f4f66fa15632cb.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872467/hm/home/f94572c963ce38bae59921f543100b09e60fb139.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1305092002.html",
      },
      {
        id: "1338069003",
        productCode: "1338069_group_003",
        name: "Patterned double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2999,
          regular: 2999,
          onSale: false,
          formatted: "Rs.2,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark green/Patterned",
          hex: "#3C4434",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1338069003",
            colorName: "Dark green/Patterned",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/f10755b662e4c60f389ccd72bd8603dd43ae5468.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338069003025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Duvet cover set in a soft cotton weave with an all-over pattern. The set includes one duvet cover with concealed buttons at the bottom, and two matching pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "No dry clean",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 70 cm, Length: Duvet cover: 2.20 m\nPillow cover: 50 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/f10755b662e4c60f389ccd72bd8603dd43ae5468.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/f10755b662e4c60f389ccd72bd8603dd43ae5468.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/f10755b662e4c60f389ccd72bd8603dd43ae5468.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/a39850a34a74e265d70ce2f0c31b93256375ea76.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872469/hm/home/c08ea2601e62a62ac82d9dfe2daabe8af76be569.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338069003.html",
      },
      {
        id: "0888322058",
        productCode: "0888322_group_058",
        name: "Muslin double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 4999,
          regular: 4999,
          onSale: false,
          formatted: "Rs.4,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Light greige",
          hex: "#B7B2AC",
          shade: "Ecru|Stone",
        },
        colorVariants: [
          {
            articleCode: "0888322058",
            colorName: "Light greige",
            hex: "#B7B2AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/769861b55f494677d5faa0d373b4aafe30070747.jpg",
          },
          {
            articleCode: "0888322040",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/d942f8a336a7676abe21bc17bcc5e6a4765937b1.jpg",
          },
          {
            articleCode: "0888322062",
            colorName: "Dusty pink",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
          },
          {
            articleCode: "0888322064",
            colorName: "Dusty blue",
            hex: "#767F8F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e3dae800c9e243c9a468729aea1cf98cc156b6ea.jpg",
          },
          {
            articleCode: "0888322036",
            colorName: "Anthracite grey",
            hex: "#4C4D50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/c61cf2c660473c62e3fe07e1b1b853ec638b87d5.jpg",
          },
          {
            articleCode: "0888322061",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/99ae086d6bc5a91b9bf1dbdc0f3332b21493453d.jpg",
          },
          {
            articleCode: "0888322063",
            colorName: "Green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/74b93fe0df34fc1e92492348047ce11bed8af33e.jpg",
          },
          {
            articleCode: "0888322066",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e8287d1bedb0e26554e9cc9919182c327fc7fab4.jpg",
          },
          {
            articleCode: "0888322053",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/8b90f80ceb6bef1baea1641917a079f5d3d26346.jpg",
          },
          {
            articleCode: "0888322060",
            colorName: "Dark beige",
            hex: "#8F6C4B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/b7befcec558f0249f14ec4e6a7a5b7e299fc39ac.jpg",
          },
          {
            articleCode: "0888322001",
            colorName: "White",
            hex: "#ECEBE9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/7d449b5314440e94de0f74b83d744a37f957e76f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0888322058025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Double duvet cover set in soft cotton muslin with a thread count of 250 that is cool and comfortable to sleep in. The duvet cover fastens at the bottom with concealed metal press-studs. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: null,
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/769861b55f494677d5faa0d373b4aafe30070747.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/9220f71138f0656bd97c3ea45a1b24e6b63e2f57.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872468/hm/home/9220f71138f0656bd97c3ea45a1b24e6b63e2f57.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/769861b55f494677d5faa0d373b4aafe30070747.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872470/hm/home/5dd15c3e7002077a65ce1c7814023db187cadb81.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872469/hm/home/7aaa0cebd5a10475eef3dd7e54e1272e32915689.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0888322058.html",
      },
      {
        id: "1072162001",
        productCode: "1072162_group_001",
        name: "1-pack long and wide curtain length",
        brand: "H&M",
        category: "home",
        subCategory: "home_livingroom_curtains",
        productType: "Curtain",
        productGroup: "Curtains",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "White",
          hex: "#FFFFFF",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1072162001",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872469/hm/home/5a22e99466a17f6e069d084e1475b8333664724e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1072162001076",
            name: "300x300",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Extra-wide curtain length in voile made from a cotton and polyester blend. A multiway header on curtains allows for various hanging styles, making it adaptable to different rods or tracks and perfect for easily changing your curtain look. These curtains allow some light into the room while still providing privacy. Hooks not included. Hemmed.",
        compositions: ["Cotton 50%, Polyester 50%"],
        materials: [
          {
            name: "Cotton",
            amount: "50%",
          },
          {
            name: "Polyester",
            amount: "50%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Wash with similar colours",
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "Medium iron",
          "Machine wash at 40°",
          "Can be dry cleaned",
        ],
        measurements: ["300x300: Width: 3.00 m, Length: 3.00 m"],
        attributes: {
          productTypeName: "Curtain",
          roomCategory: ["Living room"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872469/hm/home/5a22e99466a17f6e069d084e1475b8333664724e.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872470/hm/home/5196fcd5241521b9422715987eea0f2a2225a226.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872470/hm/home/5196fcd5241521b9422715987eea0f2a2225a226.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872469/hm/home/5a22e99466a17f6e069d084e1475b8333664724e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872470/hm/home/ebd819cba88fa048f70635f6711f1f8a467ab7b2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872471/hm/home/b46056389c5c84aaeda0a3999cfa786201c23f1d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872471/hm/home/fd45006425eb3898bad332977fec8f9c0ccefb86.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872471/hm/home/6bd37d62850e75ad6809efab0a9900c0819c8f24.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872472/hm/home/b42fb6e36ba4813f949f9b266e1c8ab3ba5e0289.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872472/hm/home/057e87b0363a6b4487af51e638f0f2ef896fc9be.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872472/hm/home/62f422f76b70f1b70d75223b72cbbf1b1ef27663.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872472/hm/home/2e8eacf1bfb70837738b6357fe2c3a96fc6d9fe8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872473/hm/home/ed39bc056f4c2865c9c2e9a417f47c8ae93e6cc2.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1072162001.html",
      },
      {
        id: "0888322062",
        productCode: "0888322_group_062",
        name: "Muslin double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 4999,
          regular: 4999,
          onSale: false,
          formatted: "Rs.4,999.00",
          discountPercentage: null,
        },
        color: {
          name: "Dusty pink",
          hex: "#9F7967",
          shade: "Terracotta",
        },
        colorVariants: [
          {
            articleCode: "0888322062",
            colorName: "Dusty pink",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
          },
          {
            articleCode: "0888322040",
            colorName: "Light beige",
            hex: "#C9C4BA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872461/hm/home/d942f8a336a7676abe21bc17bcc5e6a4765937b1.jpg",
          },
          {
            articleCode: "0888322058",
            colorName: "Light greige",
            hex: "#B7B2AC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872462/hm/home/769861b55f494677d5faa0d373b4aafe30070747.jpg",
          },
          {
            articleCode: "0888322064",
            colorName: "Dusty blue",
            hex: "#767F8F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e3dae800c9e243c9a468729aea1cf98cc156b6ea.jpg",
          },
          {
            articleCode: "0888322036",
            colorName: "Anthracite grey",
            hex: "#4C4D50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/c61cf2c660473c62e3fe07e1b1b853ec638b87d5.jpg",
          },
          {
            articleCode: "0888322061",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/99ae086d6bc5a91b9bf1dbdc0f3332b21493453d.jpg",
          },
          {
            articleCode: "0888322063",
            colorName: "Green",
            hex: "#686E59",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/74b93fe0df34fc1e92492348047ce11bed8af33e.jpg",
          },
          {
            articleCode: "0888322066",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/e8287d1bedb0e26554e9cc9919182c327fc7fab4.jpg",
          },
          {
            articleCode: "0888322053",
            colorName: "Dark brown",
            hex: "#3B312B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/8b90f80ceb6bef1baea1641917a079f5d3d26346.jpg",
          },
          {
            articleCode: "0888322060",
            colorName: "Dark beige",
            hex: "#8F6C4B",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872464/hm/home/b7befcec558f0249f14ec4e6a7a5b7e299fc39ac.jpg",
          },
          {
            articleCode: "0888322001",
            colorName: "White",
            hex: "#ECEBE9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872465/hm/home/7d449b5314440e94de0f74b83d744a37f957e76f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0888322062025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Double duvet cover set in soft cotton muslin with a thread count of 250 that is cool and comfortable to sleep in. The duvet cover fastens at the bottom with concealed metal press-studs. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet cover: 2.40 m\nPillow cover: 70 cm, Length: Duvet cover: 2.20 m\nPillow cover: 50 cm",
        ],
        attributes: {
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872463/hm/home/07b83ccba891ffd1b2db36550c8191d4ad5231e2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872473/hm/home/e4201620462949a25686e436a591105ee4c1d286.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872474/hm/home/1341003cc96630a14cfeed96c418912b84f76878.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0888322062.html",
      },
      {
        id: "0496279101",
        productCode: "0496279_group_101",
        name: "Cotton double/king duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Light khaki green",
          hex: "#999C85",
          shade: "Khaki green",
        },
        colorVariants: [
          {
            articleCode: "0496279101",
            colorName: "Light khaki green",
            hex: "#999C85",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          },
          {
            articleCode: "0496279117",
            colorName: "Burgundy",
            hex: "#512529",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872449/hm/home/bc7475c8b4135a64d500d72f5cd28c0aec4acf99.jpg",
          },
          {
            articleCode: "0496279096",
            colorName: "Dark brown",
            hex: "#4F453F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/3e2abdcc3c2ca305722e4c22d8e40e5515d2ff83.jpg",
          },
          {
            articleCode: "0496279119",
            colorName: "Dark green",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/b0a3ad64d5dd41c181a3559d7a42a24a6e4f3d38.jpg",
          },
          {
            articleCode: "0496279082",
            colorName: "White",
            hex: "#FFFFFF",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/4ecf8f8458681c6c9a940294b9295aa3d9342316.jpg",
          },
          {
            articleCode: "0496279116",
            colorName: "Terracotta",
            hex: "#9F7967",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/fb430ce3032baf3492ce2661bfeacf82d816d494.jpg",
          },
          {
            articleCode: "0496279115",
            colorName: "Mole",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872451/hm/home/520e00627e829538aa43da79f1f5a784c0c15e5b.jpg",
          },
          {
            articleCode: "0496279112",
            colorName: "Dusty yellow",
            hex: "#B0A27A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872452/hm/home/d700622194d00185bc1a06382502b2e3c03f7b95.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0496279101025",
            name: "KING",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sustainable"],
        markers: [],
        description:
          "Double duvet cover set in fine-threaded cotton with a thread count of 144. The duvet cover features an open-bottom design for quick and easy bed-making. Two pillowcases with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: ["Recycled cotton 20%"],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "KING: Width: Duvet Cover: 2.40 m\nPillow Cover:70 cm , Length: Duvet Cover:2.20 m\nPillow Cover:50 cm ",
        ],
        attributes: {
          weight: "1,5 kg",
          pieces: "3",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872450/hm/home/5d23eda5a659dbc74d9f8c03a5f8d8bd209b2ec9.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872473/hm/home/b60f252ccc907d3e3e611aebb781da9f3801e861.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/home/0b35ab30ec381207622f2adeb8db7b172dbd295a.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0496279101.html",
      },
      {
        id: "0655210015",
        productCode: "0655210_group_015",
        name: "Flannel single duvet cover set",
        brand: "H&M",
        category: "home",
        subCategory: "home_bedlinen_duvetscoversets",
        productType: "Duvet cover set",
        productGroup: "Bedding",
        price: {
          currency: "INR",
          current: 2799,
          regular: 2799,
          onSale: false,
          formatted: "Rs.2,799.00",
          discountPercentage: null,
        },
        color: {
          name: "Dark red/Checked",
          hex: "#702B33",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "0655210015",
            colorName: "Dark red/Checked",
            hex: "#702B33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872474/hm/home/9371e4488a8210e64bf788f19c37ef5593d60251.jpg",
          },
          {
            articleCode: "0655210014",
            colorName: "Mole/Grid pattern",
            hex: "#726A5D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872475/hm/home/5feb468def733e305d06567d2003ac543a093d8c.jpg",
          },
          {
            articleCode: "0655210016",
            colorName: "Dark green/Checked",
            hex: "#3C4434",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872476/hm/home/9a643d3d4a2608bb2bc290acdf68090cc0850e81.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0655210015008",
            name: "Single",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Single duvet cover set in soft, patterned cotton flannel. The duvet cover fastens at the bottom with metal press-studs. One pillowcase with an envelope opening.",
        compositions: ["Cotton 100%"],
        materials: [
          {
            name: "Cotton",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry medium",
          "High iron",
          "Machine wash at 60°",
          "Can be dry cleaned",
        ],
        measurements: [
          "Single: Width: Duvet cover:1.50 m\nPillow cover:70 cm , Length: Duvet cover:2 m\nPillow cover:50 cm ",
        ],
        attributes: {
          pieces: "2",
          productTypeName: "Duvet cover set",
          roomCategory: ["Bedroom"],
          countryOfProduction: "Bangladesh",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872474/hm/home/9371e4488a8210e64bf788f19c37ef5593d60251.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872475/hm/home/305054c8a3e782c540e9efe5578e2f691e4bdb61.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872475/hm/home/305054c8a3e782c540e9efe5578e2f691e4bdb61.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872474/hm/home/9371e4488a8210e64bf788f19c37ef5593d60251.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872476/hm/home/e0516ee6263025d8a7e710995c0f966dfef96418.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872476/hm/home/a00559c8915c39d1ba1c56ee69f36f5187c18a72.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872476/hm/home/8624b0a72e85650e61363ffa66e442d8002752ec.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0655210015.html",
      },
      {
        id: "0997809081",
        productCode: "0997809_group_081",
        name: "Soft toy",
        brand: "H&M",
        category: "home",
        subCategory: "home_kidsbaby_toys",
        productType: "Soft toy",
        productGroup: "Toys",
        price: {
          currency: "INR",
          current: 499,
          regular: 499,
          onSale: false,
          formatted: "Rs.499.00",
          discountPercentage: null,
        },
        color: {
          name: "Light green/Dinosaur",
          hex: "#8E906C",
          shade: "Bright green|Khaki green|Lime|Olive",
        },
        colorVariants: [
          {
            articleCode: "0997809081",
            colorName: "Light green/Dinosaur",
            hex: "#8E906C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/f2d10f035f892c1877e14db52a63fa7763acf074.jpg",
          },
          {
            articleCode: "0997809099",
            colorName: "Light grey/Elephant",
            hex: "#BCBDBE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/a02f718ccf5312cd0481a2219f015772f83035fe.jpg",
          },
          {
            articleCode: "0997809082",
            colorName: "Brown/Squirrel",
            hex: "#8C7256",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/8588837ac9ddd857e4ab097b19c81052e0603592.jpg",
          },
          {
            articleCode: "0997809079",
            colorName: "Light beige/Alpaca",
            hex: "#C5B9AB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/3c0344a5d6120a9126cd120c1fa62c4027c6e1aa.jpg",
          },
          {
            articleCode: "0997809084",
            colorName: "Brown/Monkey",
            hex: "#594B3D",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872422/hm/home/90f8df68795eb97261b6655fc200f0021fe93108.jpg",
          },
          {
            articleCode: "0997809083",
            colorName: "Light beige/Giraffe",
            hex: "#C5B9AB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872425/hm/home/3025415e500f2c35b236ee783763cab5327fde8b.jpg",
          },
          {
            articleCode: "0997809100",
            colorName: "Black/Bird",
            hex: "#353334",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872424/hm/home/10a1d935bf47e833cfe321b0aaa83d0ddb49e325.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "0997809081001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: [],
        markers: [],
        description:
          "Soft toy with embroidered details and appliqués. The soft toys vary in size, measuring approximately 15–22 cm in length depending on the model.",
        compositions: ["Shell: Polyester 100%", "Padding: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Tumble dry low",
          "No iron",
          "Machine wash at 40°",
          "No dry clean",
        ],
        measurements: ["Width: 9 cm", "Length: 15 cm", "Height: 20 cm"],
        attributes: {
          weight: "85 g",
          productTypeName: "Soft toy",
          roomCategory: ["Kids room"],
          recommendedAge: "0+",
          countryOfProduction: "India",
          marketedBy:
            "Marketed by: H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/f2d10f035f892c1877e14db52a63fa7763acf074.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/f2d10f035f892c1877e14db52a63fa7763acf074.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872423/hm/home/f2d10f035f892c1877e14db52a63fa7763acf074.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872477/hm/home/ee3a3c297b325d54a4105d2d99b6c4a1ac7b7896.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872477/hm/home/85dac6ce16c1392a0d993b3e1ec3b4438ca82307.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.0997809081.html",
      },
    ],
  },
  {
    category: "beauty",
    count: 30,
    products: [
      {
        id: "1339638001",
        productCode: "1339638_group_001",
        name: "Silver Moon EdP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1299,
          regular: 1299,
          onSale: false,
          formatted: "Rs.1,299.00",
          discountPercentage: null,
        },
        color: {
          name: "Silver Moon",
          hex: "#ABAAAA",
          shade: "Grey silver",
        },
        colorVariants: [
          {
            articleCode: "1339638001",
            colorName: "Silver Moon",
            hex: "#ABAAAA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/beauty/be6c957e04a27cee68acb1667b08d3ece60712aa.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1339638001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "A radiant floral scent inspired by the anticipation of autumn evenings and the allure of a mysterious moonlit night. Fresh mandarin and violet leaf meet a delicate moonlight dust accord, unfolding into a bouquet of orange blossom, tuberose and lady of the night. The fragrance reveals notes of vanilla, musk and sandalwood, creating a soft and elegant finish. Top notes: mandarin, moonlight dust accord, violet leaf. Mid notes: orange blossom, tuberose, lady of the night. Base notes: vanilla, musk, sandalwood. Vegan. 50 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          fragranceFamily: ["Fruity"],
          applicationType: ["Liquid", "Spray              "],
          volume: "50 ml",
          ingredients:
            "Alcohol Denat., Parfum, Aqua, Linalool, Vanillin, Linalyl Acetate, Tetramethyl Acetyloctahydronaphthalenes, Acetyl Cedrene, Benzyl Salicylate, Dimethyl Phenethyl Acetate, Limonene, Citronellol, Geraniol, Citrus Aurantium Peel Oil, Amyl Cinnamal, Hydroxycitronellal, Coumarin, Geranyl Acetate, Alpha-Isomethyl Ionone, Isoeugenyl Acetate, Pelargonium Graveolens Flower Oil, Citrus Limon Peel Oil, Rose Ketones, Farnesol, Pinene, Citral, Eugenol, Cinnamyl Alcohol, Citrus Aurantium Flower Oil, Amylcinnamyl Alcohol, Benzyl Alcohol, Benzyl Benzoate",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/beauty/be6c957e04a27cee68acb1667b08d3ece60712aa.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/beauty/be6c957e04a27cee68acb1667b08d3ece60712aa.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/beauty/be6c957e04a27cee68acb1667b08d3ece60712aa.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872478/hm/beauty/3342c21b687abeb5c6a93f48dc5e12a1086c5500.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1339638001.html",
      },
      {
        id: "1364511001",
        productCode: "1364511_group_001",
        name: "Midtown Pulse EdP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1529.15,
          regular: 1799,
          onSale: true,
          formatted: "Rs.1,529.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Midtown Pulse",
          hex: "#35443C",
          shade: "Emerald green|Dark green",
        },
        colorVariants: [
          {
            articleCode: "1364511001",
            colorName: "Midtown Pulse",
            hex: "#35443C",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/8809980705700202552ee9691320f2571464048f.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1364511001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "A vibrant scent that captures the energy of city life and spontaneous adventures beyond it. Bright citrus and crisp fruits give way to aromatic lavender and smooth woods, creating an effortless signature that feels confident, dynamic and easy to wear from day to night. Top notes: bergamot, pineapple, baies roses, cardamom. Mid notes: lavender, geranium, apple, orange blossom. Base notes: sandalwood, tonka bean, vanilla, ambroxan. Vegan. 100 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 100.0000 ml",
        ],
        attributes: {
          fragranceFamily: ["Fougère"],
          applicationType: ["Liquid", "Spray              "],
          volume: "100 ml",
          ingredients:
            "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Tetramethyl Acetyloctahydronaphthalenes, Linalyl Acetate, Linalool, Limonene, Citrus Limon Peel Oil, Citronellol, Hexyl Cinnamal, Coumarin, Citrus Aurantium Peel Oil, Lavandula Oil/ Extract, Alpha-Isomethyl Ionone, Pinene, Pelargonium Graveolens Flower Oil, Citral, Beta-Caryophyllene, Vanillin, Terpineol, Geraniol, Camphor, Terpinolene, Mentha Piperita Oil, Rose Ketones, Geranyl Acetate, Cinnamomum Zeylanicum Bark Oil, Menthol, Cinnamal, Citrus Aurantium Flower Oil, Isoeugenol, Alpha-Terpinene, Hydroxycitronellal.\n\nAlcohol Denat., Parfum, Aqua, Tetramethyl Acetyloctahydronaphthalenes, Linalyl Acetate, Linalool, Limonene, Citrus Limon Peel Oil, Citronellol, Hexyl Cinnamal, Coumarin, Citrus Aurantium Peel Oil, Lavandula Oil/ Extract, Alpha-Isomethyl Ionone, Pinene, Pelargonium Graveolens Flower Oil, Citral, Beta-Caryophyllene, Vanillin, Terpineol, Geraniol, Camphor, Terpinolene, Mentha Piperita Oil, Rose Ketones, Geranyl Acetate, Cinnamomum Zeylanicum Bark Oil, Menthol, Cinnamal, Citrus Aurantium Flower Oil, Isoeugenol, Alpha-Terpinene, Hydroxycitronellal.",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/8809980705700202552ee9691320f2571464048f.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/a180dacb7c707da410f51b24cee54011ab4a1d1f.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/a180dacb7c707da410f51b24cee54011ab4a1d1f.jpg",
              type: "ENVIRONMENT",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/8809980705700202552ee9691320f2571464048f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/e234818477fa157dac30534f0a02eda9a88864e6.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1364511001.html",
      },
      {
        id: "1357943001",
        productCode: "1357943_group_001",
        name: "Premiere Night EdP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1529.15,
          regular: 1799,
          onSale: true,
          formatted: "Rs.1,529.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Premiere Night",
          hex: "#2E2E30",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1357943001",
            colorName: "Premiere Night",
            hex: "#2E2E30",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/91c030e68b82b5aeebd3dd515f2061c54d6f1011.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1357943001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "An elegant scent inspired by classic style and quiet confidence. Fresh citrus and spices unfold into warm amber and refined florals, settling into a rich blend of patchouli, musk and moss. Sophisticated yet comforting, it's made for those who appreciate tradition, character and lasting impressions. Top notes: basil, lemon, orange, nutmeg, black pepper. Mid notes: rose absolute, dry amber, cistus, geranium. Base notes: patchouli, musk, Kashmir Fusion, moss. Vegan. 100 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 100.0000 ml",
        ],
        attributes: {
          fragranceFamily: ["Fougère"],
          applicationType: ["Liquid", "Spray              "],
          volume: "100 ml",
          ingredients:
            "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Tetramethyl Acetyloctahydronaphthalenes, Limonene, Linalyl Acetate, Linalool, Hexamethylindanopyran, Citrus Aurantium Peel Oil, Citrus Limon Peel Oil, Coumarin, Pogostemon Cablin Oil, Citronellol, Pinene, Beta-Caryophyllene, Amyl Salicylate, Lavandula Oil/ Extract, Terpineol, Citral, Geranyl Acetate, Geraniol, Terpinolene, Acetyl Cedrene, Vanillin, Alpha-Terpinene, Rose Ketones, Pelargonium Graveolens Flower Oil.\n\nAlcohol Denat., Parfum, Aqua, Tetramethyl Acetyloctahydronaphthalenes, Limonene, Linalyl Acetate, Linalool, Hexamethylindanopyran, Citrus Aurantium Peel Oil, Citrus Limon Peel Oil, Coumarin, Pogostemon Cablin Oil, Citronellol, Pinene, Beta-Caryophyllene, Amyl Salicylate, Lavandula Oil/ Extract, Terpineol, Citral, Geranyl Acetate, Geraniol, Terpinolene, Acetyl Cedrene, Vanillin, Alpha-Terpinene, Rose Ketones, Pelargonium Graveolens Flower Oil",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/91c030e68b82b5aeebd3dd515f2061c54d6f1011.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872480/hm/beauty/665d7f8b20fd7e5f5749f5753fc4416e968a5d47.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872480/hm/beauty/665d7f8b20fd7e5f5749f5753fc4416e968a5d47.jpg",
              type: "ENVIRONMENT",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872479/hm/beauty/91c030e68b82b5aeebd3dd515f2061c54d6f1011.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872480/hm/beauty/c30a6d9834cd91b2c8fc94756eaf091505dc887f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1357943001.html",
      },
      {
        id: "1338967001",
        productCode: "1338967_group_001",
        name: "Blush & Glow Duo palette",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_face_blushers",
        productType: "Make-up palette",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 899,
          regular: 899,
          onSale: false,
          formatted: "Rs.899.00",
          discountPercentage: null,
        },
        color: {
          name: "Soft Sunset",
          hex: "#F67783",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1338967001",
            colorName: "Soft Sunset",
            hex: "#F67783",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e96cbacab617abf213b12f7d98d1bd70d0071581.jpg",
          },
          {
            articleCode: "1338967002",
            colorName: "Spiced Glow",
            hex: "#BC0A28",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/e7d677cf3236220a0406956268ca2074b72d13fb.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338967001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Blush and highlighter duo designed to bring colour and light to your complexion in one easy step. The silky powders blend seamlessly into the skin, delivering buildable colour, a soft, radiant glow and a fresh, lit-from-within finish. Vegan. 9.0 g.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 0.0000 g",
        ],
        attributes: {
          applicationType: ["Cream", "Cream-to-powder  ", "Pressed powder"],
          weight: "9 g",
          ingredients:
            "1: Phenyl Trimethicone, Octyldodecanol, Polyethylene, Caprylyl Methicone, Isopropyl Myristate, Ricinus Communis Seed Oil, Ethylhexyl Palmitate, Polybutene, Aluminum Starch Octenylsuccinate, Ozokerite, Stearic Acid, Polymethylsilsesquioxane, Methyl Methacrylate Crosspolymer, Silica, Cetyl Alcohol, Butyrospermum Parkii Butter, Synthetic Beeswax, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Trihydroxystearin, Sodium Hyaluronate, Glucomannan, Ci 77891, Ci 15850, Ci 19140, Mica, Ci 77499, Ci 77491, Ci 77492 / 2: Mica, Zinc Stearate, Isostearyl Neopentanoate, Pentaerythrityl Tetraisostearate, Polybutene, Isopropyl Isostearate, Dimethicone, Octyldodecyl Stearoyl Stearate, Phenoxyethanol, Ethylhexylglycerin, Ci 77891, Ci 77491",
          beautyArea: ["Face"],
          productTypeName: "Make-up palette",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "10/C/UA/2021",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e96cbacab617abf213b12f7d98d1bd70d0071581.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e96cbacab617abf213b12f7d98d1bd70d0071581.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e96cbacab617abf213b12f7d98d1bd70d0071581.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/9302b8da317543900bbb82a001014da944f4e098.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/dd598868a304be18553988815074d13956e61168.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e7b007f7aea61d500fe48c1c8c6e9857df700c9d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338967001.html",
      },
      {
        id: "1351745001",
        productCode: "1351745_group_001",
        name: "Boxy wash bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1954.15,
          regular: 2299,
          onSale: true,
          formatted: "Rs.1,954.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Brown",
          hex: "#52453E",
          shade: "Rust|Mahogany",
        },
        colorVariants: [
          {
            articleCode: "1351745001",
            colorName: "Brown",
            hex: "#52453E",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/0c7040c1808f45e4e3cc539a077a5b0dcde07459.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1351745001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sale"],
        markers: [],
        description:
          "Boxy wash bag in coated fabric with a textured pattern. Designed with a two-way zip and a top handle for easy carrying. Includes a removable insert divided into four sections to keep your items neatly organised.",
        compositions: [
          "Shell: Polyester 100%",
          "Lining: Polyester 100%",
          "Coating: Polyurethane 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: ["Height: 11 cm", "Width: 24 cm", "Depth: 18 cm"],
        attributes: {
          productTypeName: "Toiletry bag",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/0c7040c1808f45e4e3cc539a077a5b0dcde07459.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/0c7040c1808f45e4e3cc539a077a5b0dcde07459.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/0c7040c1808f45e4e3cc539a077a5b0dcde07459.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/f5c8f893f479ca29636cb7630ea906bd09c461c0.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/2a426ee66e1861975fed782ba98f06ab9101e2de.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/b404404447392e4429178975ddc79d0557fac457.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1351745001.html",
      },
      {
        id: "1340826001",
        productCode: "1340826_group_001",
        name: "Hopeful Romantic EdT",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudetoilette",
        productType: "Eau de toilette",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 679.15,
          regular: 799,
          onSale: true,
          formatted: "Rs.679.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Hopeful Romantic",
          hex: "#F9CFE0",
          shade: "Rose|Dusty pink|Baby pink",
        },
        colorVariants: [
          {
            articleCode: "1340826001",
            colorName: "Hopeful Romantic",
            hex: "#F9CFE0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/be0baeb03dec472e8ad3d43a2d6b89a6811fd49e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1340826001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Fruits, white flowers, amber – a heartfelt scent featuring bouquets of white flowers. Top notes: Pear, bergamot. Mid notes: Tuberose, orange blossom, fruity jasmine. Base notes: Patchouli, vanilla, amber. 30 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 30.0000 ml",
        ],
        attributes: {
          fragranceFamily: ["Floral"],
          applicationType: ["Liquid", "Spray              "],
          volume: "30 ml",
          ingredients:
            "Alcohol Denat., Aqua, Parfum, Tetramethyl Acetyloctahydronaphthalenes, Linalyl Acetate, Limonene, Linalool, Acetyl Cedrene, Benzyl Salicylate, Citrus Aurantium Peel Oil, Geraniol, Citronellol, Geranyl Acetate, Pinene, Terpinolene, Isoeugenyl Acetate, Alpha-Isomethyl Ionone, Alpha-Terpinene, Eugenol, Citral, Beta-Caryophyllene, Anethole, Carvone, Benzaldehyde, Rose Ketones, Terpineol, Ci 17200, Ci 42090",
          beautyArea: ["Body"],
          productTypeName: "Eau de Toilette - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/be0baeb03dec472e8ad3d43a2d6b89a6811fd49e.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/be0baeb03dec472e8ad3d43a2d6b89a6811fd49e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/be0baeb03dec472e8ad3d43a2d6b89a6811fd49e.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1340826001.html",
      },
      {
        id: "1324041007",
        productCode: "1324041_group_007",
        name: "Nail polish",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_nails_nailpolish",
        productType: "Nail polish",
        productGroup: "Nails",
        price: {
          currency: "INR",
          current: 254.15,
          regular: 299,
          onSale: true,
          formatted: "Rs.254.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Chalky Pink",
          hex: "#d597a2",
          shade: "Baby pink|Dusty pink|Rose",
        },
        colorVariants: [
          {
            articleCode: "1324041007",
            colorName: "Chalky Pink",
            hex: "#d597a2",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/34c558354c9eff7b0d06f73b970a71d0e4e8470c.jpg",
          },
          {
            articleCode: "1324041018",
            colorName: "Almond Rose",
            hex: "#E6DADA",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/acbadf10f91920af4b4e0fe9e48f888c92b94e9e.jpg",
          },
          {
            articleCode: "1324041002",
            colorName: "Masala Chai",
            hex: "#C7B4A6",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872486/hm/beauty/147337ecce217436eea83b6fffa45f48e11e2e35.jpg",
          },
          {
            articleCode: "1324041001",
            colorName: "Bleached Peach",
            hex: "#f1cdd1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872487/hm/beauty/044051f35a5b5b9f61ef8d9b50bf813775f7d59a.jpg",
          },
          {
            articleCode: "1324041008",
            colorName: "Rose Umber",
            hex: "#cf8e96",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872487/hm/beauty/4db79f7cd67af1b8c2e62fbea280244183f6d756.jpg",
          },
          {
            articleCode: "1324041006",
            colorName: "Sunlit Snapdragon",
            hex: "#ebbebb",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872487/hm/beauty/c7590da28d55c6b9b3b8c82e01b5170f09b0c851.jpg",
          },
          {
            articleCode: "1324041014",
            colorName: "In Love With a Dutch!",
            hex: "#e980bb",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872487/hm/beauty/a25f44aa9aa2cdf705cbb76610ee250357309f3f.jpg",
          },
          {
            articleCode: "1324041016",
            colorName: "So There",
            hex: "#c42164",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872488/hm/beauty/c16ad1b116685ce077466dc68e2a82cc451e9ad6.jpg",
          },
          {
            articleCode: "1324041017",
            colorName: "Cherrywood",
            hex: "#DAA0A7",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872488/hm/beauty/d8c11f29ec49f5997732175e7736f8a12d290f5d.jpg",
          },
          {
            articleCode: "1324041012",
            colorName: "Don't Neon Me",
            hex: "#ee2768",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872488/hm/beauty/743e318f7aed3c142f2d6230e12b9711e7164500.jpg",
          },
          {
            articleCode: "1324041010",
            colorName: "In the 60s",
            hex: "#f2a2bf",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872489/hm/beauty/37491b04ce0947bf78b6eacd32829b5ec853cd3d.jpg",
          },
          {
            articleCode: "1324041015",
            colorName: "Full-on Fuchsia",
            hex: "#e95788",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872489/hm/beauty/beb421efaa70118a591ffb61677abb0e784e094e.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1324041007001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Fashion-focused nail polish in a gorgeous array of inspiring colours and effects. Application is quick and easy – one coat of the high-gloss formula provides a rich, flawless finish. 9 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 9.0000 ml",
        ],
        attributes: {
          applicationType: ["Liquid", "Plastic brush"],
          volume: "9 ml",
          ingredients:
            "Butyl Acetate, Ethyl Acetate, Nitrocellulose, Acetyl Tributyl Citrate, Adipic Acid/Neopentyl Glycol/Trimellitic Anhydride Copolymer, Isopropyl Alcohol, Stearalkonium Bentonite, Acrylates Copolymer, N-Butyl Alcohol, Etocrylene, Sorbic Acid, Diethylhexyl Sodium Sulfosuccinate, Phosphoric Acid, Kaolin, Water (Aqua), Alcohol Denat., Manganese Violet (Ci 77742), Titanium Dioxide (Ci 77891), Iron Oxides (Ci 77491), Iron Oxides (Ci 77499), Yellow 5 Lake (Ci 19140), Red 6 Lake (Ci 15850), Ferric Ammonium Ferrocyanide (Ci 77510)",
          beautyArea: ["Nails"],
          productTypeName: "Nail polish",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "242224222",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/34c558354c9eff7b0d06f73b970a71d0e4e8470c.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/34c558354c9eff7b0d06f73b970a71d0e4e8470c.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872483/hm/beauty/34c558354c9eff7b0d06f73b970a71d0e4e8470c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/67401ea9e57814d188355e99bbc833e51bb33f0f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/0dad7c90d9a360ce3d03b146e5616e0fadb98de5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872485/hm/beauty/3d9c0559a13c247f42ba7d97c526d82c7b4e8141.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1324041007.html",
      },
      {
        id: "1257112004",
        productCode: "1257112_group_004",
        name: "Wash bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1274.15,
          regular: 1499,
          onSale: true,
          formatted: "Rs.1,274.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Dark pink",
          hex: "#663447",
          shade: "Magenta|Hot pink|Neon pink|Fuchsia|Rose",
        },
        colorVariants: [
          {
            articleCode: "1257112004",
            colorName: "Dark pink",
            hex: "#663447",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872490/hm/beauty/b0e681ab126cba74bc9106fab1b55e211a229850.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1257112004001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sale"],
        markers: [],
        description:
          "Limited Edition. Wash bag in a soft fabric with inside pockets and a zip at the top. Depth 14 cm. Height 18 cm. Length 40 cm.",
        compositions: ["Shell: Polyester 100%", "Lining: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: ["Width: 14 cm", "Length: 329 cm", "Height: 20 cm"],
        attributes: {
          weight: "132 g",
          productTypeName: "Toiletry bag",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872490/hm/beauty/b0e681ab126cba74bc9106fab1b55e211a229850.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872490/hm/beauty/b0e681ab126cba74bc9106fab1b55e211a229850.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872490/hm/beauty/b0e681ab126cba74bc9106fab1b55e211a229850.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872490/hm/beauty/a3bd11bad017ceddec2cf6c68c139cba93e546ea.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872491/hm/beauty/9780cec86ed31361868026af9ab23c8e82be4e22.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1257112004.html",
      },
      {
        id: "1344161001",
        productCode: "1344161_group_001",
        name: "Vanilla Silk elixir parfum",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Perfume",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1499,
          regular: 1499,
          onSale: false,
          formatted: "Rs.1,499.00",
          discountPercentage: null,
        },
        color: {
          name: "Vanilla Silk",
          hex: "#B1A646",
          shade: "Gold yellow|Yellow gold",
        },
        colorVariants: [
          {
            articleCode: "1344161001",
            colorName: "Vanilla Silk",
            hex: "#B1A646",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/20a75b1dfd44ef74156b06bc99ec06d8fa916fa5.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1344161001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "A golden indulgence where sparkling bergamot, juicy pear and spicy ginger melt into velvety cocoa and delicate jasmine, before settling into a rich blend of vanilla, musk and glowing amber. Cocooning yet captivating, it wraps the skin in a warm, luxurious aura, like stepping into a candlelit dinner party where every glance lingers a little longer. Top notes: bergamot, ginger, pear. Mid notes: jasmine, cocoa. Base notes: vanilla, musk, amber. Vegan. 50 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 50.0000 ml",
        ],
        attributes: {
          fragranceFamily: ["Spicy"],
          applicationType: ["Liquid", "Spray              "],
          volume: "50 ml",
          ingredients:
            "Alcohol Denat., Parfum, Tetramethyl Acetyloctahydronaphthalenes, Vanillin, Benzyl Salicylate, Linalool, Linalyl Acetate, Benzyl Alcohol, Hydroxycitronellal, Limonene, Citrus Aurantium Bergamia Peel Oil, Coumarin, Myroxylon Pereirae Oil/Extract, Citrus Aurantium Peel Oil, Lavandula Oil/ Extract, Terpineol, Pinene, Terpinolene, Rose Ketones, Benzyl Benzoate, Isoeugenyl Acetate, Benzyl Cinnamate, Beta-Caryophyllene, Citral, Geranyl Acetate, Geraniol, Alpha-Terpinene, Citronellol",
          beautyArea: ["Body"],
          productTypeName: "Perfume",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/20a75b1dfd44ef74156b06bc99ec06d8fa916fa5.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872491/hm/beauty/7f6fb9fc08cde546507f4e6c050517a2429edf5e.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872491/hm/beauty/7f6fb9fc08cde546507f4e6c050517a2429edf5e.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/20a75b1dfd44ef74156b06bc99ec06d8fa916fa5.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872491/hm/beauty/2947cf6b5b30d5a0954199b69263c726f068620a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872492/hm/beauty/0eebc294bc213df453bcbb79891351a52bc4978f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1344161001.html",
      },
      {
        id: "1344540001",
        productCode: "1344540_group_001",
        name: "3-piece travel makeup brush set",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_eyes_eyebrow",
        productType: "Make-up brush set",
        productGroup: "Brushes & tools",
        price: {
          currency: "INR",
          current: 1274.15,
          regular: 1499,
          onSale: true,
          formatted: "Rs.1,274.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Silver-coloured",
          hex: "#DFDEDE",
          shade: "Grey silver",
        },
        colorVariants: [
          {
            articleCode: "1344540001",
            colorName: "Silver-coloured",
            hex: "#DFDEDE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/31ed930cdb76d7dff99ef6beefb5fa79828981bb.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1344540001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Limited Edition. Set including a kabuki brush, a cheek & lip brush and a brow & eyeliner brush. Kabuki brush with a protective, retractable sleeve and a cap for flawless on-the-go powder application. Double-ended cheek & lip brush with a brush at one end and a silicone tip at the other for seamless blending. Brow & eyeliner duo brush for precise grooming and definition.",
        compositions: [
          "Main part: Aluminium 100%",
          "Details: Polypropylene 100%",
          "Details: Silicone 100%",
        ],
        materials: [
          {
            name: "Aluminium",
            amount: "100%",
          },
          {
            name: "Polypropylene",
            amount: "100%",
          },
          {
            name: "Silicone",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: Make-up Brush 1:2.7 cm\nMake-up Brush 2:2.5 cm\nMake-up Brush 3:0.75 cm ",
          "Length: Make-up Brush 1:9.5 cm\nMake-up Brush 2:10 cm\nMake-up Brush 3:10 cm ",
        ],
        attributes: {
          pieces: "3",
          beautyArea: ["Eyebrows", "Eyes", "Face"],
          concepts: ["H&M BEAUTY"],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/31ed930cdb76d7dff99ef6beefb5fa79828981bb.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/31ed930cdb76d7dff99ef6beefb5fa79828981bb.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/31ed930cdb76d7dff99ef6beefb5fa79828981bb.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/60c133dd994b7d9c50ff9d44090f3e7271e51abe.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1344540001.html",
      },
      {
        id: "1305536001",
        productCode: "1305536_group_001",
        name: "Ruby Touch EDP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1104.15,
          regular: 1299,
          onSale: true,
          formatted: "Rs.1,104.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Ruby Touch",
          hex: "#8F1F33",
          shade: "Ruby red",
        },
        colorVariants: [
          {
            articleCode: "1305536001",
            colorName: "Ruby Touch",
            hex: "#8F1F33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872495/hm/beauty/63db56cc487120913c65ed2fe12bad596f6a25e2.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1305536001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Spices, amber, wood – a bold and sophisticated scent where rich amber and saffron meet a refined woody base. Top notes: Orange, tagetes, dried fruits. Mid notes: Woods, saffron, violet, jasmine. Base notes: Amber, oak moss, musk. Vegan. 50 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          fragranceFamily: ["Spicy"],
          applicationType: ["Liquid", "Spray              "],
          volume: "50 ml",
          ingredients:
            "Alcohol (Ethanol), Fragrance, Tetramethyl Acetyloctahydronaphthalenes, Citrus Aurantium Flower Oil, Benzaldehyde, Alpha-Isomethyl Ionone, Farnesol, Linalool",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872495/hm/beauty/63db56cc487120913c65ed2fe12bad596f6a25e2.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872495/hm/beauty/63db56cc487120913c65ed2fe12bad596f6a25e2.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872495/hm/beauty/63db56cc487120913c65ed2fe12bad596f6a25e2.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872493/hm/beauty/46aa4a3d71572c02f34b450e8cd94c606836aabb.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1305536001.html",
      },
      {
        id: "1308595003",
        productCode: "1308595_group_003",
        name: "Two-tiered wash bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1274.15,
          regular: 1499,
          onSale: true,
          formatted: "Rs.1,274.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Light pink",
          hex: "#DCCAD0",
          shade: "Baby pink|Dusty pink|Rose",
        },
        colorVariants: [
          {
            articleCode: "1308595003",
            colorName: "Light pink",
            hex: "#DCCAD0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/602521c6b44948379bdac975ce85265c25b74458.jpg",
          },
          {
            articleCode: "1308595001",
            colorName: "Cream",
            hex: "#EEEDE4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/a6045ac8785345225851659753ce0ff900d77cbc.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1308595003001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Two-tiered wash bag in a coated fabric featuring a top handle and two compartments with a two-way zip all around. The lid includes inner storage compartments, ideal for makeup brushes.",
        compositions: [
          "Shell: Polyester 100%",
          "Lining: Polyester 100%",
          "Coating: Polyurethane 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Height: 13 cm",
          "Width: 20.5 cm",
          "Depth: 12.5 cm",
          "Width: 18 cm",
          "Length: 24 cm",
          "Height: 11 cm",
        ],
        attributes: {
          concepts: ["H&M BEAUTY"],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/602521c6b44948379bdac975ce85265c25b74458.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/602521c6b44948379bdac975ce85265c25b74458.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/602521c6b44948379bdac975ce85265c25b74458.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/1472160242290cada5afa8f860ea27c9245db1f3.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872495/hm/beauty/edd628e063d69e11f0ad6ef13a4d2190f61ccad5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1308595003.html",
      },
      {
        id: "1300735001",
        productCode: "1300735_group_001",
        name: "Do-It-All-Stick Bronzer",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_face_bronzers",
        productType: "Bronzer",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 594.15,
          regular: 699,
          onSale: true,
          formatted: "Rs.594.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Tour De Contour",
          hex: "#B7A37F",
          shade: "Ecru|Taupe|Wheat",
        },
        colorVariants: [
          {
            articleCode: "1300735001",
            colorName: "Tour De Contour",
            hex: "#B7A37F",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/15c1a120b93c8b0c5ce0f76b188dfe7309f0e683.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1300735001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Effortlessly add a touch of colour to cheeks or lips with this easy-to-use, versatile colour stick. Vegan. 7 g.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          finish: ["Natural finish"],
          coverage: ["Sheer coverage"],
          applicationType: ["Balm", "Solid", "Stick       "],
          weight: "7 g",
          ingredients:
            "Ricinus Communis Seed Oil, Ethylhexyl Palmitate, Dimethicone, Polyethylene, Polybutene, Caprylic/Capric Triglyceride, Diisostearyl Malate, Mica, Phenyl Trimethicone, Caprylyl Methicone, Ozokerite, Cera Microcristallina (Microcrystalline), Kaolin, Methyl Methacrylate Crosspolymer, Octyl Methoxycinnamate, Aluminum Starch Octenylsuccinate, Cetyl Palmitate, Zinc Oxide, Cetyl Alcohol, Butyrospermum Parkii Butter, Phenoxyethanol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Aroma (Flavour), Ethylhexylglycerin, Titanium Dioxide (Ci 77891), Iron Oxide (Ci 77492), Iron Oxide (Ci 77491), Iron Oxide (Ci 77499)",
          beautyArea: ["Face", "Eyes", "Lips"],
          productTypeName: "Bronzer",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "10/C/UA/2021",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/15c1a120b93c8b0c5ce0f76b188dfe7309f0e683.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/15c1a120b93c8b0c5ce0f76b188dfe7309f0e683.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872494/hm/beauty/15c1a120b93c8b0c5ce0f76b188dfe7309f0e683.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872496/hm/beauty/41b4dd4a7157f41bc11a720e3e23d572271ce61a.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872496/hm/beauty/5d9d12796243a0ee37ed5cf4ebdecdd833d33132.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872497/hm/beauty/ea7a0a8c21a2ce08cca53e3824a6934e0940ab11.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872499/hm/beauty/054b94a4383e912034a94340dde825c2f6cda6d1.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872498/hm/beauty/a1811452baf5d8d6a698d5b24c9a019d5dfc8c25.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872499/hm/beauty/74dfe9ba2671b19ec14f01915e190ba80d01a987.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872499/hm/beauty/b965f4b512c7ed10d16d771d35b9b2ca7d6329f3.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1300735001.html",
      },
      {
        id: "1314505001",
        productCode: "1314505_group_001",
        name: "Powder and blusher brush",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_makeupbrusherstools_makeupbrushes",
        productType: "Make-up brush",
        productGroup: "Brushes & tools",
        price: {
          currency: "INR",
          current: 679.15,
          regular: 799,
          onSale: true,
          formatted: "Rs.679.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Light pink",
          hex: "#EEDCD9",
          shade: "Coral|Dusty pink|Light pink|Salmon",
        },
        colorVariants: [
          {
            articleCode: "1314505001",
            colorName: "Light pink",
            hex: "#EEDCD9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/13abddba4e941a4bde4f84880b2e2adda7c99e52.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1314505001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Double-ended brush with soft, fluffy bristles for a flawless finish and smooth application. Wooden handle and vegan, synthetic bristles.",
        compositions: ["Birch 60%, Aluminium 40%"],
        materials: [
          {
            name: "Birch",
            amount: "60%",
          },
          {
            name: "Aluminium",
            amount: "40%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: ["Width: 2 cm", "Length: 21 cm"],
        attributes: {
          applicationType: ["Synthetic brush"],
          beautyArea: ["Face"],
          concepts: ["H&M BEAUTY"],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/13abddba4e941a4bde4f84880b2e2adda7c99e52.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/13abddba4e941a4bde4f84880b2e2adda7c99e52.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/13abddba4e941a4bde4f84880b2e2adda7c99e52.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1314505001.html",
      },
      {
        id: "1324007016",
        productCode: "1324007_group_016",
        name: "Nail polish",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_nails_nailpolish",
        productType: "Nail polish",
        productGroup: "Nails",
        price: {
          currency: "INR",
          current: 254.15,
          regular: 299,
          onSale: true,
          formatted: "Rs.254.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Bordeaux",
          hex: "#300810",
          shade: "Burgundy|Dark maroon|Dark red",
        },
        colorVariants: [
          {
            articleCode: "1324007016",
            colorName: "Bordeaux",
            hex: "#300810",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/d4d81d49369e2ba0db9ff760c095a6c40143f775.jpg",
          },
          {
            articleCode: "1324007017",
            colorName: "Sibylline",
            hex: "#440b12",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872501/hm/beauty/8a02bbb75a46c1a93383c27b11c53053a5d0f1d6.jpg",
          },
          {
            articleCode: "1324007018",
            colorName: "Cranberry",
            hex: "#C15D61",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872502/hm/beauty/2fb29d4fcf80c8120141bac8cc4250632f672732.jpg",
          },
          {
            articleCode: "1324007014",
            colorName: "Bourgogne",
            hex: "#9a2633",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872502/hm/beauty/2ade15a16687fb9f68c1c850ab564e9b775c69b6.jpg",
          },
          {
            articleCode: "1324007001",
            colorName: "Peak Status",
            hex: "#d5c18e",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872502/hm/beauty/67ff69fba74358f7568f926c2866c3abd1c7722f.jpg",
          },
          {
            articleCode: "1324007002",
            colorName: "Lemon Parfait",
            hex: "#fafbd3",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872503/hm/beauty/11d1b3fd3289c6ca3614b9327a27ff92984cd4d3.jpg",
          },
          {
            articleCode: "1324007008",
            colorName: "You Say Tomato",
            hex: "#c71d26",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872503/hm/beauty/2f8cb2005fe6140f6d89bd186280ca56709da9e7.jpg",
          },
          {
            articleCode: "1324007004",
            colorName: "Tangerine for 2",
            hex: "#c74c34",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872503/hm/beauty/b804bd5997023c3104d45aef7fdc779e74c820ad.jpg",
          },
          {
            articleCode: "1324007010",
            colorName: "Parisienne",
            hex: "#a41c30",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872504/hm/beauty/dd0384b699b1a2e61c7e9760e0b24ddbebf25a1f.jpg",
          },
          {
            articleCode: "1324007013",
            colorName: "Boss in Red",
            hex: "#961b2f",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872504/hm/beauty/2e785c2ae214b413ad064f981e85d07c65d62b12.jpg",
          },
          {
            articleCode: "1324007015",
            colorName: "Red Carpet",
            hex: "#8b1430",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872504/hm/beauty/960c5e0d093724ffe4120e0b881a4c85a57cb0a1.jpg",
          },
          {
            articleCode: "1324007009",
            colorName: "Poppy Fields Forever",
            hex: "#9c1f23",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/7638e0d306cd267ada891eb30b1b141f8873b3c6.jpg",
          },
          {
            articleCode: "1324007003",
            colorName: "Orange Pop",
            hex: "#f36a33",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/f40bc15ad621ddea1de9487b81d25d02692f7b9c.jpg",
          },
          {
            articleCode: "1324007011",
            colorName: "Red over Heels",
            hex: "#ca1d39",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/c32b0f1d58d84503fa8cb3e2d764f552efb8d7e8.jpg",
          },
          {
            articleCode: "1324007006",
            colorName: "Cinnabar Gem",
            hex: "#ee2d5a",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872506/hm/beauty/e4980442d734ed446c23e1978b75037930b300a8.jpg",
          },
          {
            articleCode: "1324007007",
            colorName: "Sweet Talk",
            hex: "#cc1625",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872506/hm/beauty/29047ce75695fa17981c2126ae75d2a173faaa42.jpg",
          },
          {
            articleCode: "1324007012",
            colorName: "Fandango",
            hex: "#a80024",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872506/hm/beauty/aac139ce02802354567cac04a36fadefaf944161.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1324007016001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Fashion-focused nail polish in a gorgeous array of inspiring colours and effects. Application is quick and easy – one coat of the high-gloss formula provides a rich, flawless finish. 9 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 9.0000 ml",
        ],
        attributes: {
          applicationType: ["Liquid", "Plastic brush"],
          volume: "9 ml",
          ingredients:
            "Utyl Acetate, Ethyl Acetate, Nitrocellulose, Acetyl Tributyl Citrate, Adipic Acid/Neopentyl Glycol/Trimellitic Anhydride Copolymer, Isopropyl Alcohol, Stearalkonium Bentonite, Acrylates Copolymer, Etocrylene, N-Butyl Alcohol, Sorbic Acid, Diethylhexyl Sodium Sulfosuccinate, Phosphoric Acid, Water (Aqua), Alcohol Denat., Red 34 Lake (Ci 15880), Iron Oxides (Ci 77499), Titanium Dioxide (Ci 77891), Yellow 5 Lake (Ci 19140), Red 6 Lake (Ci 15850), Ferric Ammonium Ferrocyanide (Ci 77510)",
          beautyArea: ["Nails"],
          productTypeName: "Nail polish",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "242224222",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/d4d81d49369e2ba0db9ff760c095a6c40143f775.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/d4d81d49369e2ba0db9ff760c095a6c40143f775.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872500/hm/beauty/d4d81d49369e2ba0db9ff760c095a6c40143f775.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872501/hm/beauty/3a0090be684f0658a17e1732aabca7e52560eeb9.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872501/hm/beauty/8661c2b06055e8410601331a78027a09223b46aa.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1324007016.html",
      },
      {
        id: "1079001001",
        productCode: "1079001_group_001",
        name: "Large two-tiered wash bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1274.15,
          regular: 1499,
          onSale: true,
          formatted: "Rs.1,274.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Black/Quilted",
          hex: "#272628",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1079001001",
            colorName: "Black/Quilted",
            hex: "#272628",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/08667b216a3dccdf9923fea9fc3f0183bb23d86d.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1079001001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Spacious, two-tiered wash bag. Handle at the top and compartments that are perfect for storing make-up brushes inside the lid. Two large compartments with a two-way zip running all around. Height 15 cm. Width 24.5 cm. Depth 16 cm.",
        compositions: ["Shell: Polyester 100%", "Lining: Polyester 100%"],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [
          "Only non-chlorine bleach when needed",
          "Line dry",
          "No iron",
          "Unwashable",
          "No dry clean",
        ],
        measurements: ["Height: 15 cm", "Width: 24.5 cm", "Depth: 16 cm"],
        attributes: {
          weight: "250 g",
          concepts: ["H&M BEAUTY"],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/08667b216a3dccdf9923fea9fc3f0183bb23d86d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/08667b216a3dccdf9923fea9fc3f0183bb23d86d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872505/hm/beauty/08667b216a3dccdf9923fea9fc3f0183bb23d86d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872507/hm/beauty/68bb7509b81625abc41a40f06e083b70c8b0f454.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872506/hm/beauty/8d6e1906ee74e1ba8f8ac93be647cd1c1408b876.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872507/hm/beauty/c5718f4d27c046431d7226dbe0593f2dec752a70.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872507/hm/beauty/f3532b3517bb80ff5b89dc5a89a688feaa4cce63.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1079001001.html",
      },
      {
        id: "1303329005",
        productCode: "1303329_group_005",
        name: "Boxy make-up bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1954.15,
          regular: 2299,
          onSale: true,
          formatted: "Rs.1,954.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Dark pink",
          hex: "#663447",
          shade: "Magenta|Hot pink|Neon pink|Fuchsia|Rose",
        },
        colorVariants: [
          {
            articleCode: "1303329005",
            colorName: "Dark pink",
            hex: "#663447",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/d1c59a666ec8f02741247bc83b34a7f88ac44970.jpg",
          },
          {
            articleCode: "1303329003",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872508/hm/beauty/fb5d9ff509bd89423c6556ff4a1b9cd9a9e71cbe.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1303329005001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sale"],
        markers: [],
        description:
          "Boxy make-up bag in coated fabric with a lid, zip closure and a handle on top for easy carrying. Features a removable insert with one large compartment and three smaller compartments that gives you the flexibility to neatly store either several small items or a few larger essentials. Height 11 cm. Depth 18 cm. Length 24 cm.",
        compositions: [
          "Shell: Polyester 100%",
          "Lining: Polyester 100%",
          "Coating: Polyurethane 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: ["Height: 11 cm", "Depth: 18 cm", "Width: 24 cm"],
        attributes: {
          productTypeName: "Toiletry bag",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/d1c59a666ec8f02741247bc83b34a7f88ac44970.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/d1c59a666ec8f02741247bc83b34a7f88ac44970.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/d1c59a666ec8f02741247bc83b34a7f88ac44970.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/5ad1834476c7af92336cf364145fbb415066bc7e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872508/hm/beauty/d7fbda9418f1a8443afdc10d7954bbd39d3fd6f1.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872510/hm/beauty/47d9f1f989ba1342d569576dc012c737aff87de4.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1303329005.html",
      },
      {
        id: "1338970001",
        productCode: "1338970_group_001",
        name: "Plump Gloss lip gloss",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_lips_lipgloss",
        productType: "Lip gloss",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 699,
          regular: 699,
          onSale: false,
          formatted: "Rs.699.00",
          discountPercentage: null,
        },
        color: {
          name: "Soft Spark",
          hex: "#C27977",
          shade: "Light red",
        },
        colorVariants: [
          {
            articleCode: "1338970001",
            colorName: "Soft Spark",
            hex: "#C27977",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/61226bdf4591cdd7debf415d8dafa435b20a3a8c.jpg",
          },
          {
            articleCode: "1338970005",
            colorName: "Late Night Latte",
            hex: "#CB5655",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/74c2ef5748a80a1aa393d51e8b50228df58ec40d.jpg",
          },
          {
            articleCode: "1338970004",
            colorName: "Pink Frenzy",
            hex: "#FD6CBC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/9b19baec93f775fd8bf36c8eb229d038017e0b8b.jpg",
          },
          {
            articleCode: "1338970003",
            colorName: "Coral Tease",
            hex: "#D67276",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/88e8f8b152bd1d97440c19e0f5de87cd0bbe35ca.jpg",
          },
          {
            articleCode: "1338970002",
            colorName: "Bubblegum Bite",
            hex: "#FE6191",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/c5c8716af4f8cdee6aef9da7864ca5487e7e1c20.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338970001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Plumping lip gloss with a high-shine finish for fuller-looking lips and a hint of tint. Its smooth, juicy formula with a mild, pleasant tingling sensation delivers glossy, luscious shine. Vegan. 4 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          benefitsRecommended: ["Plumping"],
          applicationType: ["Liquid", "Wand"],
          volume: "4 ml",
          ingredients:
            "Polybutene, Hydrogenated Polyisobutene, Caprylic/Capric Triglyceride, Octyldodecanol, Silica Dimethyl Silylate, Trioctyldodecyl Citrate, Ethylhexyl Palmitate, Aroma, Phenoxyethanol, Mica, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Tocopheryl Acetate, Simmondsia Chinensis Seed Oil, Benzotriazolyl Dodecyl P-Cresol, Synthetic Fluorphlogopite, Trihydroxystearin, Sodium Hyaluronate, Glucomannan, Ci 77891, Ci 19140, Ci 45410 , Ci 77499, Ci 15850, Ci 77491",
          beautyArea: ["Lips"],
          productTypeName: "Lip gloss",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L.NO.6/C/UA/2015",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/61226bdf4591cdd7debf415d8dafa435b20a3a8c.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872510/hm/beauty/e30aaddd4b81046a75b1dbefde556b904f67bc5a.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872510/hm/beauty/e30aaddd4b81046a75b1dbefde556b904f67bc5a.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/9bdc67b965911e03b0af3888828fa108b8b8e5f1.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/61226bdf4591cdd7debf415d8dafa435b20a3a8c.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872510/hm/beauty/8b901a482c4d0e0435168f26c334fd35fa5f3dc2.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/8be2f3ad2c2ed6a905ab42b6db497690a1155c5f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338970001.html",
      },
      {
        id: "1358655001",
        productCode: "1358655_group_001",
        name: "Boxy wash bag",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1954.15,
          regular: 2299,
          onSale: true,
          formatted: "Rs.1,954.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Dark red",
          hex: "#583A41",
          shade: "Burgundy|Ruby red|Dark red|Dark maroon",
        },
        colorVariants: [
          {
            articleCode: "1358655001",
            colorName: "Dark red",
            hex: "#583A41",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/6fdd87e820f39ff332c10915d1dd459a285a3750.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1358655001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new", "sale"],
        markers: [],
        description:
          "Wash bag in coated fabric featuring a top handle and a two-way zip all around. Large main compartment and a small inner pocket for easy organisation. Three brush loops inside the lid help keep make-up brushes in place. Lined.",
        compositions: [
          "Shell: Polyester 100%",
          "Lining: Polyester 100%",
          "Coating: Polyurethane 100%",
        ],
        materials: [
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: ["Height: 14 cm", "Width: 24 cm", "Depth: 15 cm"],
        attributes: {
          productTypeName: "Toiletry bag",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "China",
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/6fdd87e820f39ff332c10915d1dd459a285a3750.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/6fdd87e820f39ff332c10915d1dd459a285a3750.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/6fdd87e820f39ff332c10915d1dd459a285a3750.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/006a961a6c26231d1beebab8f5d3db5601d7180f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/d0b54c1cd56bd0eddfa5cd0d1efa7694d8ad2e38.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1358655001.html",
      },
      {
        id: "1354380001",
        productCode: "1354380_group_001",
        name: "Endless Eyes kajal",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_eyes_eyeliner",
        productType: "Eyeliner",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 599,
          regular: 599,
          onSale: false,
          formatted: "Rs.599.00",
          discountPercentage: null,
        },
        color: {
          name: "Black",
          hex: "#272627",
          shade: "Charcoal",
        },
        colorVariants: [
          {
            articleCode: "1354380001",
            colorName: "Black",
            hex: "#272627",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/c0971e3e5ff1b9eb67373dce00c04e80952dd1ef.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1354380001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "A high-pigment kajal eyeliner with smooth, glide-on payoff and long-wearing, smudge-proof colour. Waterproof and comfortable for all-day definition, from soft lines to bold drama. Vegan. 0.28 g.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 0.0000 g",
        ],
        attributes: {
          applicationType: ["Solid", "Pencil"],
          weight: "0,28 g",
          ingredients:
            "Isododecane, Trimethylsiloxysilicate, Polyethylene, Dimethicone, Octyldodecanol, Polymethylsilsesquioxane, Ozokerite, Lauroyl Lysine, Stearic Acid, Glyceryl Behenate, Phenoxyethanol, Disteardimonium Hectorite, Propylene Carbonate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Ethylhexylglycerin, Tocopheryl Acetate, Diethylhexyl Syringylidenemalonate, Caprylic/Capric Triglyceride, Ci 77499",
          beautyArea: ["Eyes"],
          productTypeName: "Eyeliner",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "10/C/UA/2021",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/c0971e3e5ff1b9eb67373dce00c04e80952dd1ef.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/c0971e3e5ff1b9eb67373dce00c04e80952dd1ef.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/c0971e3e5ff1b9eb67373dce00c04e80952dd1ef.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872514/hm/beauty/103833f0ebd6144268c2a5440d7ceb9abc397c8c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872514/hm/beauty/e3c6fd47f8ff2af3d77dd9d8fd2bcb580c378fcd.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872513/hm/beauty/831a9938b3cbbfc484eaf50ecb7e41676f90ed39.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1354380001.html",
      },
      {
        id: "1338967002",
        productCode: "1338967_group_002",
        name: "Blush & Glow Duo palette",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_face_blushers",
        productType: "Make-up palette",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 899,
          regular: 899,
          onSale: false,
          formatted: "Rs.899.00",
          discountPercentage: null,
        },
        color: {
          name: "Spiced Glow",
          hex: "#BC0A28",
          shade: "Ruby red",
        },
        colorVariants: [
          {
            articleCode: "1338967002",
            colorName: "Spiced Glow",
            hex: "#BC0A28",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/e7d677cf3236220a0406956268ca2074b72d13fb.jpg",
          },
          {
            articleCode: "1338967001",
            colorName: "Soft Sunset",
            hex: "#F67783",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872481/hm/beauty/e96cbacab617abf213b12f7d98d1bd70d0071581.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338967002001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Blush and highlighter duo designed to bring colour and light to your complexion in one easy step. The silky powders blend seamlessly into the skin, delivering buildable colour, a soft, radiant glow and a fresh, lit-from-within finish. Vegan. 9.0 g.",
        compositions: [
          "Container: Aluminium 100%",
          "Container: Acrylonitrile-Butadiene-Styrene 100%",
        ],
        materials: [
          {
            name: "Aluminium",
            amount: "100%",
          },
          {
            name: "Acrylonitrile-Butadiene-Styrene",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Width: 0.0000 mm",
          "Length: 0.0000 mm",
          "Height: 0.0000 mm",
          "Diameter: 0.0000 mm",
          "Volume: 0.0000 g",
        ],
        attributes: {
          applicationType: ["Cream", "Cream-to-powder  ", "Pressed powder"],
          weight: "9 g",
          ingredients:
            "1: Octyldodecanol, Phenyl Trimethicone, Polyethylene, Caprylyl Methicone, Isopropyl Myristate, Ricinus Communis Seed Oil, Ethylhexyl Palmitate, Polybutene, Aluminum Starch Octenylsuccinate, Ozokerite, Stearic Acid, Polymethylsilsesquioxane, Methyl Methacrylate Crosspolymer, Silica, Cetyl Alcohol, Butyrospermum Parkii Butter, Synthetic Beeswax, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Trihydroxystearin, Sodium Hyaluronate, Glucomannan, Ci 77491, Mica, Ci 19140, Ci 77891, Ci 77492, Ci 77499, Ci 15850 / 2: Mica, Octyldodecyl Stearoyl Stearate, Zinc Stearate, Polybutene, Isostearyl Neopentanoate, Isopropyl Isostearate, Dimethicone, Phenoxyethanol, Ethylhexylglycerin, Ci 77891",
          beautyArea: ["Face"],
          productTypeName: "Make-up palette",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "10/C/UA/2021",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/e7d677cf3236220a0406956268ca2074b72d13fb.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/e7d677cf3236220a0406956268ca2074b72d13fb.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872482/hm/beauty/e7d677cf3236220a0406956268ca2074b72d13fb.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872514/hm/beauty/72f650e2fbf3d13c09708ae7bac2a9fac4a92d0b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872515/hm/beauty/72d52360c17bb184a23ce4dbf8c994a231e156a6.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872515/hm/beauty/1cf3f69b4af6abe3e0a8975390c53985e160121f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338967002.html",
      },
      {
        id: "1338968003",
        productCode: "1338968_group_003",
        name: "Swipe & Smudge liquid eyeshadow",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_eyes_eyeshadow",
        productType: "Eyeshadow",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 699,
          regular: 699,
          onSale: false,
          formatted: "Rs.699.00",
          discountPercentage: null,
        },
        color: {
          name: "Bronze Mirage",
          hex: "#AA663A",
          shade: "Burnt orange|Terracotta|Amber",
        },
        colorVariants: [
          {
            articleCode: "1338968003",
            colorName: "Bronze Mirage",
            hex: "#AA663A",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/c296f403d0e7520e194a40d3d5050347da67ed7d.jpg",
          },
          {
            articleCode: "1338968001",
            colorName: "Rose Beam",
            hex: "#EDC7C4",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/eee9981985299c0a4bc37f81e281f6c10004f619.jpg",
          },
          {
            articleCode: "1338968002",
            colorName: "Diamond Dazzel",
            hex: "#DAD4DE",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/3785cd41ab92a8f9c52714e8bb3f6aebc28ca233.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338968003001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Liquid eyeshadow with a creamy, lightweight formula and a shimmering finish. Equipped with a wand applicator for easy application. Vegan. 1.8 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          applicationType: ["Liquid", "Wand"],
          volume: "1.8 ml",
          ingredients:
            "Aqua, Styrene/Acrylates Copolymer, Butylene Glycol, Isopentyldiol, Glycerin, Calcium Aluminum Borosilicate, Polymethylsilsesquioxane, Silica, Aluminum Starch Octenylsuccinate, Xanthan Gum, Phenoxyethanol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Ethylhexylglycerin, Tin Oxide, Mica, Ci 77491, Ci 77499, Ci 77891",
          beautyArea: ["Eyes"],
          productTypeName: "Eyeshadow",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "10/C/UA/2021",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/c296f403d0e7520e194a40d3d5050347da67ed7d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/c296f403d0e7520e194a40d3d5050347da67ed7d.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/c296f403d0e7520e194a40d3d5050347da67ed7d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/7b751713a4f96d08450b97223decfb61a3e020fe.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872516/hm/beauty/70671b3aae65986ae43a360c9ce21f74a8dfd5d8.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338968003.html",
      },
      {
        id: "1307813001",
        productCode: "1307813_group_001",
        name: "Pearl Dream EDP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1104.15,
          regular: 1299,
          onSale: true,
          formatted: "Rs.1,104.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Pearl Dream",
          hex: "#EEC2BC",
          shade: "Coral|Dusty pink|Light pink|Salmon",
        },
        colorVariants: [
          {
            articleCode: "1307813001",
            colorName: "Pearl Dream",
            hex: "#EEC2BC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/f5ddcfdaf88a869675454f10ff87d1f1e2f776cd.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1307813001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "White flowers and tuberose – an enchanting fragrance of a radiant garden full of white blooms. Top notes: Lemon, mandarin, blueberry. Mid notes: Tuberose, ylang ylang, tiare, ginger. Base notes: Cedarwood, white musk, vanilla, cashmere wood. Vegan. 50 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          fragranceFamily: ["Floral"],
          applicationType: ["Liquid", "Spray              "],
          volume: "50 ml",
          ingredients:
            "Alcohol (Ethanol), Fragrance, Hexamethylindanopyran, Linalool, Linalyl Acetate, Hexyl Cinnamal, Hydroxycitonellal, Geraniol, Citronellol, Aqua, Tetramethyl Acetyloctahydronaphthalenes",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/f5ddcfdaf88a869675454f10ff87d1f1e2f776cd.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/f5ddcfdaf88a869675454f10ff87d1f1e2f776cd.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/f5ddcfdaf88a869675454f10ff87d1f1e2f776cd.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/e7dffe628efe06edfd589c732aa382e99719663f.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1307813001.html",
      },
      {
        id: "1333524001",
        productCode: "1333524_group_001",
        name: "Modern Minimalist EdP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1529.15,
          regular: 1799,
          onSale: true,
          formatted: "Rs.1,529.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Modern Minimalist",
          hex: "#A8C5FC",
          shade: "Dusty blue|Baby blue|Light blue",
        },
        colorVariants: [
          {
            articleCode: "1333524001",
            colorName: "Modern Minimalist",
            hex: "#A8C5FC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/cb47d17427578377772d30541f405f8d4c6a6275.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1333524001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Powdery, musky, floral – a classic scent with a clean finish, like a crisp white T-shirt. Top notes: Cotton flower, eucalyptus, citrus. Mid notes: Jasmine, rose, lily of the valley. Base notes: White musk, sandalwood, amber, cashmere wood. 100 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          fragranceFamily: ["Fresh"],
          applicationType: ["Spray              "],
          volume: "100 ml",
          ingredients:
            "Alcohol Denat., Fragrance (Parfum), Water (Aqua), Blue 1 (Ci 42090), Red 33 (Ci 17200)",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/cb47d17427578377772d30541f405f8d4c6a6275.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872518/hm/beauty/0be41ddd9397b64e4d4bd7582ab46fbb8a66af1b.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872518/hm/beauty/0be41ddd9397b64e4d4bd7582ab46fbb8a66af1b.jpg",
              type: "ENVIRONMENT",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872517/hm/beauty/cb47d17427578377772d30541f405f8d4c6a6275.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872518/hm/beauty/29a06f8141d64a83c094122f81ee8490762a2938.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1333524001.html",
      },
      {
        id: "1300723011",
        productCode: "1300723_group_011",
        name: "Satin Icon lipstick",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_lips_lipstick",
        productType: "Lipstick",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 679.15,
          regular: 799,
          onSale: true,
          formatted: "Rs.679.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "La Vida Mocha",
          hex: "#803230",
          shade: "Burgundy|Dark maroon|Dark red|Ruby red",
        },
        colorVariants: [
          {
            articleCode: "1300723011",
            colorName: "La Vida Mocha",
            hex: "#803230",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/14200326e87132c118fe296d74222fd5c64b551f.jpg",
          },
          {
            articleCode: "1300723001",
            colorName: "My Lips But Better",
            hex: "#a74e50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/018aa853836dd8d66dbecdf3cbc360eb43f0dd39.jpg",
          },
          {
            articleCode: "1300723006",
            colorName: "Stop Sign",
            hex: "#9a1319",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/5c03b4b66c27285b4f87d5e6ad49df9a73dc2819.jpg",
          },
          {
            articleCode: "1300723005",
            colorName: "Crème Brûlée",
            hex: "#ac5d58",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/b3eafcc27c87bfbbc3075be6a1b6f52a70c48b54.jpg",
          },
          {
            articleCode: "1300723008",
            colorName: "Thanks a Latte",
            hex: "#a75a54",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872521/hm/beauty/c5902c27e714fc91ab0276ea0604280c8b98e112.jpg",
          },
          {
            articleCode: "1300723010",
            colorName: "It's a Gamble",
            hex: "#c33d44",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/ab14a7c371f1953556825c37c517895946a03f68.jpg",
          },
          {
            articleCode: "1300723002",
            colorName: "Ariel",
            hex: "#d12a24",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/0aead07298ec49bc6f881c79c3729050fa4935ee.jpg",
          },
          {
            articleCode: "1300723012",
            colorName: "Fudge Yeah",
            hex: "#8c4c43",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/1a5608926f80f93acee5a91a5e40a99f323cfe29.jpg",
          },
          {
            articleCode: "1300723004",
            colorName: "Fabrice",
            hex: "#cc2738",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/10658d88cf7aa170e30d3e9789c2c6aeb4b7de9c.jpg",
          },
          {
            articleCode: "1300723003",
            colorName: "Cherry Who?",
            hex: "#8a2d38",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/6c56db76ef88fc8401d680adeb754117f78d0554.jpg",
          },
          {
            articleCode: "1300723007",
            colorName: "Hot Blooded",
            hex: "#7f322c",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/da003af41efe3c7fd77aea3e0531d4edd314c505.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1300723011001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Pleasant and moisturising lipstick with an intensely pigmented, soft satin payoff. Formulated with hyaluronic acid and Vitamin E. Vegan. 4.2 g.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          benefitsRecommended: ["Hydrating"],
          applicationType: ["Cream", "Stick       "],
          weight: "4,2 g",
          keyIngredients: ["Hyaluronic acid (HA)"],
          ingredients:
            "Ricinus Communis Seed Oil, Diisostearyl Malate, Phenyl Trimethicone, Octyldodecanol, Paraffin, Copernicia Cerifera Cera, Montan Acid Wax, Hydrogenated Styrene/Methyl Styrene/ Indene Copolymer, Cera Microcristallina, Shorea Robusta Resin, Caprylic Capric Triglyceride, Trioctyldodecyl Citrate, Stearyl Dimethicone, Octadecene, Polyethylene, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Stearalkonium Hectorite, Propylene Carbonate, Polyhydroxystearic Acid, Copernicia Cerifera Wax, Tocopheryl Acetate, Aroma, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Benzotriazolyl Dodecyl P-Cresol, Trihydroxystearin, Peg-8 Caprylic/Capric Glycerides, Water, Octyldodeceth-25, Sodium Hyaluronate, Prunus Amygdalus Dulcis Oil, Simmondsia Chinensis Seed Oil, Ci 77891, D&C Red 27 (Ci 45410), Red 6 (Ci 15850), Fd&C Yellow 5 (Ci 19140), Iron Oxide Black (Ci 77499)",
          beautyArea: ["Lips"],
          productTypeName: "Lipstick",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L.NO.6/C/UA/2015",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/14200326e87132c118fe296d74222fd5c64b551f.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/14200326e87132c118fe296d74222fd5c64b551f.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/14200326e87132c118fe296d74222fd5c64b551f.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872519/hm/beauty/e7ac7ea8639e533fb3e3ac919e26087f48fdb6aa.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872519/hm/beauty/9f122cee62bbd0c3d83e60531363f0d006309862.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872519/hm/beauty/df2972ba24682ae5596b656e1ffb500fb0a5428b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/ea84f8e1c29141659985c5eb4e230db778b8d80d.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1300723011.html",
      },
      {
        id: "1346162001",
        productCode: "1346162_group_001",
        name: "3-piece wash bag set",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeupbagscases",
        productType: "Toiletry bag set",
        productGroup: "Bags & cases",
        price: {
          currency: "INR",
          current: 1954.15,
          regular: 2299,
          onSale: true,
          formatted: "Rs.1,954.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Light pink",
          hex: "#DCCAD0",
          shade: "Baby pink|Dusty pink|Rose",
        },
        colorVariants: [
          {
            articleCode: "1346162001",
            colorName: "Light pink",
            hex: "#DCCAD0",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872523/hm/beauty/b0d64eb148b97a76b1b0aa5503eb4a4040b20980.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1346162001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Set of three bags including a spacious wash bag and two smaller bags in a transparent design for easy visibility of your essentials. Each features a zip fastener at the top. Use them individually or nest the smaller bags inside the larger one for convenient organisation of makeup and beauty essentials.",
        compositions: [
          "Shell: Thermoplastic Polyurethane 100%",
          "Lining: Polyester 100%",
          "Details: Polyester 100%",
          "Coating: Polyurethane 100%",
        ],
        materials: [
          {
            name: "Thermoplastic Polyurethane",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyester",
            amount: "100%",
          },
          {
            name: "Polyurethane",
            amount: "100%",
          },
        ],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: [
          "Large: Height: 16 cm",
          "Large: Width: 25 cm",
          "Large: Depth: 10 cm",
          "Medium: Height: 9 cm",
          "Medium: Width: 15 cm",
          "Medium: Depth: 15 cm",
          "Small: Height: 9 cm",
          "Small: Width: 15 cm",
          "Small: Depth: 9 cm",
          "Width: 15 cm",
          "Length: 15 cm",
          "Height: 9 cm",
        ],
        attributes: {
          pieces: "3",
          concepts: ["H&M BEAUTY"],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872523/hm/beauty/b0d64eb148b97a76b1b0aa5503eb4a4040b20980.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872523/hm/beauty/b0d64eb148b97a76b1b0aa5503eb4a4040b20980.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872523/hm/beauty/b0d64eb148b97a76b1b0aa5503eb4a4040b20980.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872523/hm/beauty/1884af8e644db945a2f70b0e1e932761e0743caf.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872524/hm/beauty/59bf251afa76bc07361c8722f894da7a40adb178.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1346162001.html",
      },
      {
        id: "1300723001",
        productCode: "1300723_group_001",
        name: "Satin Icon lipstick",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_lips_lipstick",
        productType: "Lipstick",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 679.15,
          regular: 799,
          onSale: true,
          formatted: "Rs.679.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "My Lips But Better",
          hex: "#a74e50",
          shade: "Light red",
        },
        colorVariants: [
          {
            articleCode: "1300723001",
            colorName: "My Lips But Better",
            hex: "#a74e50",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/018aa853836dd8d66dbecdf3cbc360eb43f0dd39.jpg",
          },
          {
            articleCode: "1300723011",
            colorName: "La Vida Mocha",
            hex: "#803230",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/14200326e87132c118fe296d74222fd5c64b551f.jpg",
          },
          {
            articleCode: "1300723006",
            colorName: "Stop Sign",
            hex: "#9a1319",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/5c03b4b66c27285b4f87d5e6ad49df9a73dc2819.jpg",
          },
          {
            articleCode: "1300723005",
            colorName: "Crème Brûlée",
            hex: "#ac5d58",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/b3eafcc27c87bfbbc3075be6a1b6f52a70c48b54.jpg",
          },
          {
            articleCode: "1300723008",
            colorName: "Thanks a Latte",
            hex: "#a75a54",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872521/hm/beauty/c5902c27e714fc91ab0276ea0604280c8b98e112.jpg",
          },
          {
            articleCode: "1300723010",
            colorName: "It's a Gamble",
            hex: "#c33d44",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/ab14a7c371f1953556825c37c517895946a03f68.jpg",
          },
          {
            articleCode: "1300723002",
            colorName: "Ariel",
            hex: "#d12a24",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/0aead07298ec49bc6f881c79c3729050fa4935ee.jpg",
          },
          {
            articleCode: "1300723012",
            colorName: "Fudge Yeah",
            hex: "#8c4c43",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/1a5608926f80f93acee5a91a5e40a99f323cfe29.jpg",
          },
          {
            articleCode: "1300723004",
            colorName: "Fabrice",
            hex: "#cc2738",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/10658d88cf7aa170e30d3e9789c2c6aeb4b7de9c.jpg",
          },
          {
            articleCode: "1300723003",
            colorName: "Cherry Who?",
            hex: "#8a2d38",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/6c56db76ef88fc8401d680adeb754117f78d0554.jpg",
          },
          {
            articleCode: "1300723007",
            colorName: "Hot Blooded",
            hex: "#7f322c",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872522/hm/beauty/da003af41efe3c7fd77aea3e0531d4edd314c505.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1300723001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Pleasant and moisturising lipstick with an intensely pigmented, soft satin payoff. Formulated with hyaluronic acid and Vitamin E. Vegan. 4.2 g.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          benefitsRecommended: ["Hydrating"],
          applicationType: ["Cream", "Stick       "],
          weight: "4,2 g",
          keyIngredients: ["Hyaluronic acid (HA)"],
          ingredients:
            "Ricinus Communis Seed Oil, Diisostearyl Malate, Phenyl Trimethicone, Octyldodecanol, Paraffin, Copernicia Cerifera Cera, Montan Acid Wax, Hydrogenated Styrene/Methyl Styrene/ Indene Copolymer, Cera Microcristallina, Shorea Robusta Resin, Caprylic Capric Triglyceride, Trioctyldodecyl Citrate, Stearyl Dimethicone (And) Octadecene, Polyethylene, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Stearalkonium Hectorite, Propylene Carbonate, Polyhydroxystearic Acid, Copernicia Cerifera Wax, Tocopheryl Acetate, Aroma, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Benzotriazolyl Dodecyl P-Cresol, Trihydroxystearin, Peg-8 Caprylic/Capric Glycerides, Water, Octyldodeceth-25, Sodium Hyaluronate, Prunus Amygdalus Dulcis Oil, Simmondsia Chinensis Seed Oil, Titanium Dioxide (Ci 77891), Red 6 (Ci 15850), Red 7 (Ci 15850:1), Fd&C Yellow 5 (Ci 19140), Fd&C Blue 1 (Ci 42090), D&C Red 27 (Ci 45410)",
          beautyArea: ["Lips"],
          productTypeName: "Lipstick",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L.NO.6/C/UA/2015",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/018aa853836dd8d66dbecdf3cbc360eb43f0dd39.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/018aa853836dd8d66dbecdf3cbc360eb43f0dd39.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872520/hm/beauty/018aa853836dd8d66dbecdf3cbc360eb43f0dd39.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872524/hm/beauty/5c38ba0c85773aa193ad4cbee53c7efa2f83c2c6.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872524/hm/beauty/9ae2e94835fd0f0fcf4a11e89f40d751c4e3e4a6.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872524/hm/beauty/7d29e715baa3668fc37af5f82e213c4f8f561d8e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/a9b1633022ddfbececf262a8750037b9260a6842.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872519/hm/beauty/df2972ba24682ae5596b656e1ffb500fb0a5428b.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1300723001.html",
      },
      {
        id: "1305535001",
        productCode: "1305535_group_001",
        name: "Mystic Velvet EDP",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_fragrance_eaudeperfume",
        productType: "Eau de parfum",
        productGroup: "Fragrance",
        price: {
          currency: "INR",
          current: 1104.15,
          regular: 1299,
          onSale: true,
          formatted: "Rs.1,104.15",
          discountPercentage: "-15%",
        },
        color: {
          name: "Mystic Velvet",
          hex: "#614540",
          shade: "Burnt orange|Rust",
        },
        colorVariants: [
          {
            articleCode: "1305535001",
            colorName: "Mystic Velvet",
            hex: "#614540",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872526/hm/beauty/607492e14e95a212bd9bb762570f147c1ccf06d9.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1305535001001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: false,
        tags: ["sale"],
        markers: [],
        description:
          "Amber, flowers, gourmand – a rich and sensual experience of dark jasmine, velvety labdanum and a whisper of decadent chocolate. Top notes: Dark chocolate, strawberry, pear, mandarin. Mid notes: Jasmine, orange blossom, cedarwood. Base notes: Vanilla, sandalwood, amber, labdanum. Vegan. 50 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          fragranceFamily: ["Floral"],
          applicationType: ["Liquid", "Spray              "],
          volume: "50 ml",
          ingredients:
            "Alcohol (Ethanol), Fragrance, (Tetramethyl Acetyloctahydronaphthalenes), Benzyl Salicylate, Hexamethylindanopyran, Vanillin, Linalool, Linalyl Acetate, Hexyl Cinnamal, Limonene",
          beautyArea: ["Body"],
          productTypeName: "Eau de Parfum - Fragrance",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L. No. 123-Cos(H)",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872526/hm/beauty/607492e14e95a212bd9bb762570f147c1ccf06d9.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872526/hm/beauty/607492e14e95a212bd9bb762570f147c1ccf06d9.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872526/hm/beauty/607492e14e95a212bd9bb762570f147c1ccf06d9.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/092e6a1b6c7a168a7e4c56626e4f48f2320ba20c.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1305535001.html",
      },
      {
        id: "1338964003",
        productCode: "1338964_group_003",
        name: "Glow Touch liquid highlighter",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_face_highlighter",
        productType: "Highlighter",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 799,
          regular: 799,
          onSale: false,
          formatted: "Rs.799.00",
          discountPercentage: null,
        },
        color: {
          name: "Petal Light",
          hex: "#EDD0CB",
          shade: "Light pink|Coral|Dusty pink|Salmon",
        },
        colorVariants: [
          {
            articleCode: "1338964003",
            colorName: "Petal Light",
            hex: "#EDD0CB",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/7319f493cca729650951e24272fdfdb34406ef94.jpg",
          },
          {
            articleCode: "1338964001",
            colorName: "Moonlight",
            hex: "#ECE7E1",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872528/hm/beauty/34192a82389599158f6202723b842b47073cc2aa.jpg",
          },
          {
            articleCode: "1338964002",
            colorName: "Sunlit Dew",
            hex: "#F1EAB9",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872527/hm/beauty/d98fb7fb8e989d631a589f3cf5c66c98d27a7161.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338964003001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Liquid highlighter with a lightweight, buildable formula and a shimmering finish for a soft, radiant glow. Vegan. 4 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          applicationType: ["Liquid", "Wand"],
          volume: "4 ml",
          ingredients:
            "Aqua, Isododecane, Mica, Butylene Glycol, Phenyl Trimethicone, Peg-10 Dimethicone, Trimethylsiloxysilicate, Dimethicone, Octyldodecanol, Polymethylsilsesquioxane, Phenoxyethanol, Disteardimonium Hectorite, Sodium Chloride, Propylene Carbonate, Parfum, Tocopheryl Acetate, Disodium Edta, Ethylhexylglycerin, Ci 77891, Ci 77491",
          beautyArea: ["Face"],
          productTypeName: "Make-up highlighter",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L.NO.6/C/UA/2015",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/7319f493cca729650951e24272fdfdb34406ef94.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/7319f493cca729650951e24272fdfdb34406ef94.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/7319f493cca729650951e24272fdfdb34406ef94.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872525/hm/beauty/02fa7a752291e263bca8812421ec476d01c44c1e.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872526/hm/beauty/1c99eaa806586b45f76f9a861a7a430c78d44cea.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872527/hm/beauty/aa8cb548e807899b8bdbe28d3d9947786fa88812.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338964003.html",
      },
      {
        id: "1338970005",
        productCode: "1338970_group_005",
        name: "Plump Gloss lip gloss",
        brand: "H&M",
        category: "beauty",
        subCategory: "beauty_makeup_lips_lipgloss",
        productType: "Lip gloss",
        productGroup: "Make-up",
        price: {
          currency: "INR",
          current: 699,
          regular: 699,
          onSale: false,
          formatted: "Rs.699.00",
          discountPercentage: null,
        },
        color: {
          name: "Late Night Latte",
          hex: "#CB5655",
          shade: null,
        },
        colorVariants: [
          {
            articleCode: "1338970005",
            colorName: "Late Night Latte",
            hex: "#CB5655",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/74c2ef5748a80a1aa393d51e8b50228df58ec40d.jpg",
          },
          {
            articleCode: "1338970001",
            colorName: "Soft Spark",
            hex: "#C27977",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872509/hm/beauty/61226bdf4591cdd7debf415d8dafa435b20a3a8c.jpg",
          },
          {
            articleCode: "1338970004",
            colorName: "Pink Frenzy",
            hex: "#FD6CBC",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/9b19baec93f775fd8bf36c8eb229d038017e0b8b.jpg",
          },
          {
            articleCode: "1338970003",
            colorName: "Coral Tease",
            hex: "#D67276",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/88e8f8b152bd1d97440c19e0f5de87cd0bbe35ca.jpg",
          },
          {
            articleCode: "1338970002",
            colorName: "Bubblegum Bite",
            hex: "#FE6191",
            image:
              "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872512/hm/beauty/c5c8716af4f8cdee6aef9da7864ca5487e7e1c20.jpg",
          },
        ],
        sizes: [
          {
            sizeCode: "1338970005001",
            name: "NOSIZE",
            inStock: true,
          },
        ],
        availability: "Available",
        isNewArrival: true,
        tags: ["new"],
        markers: [],
        description:
          "Plumping lip gloss with a high-shine finish for fuller-looking lips and a hint of tint. Its smooth, juicy formula with a mild, pleasant tingling sensation delivers glossy, luscious shine. Vegan. 4 ml.",
        compositions: [],
        materials: [],
        sustainableMaterials: [],
        careInstructions: [],
        measurements: null,
        attributes: {
          benefitsRecommended: ["Plumping"],
          applicationType: ["Liquid", "Wand"],
          volume: "4 ml",
          ingredients:
            "Polybutene, Hydrogenated Polyisobutene, Caprylic/Capric Triglyceride, Octyldodecanol, Silica Dimethyl Silylate, Trioctyldodecyl Citrate, Ethylhexyl Palmitate, Aroma, Phenoxyethanol, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Tocopheryl Acetate, Simmondsia Chinensis Seed Oil, Benzotriazolyl Dodecyl P-Cresol, Trihydroxystearin, Sodium Hyaluronate, Glucomannan, Ci 77891, Ci 15850, Ci 77499",
          beautyArea: ["Lips"],
          productTypeName: "Lip gloss",
          concepts: ["H&M BEAUTY"],
          countryOfProduction: "India",
          marketedBy:
            "H&M Hennes & Mauritz Retail Pvt. Ltd. A-wing, D-3, 2nd Floor District Centre Saket New Delhi - 110017 India",
          manufacturingLicenseNumber: "M.L.NO.6/C/UA/2015",
          batchNumber: [
            "The batch codes of cosmetics are provided on the label attached to the physical product delivered to you. In case you have any concerns or queries, kindly contact our customer service at customerservice.in@hm.com",
          ],
          usedByDate: [
            "Use Before/Expiry: 36 months* from date of manufacture (*applicable for most of the products, please refer to the actual product for an exact date. Dates may vary from product to product).",
          ],
        },
        images: {
          main: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/74c2ef5748a80a1aa393d51e8b50228df58ec40d.jpg",
          model:
            "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872527/hm/beauty/aa0b0c4a3d30a864fcc0c72818cd7d64cb493113.jpg",
          gallery: [
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872527/hm/beauty/aa0b0c4a3d30a864fcc0c72818cd7d64cb493113.jpg",
              type: "LOOKBOOK",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872511/hm/beauty/74c2ef5748a80a1aa393d51e8b50228df58ec40d.jpg",
              type: "DESCRIPTIVESTILLLIFE",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872528/hm/beauty/0f3eb2dfe9c7693abd8383ef8ae801bfa0b1a0b7.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
            {
              url: "https://res.cloudinary.com/k39i8qu6/image/upload/v1792872528/hm/beauty/3d9169e070eb4e9ea39b9831288cc799d54fbdf5.jpg",
              type: "DESCRIPTIVEDETAIL",
            },
          ],
        },
        sourceUrl: "https://www2.hm.com/en_in/productpage.1338970005.html",
      },
    ],
  },
];

// Simulated network latency so loading states can be seen during development.
const MOCK_DELAY_MS = 500;

// Mocks a call to the products API. Swap the body for a real fetch later;
// callers already treat it as async. Pass a category to get only that group.
export const getProducts = async (
  category?: CategoryGroup["category"],
): Promise<ProductsResponse> => {
  // Cached so pages using it can be prerendered; the category is part of the
  // cache key.
  "use cache";
  cacheLife("hours");
  cacheTag(CACHE_TAGS.products);

  await new Promise((resolve) => setTimeout(resolve, MOCK_DELAY_MS));

  const groups = category
    ? productsResponse.filter((group) => group.category === category)
    : productsResponse;

  // Return a copy so callers can't mutate the shared mock data.
  return structuredClone(groups);
};

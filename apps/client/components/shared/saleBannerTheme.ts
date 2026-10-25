// Sale banner content and colour themes. A plain module (no JSX, no "use
// client") so the home banner, list-page strip, promo tile and data mocks can
// all share them without depending on each other.

export type SaleBannerTheme = keyof typeof SALE_BANNER_THEMES;

export type SaleBannerContent = {
  id: string;
  eyebrow: string; // short kicker shown above the title
  title: string;
  description: string;
  cta: { label: string; href: string };
  promoCode?: string;
  imageSrc?: string;
  endsAt?: string; // ISO date, shown as "Ends 30 Nov"
  theme?: SaleBannerTheme; // defaults to "dark"
  terms?: string; // small print under the button
};

// Designer-approved presets the admin picks by name, so every combination
// keeps readable contrast. Full class strings so Tailwind can find them.
export const SALE_BANNER_THEMES = {
  dark: {
    card: "bg-gray-950 text-white",
    muted: "text-white/70",
    subtle: "text-white/60",
    button:
      "bg-white text-gray-950 hover:bg-gray-200 focus-visible:outline-white",
    chip: "border-white/40 hover:bg-white/10 focus-visible:outline-white",
    gradient: "from-gray-950",
  },
  light: {
    card: "bg-gray-100 text-gray-950",
    muted: "text-gray-700",
    subtle: "text-gray-600",
    button:
      "bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-gray-950",
    chip: "border-gray-400 hover:bg-gray-950/5 focus-visible:outline-gray-950",
    gradient: "from-gray-100",
  },
  festive: {
    card: "bg-red-800 text-white",
    muted: "text-white/80",
    subtle: "text-white/75",
    button: "bg-white text-red-800 hover:bg-red-50 focus-visible:outline-white",
    chip: "border-white/50 hover:bg-white/10 focus-visible:outline-white",
    gradient: "from-red-800",
  },
};

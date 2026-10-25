import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ShopStoreProvider } from "@/providers/shop-store-provider";
import ShopAnnouncer from "@/components/layout/ShopAnnouncer";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import SiteNavbar, { fallbackNavCategories } from "@/components/layout/SiteNavbar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Resolves canonical and other relative URLs in page metadata.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3003"),
  title: { default: "Outfit", template: "%s · Outfit" },
  description: "Everyday essentials and styles for women, men, kids and the home.",
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <RouteProvider>
          <ThemeProvider>
            <ShopStoreProvider>
              <div className="max-w-screen mx-auto min-h-screen">
                <Suspense fallback={null}>
                  <AnnouncementBar />
                </Suspense>
                <Suspense fallback={<Navbar categories={fallbackNavCategories} />}>
                  <SiteNavbar />
                </Suspense>
                {children}
                <Footer />
              </div>
              <ShopAnnouncer />
            </ShopStoreProvider>
          </ThemeProvider>
        </RouteProvider>
      </body>
    </html>
  );
}

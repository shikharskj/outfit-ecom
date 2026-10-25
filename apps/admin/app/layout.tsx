import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Suspense } from "react";
import { cookies } from "next/headers";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import AppSidebar from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "My application",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<AppShellFallback />}>
            <AppShell>{children}</AppShell>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

async function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const sidebarCookie = cookieStore.get("sidebar_state")?.value;

  const defaultOpen =
    sidebarCookie === "true" ? true : sidebarCookie === "false" ? false : true;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />

        <main className="min-w-0 flex-1">
          <Navbar />
          <div
          // className="p-4"
          >
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function AppShellFallback() {
  return (
    <div className="flex min-h-screen w-full" aria-busy="true">
      <div className="hidden w-12 shrink-0 md:block" />
      <main className="min-w-0 flex-1" />
    </div>
  );
}

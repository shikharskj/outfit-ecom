"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  return (
    <NextThemeProvider
      attribute="class"
      value={{ light: "light-mode", dark: "dark-mode" }}
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      scriptProps={scriptProps}
    >
      {children}
    </NextThemeProvider>
  );
}

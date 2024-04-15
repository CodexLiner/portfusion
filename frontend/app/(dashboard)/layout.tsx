import "../globals.css";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Leftbar from "@/components/shared/Leftbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="portfusion_theme"
    >
      <html lang="en" suppressHydrationWarning>
        <body>
          <Topbar />
          <main className="flex">
            <Leftbar />
            <section className="main-container bg-white">
              <div className="w-flex max-w-4xl">{children}</div>
            </section>
          </main>
        </body>
      </html>
    </ThemeProvider>
  );
}

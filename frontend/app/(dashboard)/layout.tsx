import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Leftbar from "@/components/shared/Leftbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
        <Topbar />
        </header>
        <Leftbar />
       

        <main className="flex">
          <section className="main-container bg-white">
            <div className="w-flex max-w-4xl">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}

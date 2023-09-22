import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}

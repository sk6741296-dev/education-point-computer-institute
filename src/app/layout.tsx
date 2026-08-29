import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FASHION STORY | Fashion Store in Ashok Vihar, Delhi",
  description:
    "Discover contemporary fashion and curated clothing collections at FASHION STORY in Ashok Vihar, Delhi. Open daily 10:30 AM to 9:00 PM.",
  keywords: [
    "FASHION STORY",
    "Clothing Store Ashok Vihar",
    "Fashion Boutique Delhi",
    "Latest Fashion Trends Delhi",
    "Boutique Ashok Vihar Phase 3",
  ],
  authors: [{ name: "FASHION STORY" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-silk text-obsidian min-h-screen antialiased selection:bg-champagne selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}

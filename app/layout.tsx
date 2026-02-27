import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = localFont({
  src: [
    { path: "./fonts/figtree-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/figtree-300-italic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/figtree-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/figtree-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/figtree-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/figtree-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/figtree-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/figtree-600-italic.woff2", weight: "600", style: "italic" },
    { path: "./fonts/figtree-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/figtree-700-italic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/figtree-800-normal.woff2", weight: "800", style: "normal" },
    { path: "./fonts/figtree-800-italic.woff2", weight: "800", style: "italic" },
    { path: "./fonts/figtree-900-normal.woff2", weight: "900", style: "normal" },
    { path: "./fonts/figtree-900-italic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "AlphaDevs Labs",
  description: "We ship digital products at startup speed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${figtree.variable} antialiased bg-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

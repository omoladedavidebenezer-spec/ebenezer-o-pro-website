import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ebenezer O Pro | Build. Market. Grow.",
  description:
    "Creative digital solutions for businesses — website design, no-code apps, digital marketing, AI video advertising, CRM and automation.",
  metadataBase: new URL("https://ebenezer-o-pro-website.vercel.app"),
  openGraph: {
    title: "Ebenezer O Pro | Build. Market. Grow.",
    description: "We build, create and help businesses grow online.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
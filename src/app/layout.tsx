import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dn-commerce.vercel.app"),

  title: {
    default: "Aidin Commerce",
    template: "%s | Aidin Commerce",
  },

  description:
    "Modern ecommerce application built with Next.js 15 and Tailwind CSS.",

  keywords: ["Ecommerce", "Next.js", "React", "Tailwind", "Shopping"],

  openGraph: {
    title: "Aidin Commerce",
    description: "Modern ecommerce application built with Next.js.",
    type: "website",
    locale: "en_US",
    siteName: "Aidin Commerce",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aidin Commerce",
    description: "Modern ecommerce application",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

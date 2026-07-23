import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import "@/app/global.css";

import Header from "@/app/[locale]/components/layout/header";
import Footer from "@/app/[locale]/components/layout/footer";

import { getMessages } from "@/lib/i18n/messages";
import { isLocale, localeDirections, locales } from "@/lib/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://dn-commerce.vercel.app"),
  title: {
    default: "Aidin Commerce",
    template: "%s | Aidin Commerce",
  },
  description:
    "Modern ecommerce application built with Next.js 16 and Tailwind CSS.",
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const vazir = localFont({
  src: [
    {
      path: "../../fonts/Vazirmatn[wght].ttf",
      weight: "100 900", // محدوده وزن‌ها در نسخه variable
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const isRTL = locale === "fa";

  return (
    <html
      lang={locale}
      dir={localeDirections[locale]}
      suppressHydrationWarning
      className={vazir.variable}>
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

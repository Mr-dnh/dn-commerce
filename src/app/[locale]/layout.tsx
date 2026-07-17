import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/app/[locale]/components/layout/header";
import Footer from "@/app/[locale]/components/layout/footer";
import { getMessages } from "@/lib/i18n/messages";
import { isLocale, localeDirections, locales } from "@/lib/i18n/config";
import "@/app/global.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={localeDirections[locale]} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

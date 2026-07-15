import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getMessages } from "@/lib/i18n/messages";
import { isLocale, localeDirections, locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={localeDirections[locale]} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header locale={locale} messages={messages.Header} />
          {children}
          <Footer locale={locale} messages={messages.Footer} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

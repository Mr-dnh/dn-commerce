import Home from "@/components/layout/home";
import { getMessages } from "@/lib/i18n/messages";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function Mother({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  return <Home locale={locale} messages={messages.Home} cardMessages={messages.Card} />;
}

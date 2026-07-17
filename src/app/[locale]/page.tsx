import Home from "@/app/[locale]/components/layout/home";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function Mother({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Home locale={locale} />;
}

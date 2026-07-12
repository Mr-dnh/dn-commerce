import { getProducts } from "@/api/axiosConfig";
import CardContent from "@/components/shared/card";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/messages";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

export default async function SearchPage({ params, searchParams }: PageProps<"/[locale]/search">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { q } = await searchParams;
  const messages = await getMessages(locale);
  const allProducts = await getProducts();

  if (!q || String(q).trim() === "") {
    return <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950"><div className="container mx-auto max-w-7xl px-4"><h1 className="text-3xl font-bold text-slate-900 dark:text-white">{messages.Search.emptyPrompt}</h1></div></main>;
  }

  const query = String(q);
  const searchQuery = query.toLowerCase().trim();
  const results = allProducts.filter((product) => product.title.toLowerCase().includes(searchQuery) || product.brand.toLowerCase().includes(searchQuery));

  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between"><h1 className="text-xl font-bold text-slate-900 dark:text-white">&quot;{query}&quot;</h1><p className="text-slate-600 dark:text-slate-400">{messages.Search.found.replace("{count}", String(results.length))}</p></div>
        {results.length === 0 ? <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-900/30"><p className="text-lg text-slate-600 dark:text-slate-300">{messages.Search.none.replace("{query}", query)}</p><Link href={`/${locale}/products`} className="mt-4 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">{messages.Search.allProducts}</Link></div> : <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{results.map((product) => <CardContent key={product.product_id} product={product} locale={locale} messages={messages.Card} />)}</div>}
      </div>
    </main>
  );
}

import { getProducts } from "@/api/axiosConfig";
import CardContent from "@/components/shared/card";
import Pagination from "@/components/features/pagination";
import { product_type } from "@/lib/types";
import { getMessages } from "@/lib/i18n/messages";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const ITEMS_PER_PAGE = 20;

export default async function ProductsPage({ params, searchParams }: PageProps<"/[locale]/products">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const queryParams = await searchParams;
  const currentPage = Number(queryParams?.page) || 1;
  const messages = await getMessages(locale);
  const allProducts = await getProducts();
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  return (
    <main className="bg-slate-500 min-h-screen py-16 dark:bg-slate-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">{messages.Products.title}</h1>
          <p className="text-slate-200">{messages.Products.pageOf.replace("{currentPage}", String(currentPage)).replace("{totalPages}", String(totalPages))}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentProducts.map((product: product_type) => <CardContent key={product.product_id} product={product} locale={locale} messages={messages.Card} />)}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} locale={locale} previousLabel={messages.Products.previous} nextLabel={messages.Products.next} ofLabel={messages.Products.of} />
      </div>
    </main>
  );
}

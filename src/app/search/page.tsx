import { getProducts } from "@/api/axiosConfig";
import CardContent from "@/components/shared/card";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const allProducts = await getProducts();

  // اگر عبارت جستجو وجود نداشت
  if (!q || q.trim() === "") {
    return (
      <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Genius! ok now enter your search term!
          </h1>
        </div>
      </main>
    );
  }

  // جستجو در عنوان و برند محصولات
  const searchQuery = q.toLowerCase().trim();
  const results = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery)
  );

  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            "{q}"
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {results.length} products found
          </p>
        </div>

        {results.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-lg dark:bg-slate-800 dark:shadow-slate-900/30">
            <p className="text-lg text-slate-600 dark:text-slate-300">
              no products found for "{q}", spellcheck?
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
              All Products
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((product) => (
              <CardContent key={product.product_id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

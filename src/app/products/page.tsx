import { getProducts } from "@/api/axiosConfig";
import CardContent from "@/components/shared/card";
import Pagination from "@/components/shared/pagination";
import { product_type } from "@/lib/types";

const ITEMS_PER_PAGE = 20;

// ✅ اینجا async اضافه کن و searchParams رو await کن
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>; // ✅ نوعش Promise هست
}) {
  // ✅ await رو فراموش نکن
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const allProducts = await getProducts(); // اگه async هست
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  const currentProducts = allProducts.slice(start, end);
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  return (
    <main className="bg-slate-500 min-h-screen py-16 dark:bg-slate-800 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">All Products</h1>
          <p className="text-slate-200">
            page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentProducts.map((product: product_type) => (
            <CardContent key={product.product_id} product={product} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </main>
  );
}

import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/api/axiosConfig";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Comments = dynamic(() => import("@/components/common/comments"), {
  loading: () => (
    <div className="animate-pulse p-4 text-center text-slate-500">
      Loading comments...
    </div>
  ),
});

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);
  const allProducts = await getProducts();

  if (!product) {
    notFound();
  }

  const suggestedProducts = allProducts
    .filter(
      (item) =>
        item.product_id !== product.product_id && item.brand === product.brand
    )
    .slice(0, 3);

  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#cbd5e1,transparent_34%),linear-gradient(180deg,#e2e8f0_0%,#cbd5e1_55%,#e2e8f0_100%)] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:items-stretch lg:gap-10">
          <div className="rounded-4xl border border-white/70 bg-white/70 p-3 shadow-2xl shadow-slate-300/50 backdrop-blur sm:p-4">
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.55rem] bg-slate-100 sm:aspect-square">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950/55 to-transparent" />
              {product.brand && (
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur">
                  {product.brand}
                </span>
              )}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-white/20 p-4 text-white shadow-xl backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
                  Hand-finished product
                </p>
                <p className="mt-1 text-sm text-white/90">Built for comfort.</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-white/85 p-5 shadow-2xl shadow-slate-300/40 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-700">
                <span>Signature collection</span>
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>In stock</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {product.brand}
                </h1>
                <p className="text-base leading-7 text-slate-600 sm:text-lg">
                  {product.title}
                </p>
              </div>

              <div className="grid justify-items-center grid-cols-2 gap-3 rounded-3xl bg-slate-950 p-1 text-white">
                <div className=" flex flex-row gap-2 items-center rounded-2xl bg-white/10 p-2">
                  <p className="text-xs text-slate-300">Price</p>
                  <p className="text-2xl font-black">${product.price}</p>
                </div>
                <div className=" flex flex-row gap-2 items-center rounded-2xl bg-white/10 p-2">
                  <p className="text-xs text-slate-300">Shipping</p>
                  <p className="font-bold">Free</p>
                </div>
              </div>

              <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700">
                    1
                  </span>
                  <div>
                    <h2 className="font-bold text-slate-950">
                      Balanced by hand
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      Each product is chosen for a smooth feel, sculptural
                      profile, and display-ready presence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700">
                    2
                  </span>
                  <div>
                    <h2 className="font-bold text-slate-950">
                      Gift-ready packaging
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      Ships protected with care instructions, making it easy to
                      give or keep for your own collection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <button className="rounded-2xl bg-slate-950 px-6 py-4 text-base font-black text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-sky-700 focus:outline-none active:ring-4 active:ring-sky-200">
                  Add to Cart
                </button>
                <button className="rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 focus:outline-none active:ring-4 active:ring-sky-100">
                  Save for Later
                </button>
              </div>

              <p className="text-center text-sm font-medium text-slate-500 sm:text-left">
                Secure checkout • Made in small batches • Ships in 2-4 business
                days
              </p>
            </div>
          </div>
        </section>

        {suggestedProducts.length > 0 && (
          <section className="mx-auto mt-10 max-w-6xl">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
                  You may also like
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-950">
                  More {product.brand} designs
                </h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {suggestedProducts.map((item) => (
                <article
                  key={item.product_id}
                  className="overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-lg shadow-slate-300/30">
                  <Link href={`/product/${item.product_id}`}>
                    <div className="relative aspect-4/3 bg-slate-100">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 33vw, 100vw"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">${item.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
      <Comments />
    </>
  );
}

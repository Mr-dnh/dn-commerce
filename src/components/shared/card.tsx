import Image from "next/image";
import Link from "next/link";
import { product_type } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";

const formatPrice = (price: string, locale: Locale) => {
  const numPrice = parseFloat(price.replace(/[^0-9.]/g, ""));
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", {
    style: "currency",
    currency: "usd",
    maximumFractionDigits: 0,
  }).format(numPrice);
};

interface CardContentProps {
  product: product_type;
  locale: Locale;
  messages: Messages["Card"];
}

export default function CardContent({ product, locale, messages }: CardContentProps) {
  return (
    <div>
      <article key={product.product_id} className="flex flex-col group overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 dark:bg-slate-700 dark:shadow-slate-900/30 dark:ring-slate-600">
        <Link href={`/${locale}/products/${product.product_id}`}>
          <div className="relative aspect-4/3 overflow-hidden bg-slate-200 dark:bg-slate-600">
            <Image src={product.image_url} alt={product.title} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute left-4 top-4 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white dark:bg-slate-800/90">{product.brand}</span>
          </div>
        </Link>
        <div className="flex flex-1 flex-col p-5 gap-5">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-black tracking-tight text-slate-950 line-clamp-2 dark:text-white">{product.title}</h3>
            <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-900 whitespace-nowrap dark:bg-slate-600 dark:text-white">{formatPrice(product.price, locale)}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3 dark:text-slate-300">{product.product_type || messages.fallbackDescription}</p>
          <Link href={`/${locale}/products/${product.product_id}`} className="text-center mt-auto w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-slate-600 dark:hover:bg-slate-500">{messages.more}</Link>
        </div>
      </article>
    </div>
  );
}

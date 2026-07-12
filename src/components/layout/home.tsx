import { getProducts } from "@/api/axiosConfig";
import CardContent from "@/components/shared/card";
import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";

export default async function Home({ locale, messages, cardMessages }: { locale: Locale; messages: Messages["Home"]; cardMessages: Messages["Card"] }) {
  // دیتا رو از سرور میگیریم
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 8);

  return (
    <main className="bg-slate-500 text-slate-950 dark:bg-slate-800 dark:text-white">
      <section className="relative isolate overflow-hidden bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(71,85,105,0.9))]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-300 dark:text-slate-400">
              {messages.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">
              {messages.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 dark:text-slate-300">
              {messages.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700">
                {messages.shopProducts}
              </a>
              <a
                href="#comments"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 dark:border-white/20 dark:hover:bg-white/5">
                {messages.readComments}
              </a>
            </div>
          </div>

          <div className=" hidden sm:block text-center text-8xl dark:text-white">
            {messages.logo}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-200 dark:text-slate-400">
              {messages.featuredEyebrow}
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-white dark:text-white">
              {messages.featuredTitle}
            </h2>
          </div>
          <Link
            href={`/${locale}/products`}
            className="text-sm font-bold text-white hover:bg-slate-600 transition rounded-full px-3 py-2 dark:hover:bg-slate-700">
            {messages.viewAll}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <CardContent key={product.product_id} product={product} locale={locale} messages={cardMessages} />
          ))}
        </div>
        <div className="mt-7 grid sm:grid-cols-[2fr_1fr] items-center justify-items-center">
          <span className="hidden sm:block text-sm dark:text-slate-300">
            {messages.morePrompt}
          </span>
          <Link
            href={`/${locale}/products`}
            className="font-bold text-lg text-white hover:bg-slate-600 transition rounded-full px-3 py-2 dark:hover:bg-slate-700">
            {messages.viewAll}
          </Link>
        </div>
      </section>
    </main>
  );
}

"use client";

import type { Locale } from "@/lib/i18n/config";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function SearchBar({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const t = useTranslations("Header");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim())
      router.push(`/${locale}/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="min-w-0 flex-1" role="search">
      <label className="sr-only" htmlFor="site-search">
        {t("searchProducts")}
      </label>
      <div className="relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          id="site-search"
          type="search"
          placeholder={t("search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10 w-full rounded-full border border-slate-200 bg-white/85 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5 dark:border-slate-700 dark:bg-slate-800/85 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-slate-600 dark:focus:bg-slate-800 dark:focus:ring-slate-700/50"
        />
      </div>
    </form>
  );
}

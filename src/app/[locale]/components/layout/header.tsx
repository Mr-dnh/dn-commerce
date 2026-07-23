import Link from "next/link";
import { menuItems } from "@/lib/data";
import HamburgerMenu from "@/app/[locale]/components/features/hamburgerMenu";
import SearchBar from "../features/searchbar";
import CartIcon from "../features/cartIcon";
import SettingsMenu from "@/app/[locale]/components/features/settingsMenu";
import { localizeHref } from "@/lib/i18n/config";
import { getTranslations } from "next-intl/server";

interface HeaderProps {
  locale: "en" | "fa";
}

export default async function Header({ locale }: HeaderProps) {
  const t = await getTranslations({ locale, namespace: "Header" });

  return (
    <header className="sticky top-0 z-50 bg-white/75 shadow-md shadow-black backdrop-blur-xl supports-backdrop-filter:bg-white/50 dark:bg-slate-900/75">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-3 px-3 py-3 sm:px-5 lg:px-8">
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4">
          <HamburgerMenu locale={locale} />
          <Link
            href={`/${locale}`}
            className="whitespace-nowrap text-base font-black uppercase tracking-tight text-slate-950 sm:text-lg dark:text-white"
            aria-label="Aidin Commerce home">
            Aidin
          </Link>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={localizeHref(locale, item.href)}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
        <SearchBar locale={locale} />
        <div
          className="flex shrink-0 items-center gap-2"
          aria-label="Account and cart">
          <CartIcon />
          <SettingsMenu currentLocale={locale} />
          <Link
            href="#account"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
            aria-label={t("openAccount")}>
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

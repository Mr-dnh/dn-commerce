import Link from "next/link";
import { menuItems } from "@/lib/data";
import HamburgerMenu from "@/components/features/hamburgerMenu";
import SearchBar from "../features/searchbar";
import CartIcon from "../features/cartIcon";
import ThemeToggle from "@/components/features/themeToggle";
import { localeLabels, locales, localizeHref, type Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";

type HeaderMessages = Messages["Header"];

export default function Header({ locale, messages }: { locale: Locale; messages: HeaderMessages }) {
  return (
    <header className="sticky top-0 z-50 bg-white/75 shadow-md shadow-black backdrop-blur-xl supports-backdrop-filter:bg-white/90 dark:bg-slate-900/75">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-3 px-3 py-3 sm:px-5 lg:px-8">
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4">
          <HamburgerMenu locale={locale} messages={messages} />
          <Link href={`/${locale}`} className="whitespace-nowrap text-base font-black uppercase tracking-tight text-slate-950 sm:text-lg dark:text-white" aria-label="Aidin Commerce home">
            Aidin
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {menuItems.map((item) => (
              <Link key={item.key} href={localizeHref(locale, item.href)} className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white">
                {messages[item.key]}
              </Link>
            ))}
          </nav>
        </div>
        <SearchBar locale={locale} label={messages.searchProducts} placeholder={messages.search} />
        <div className="flex shrink-0 items-center gap-2" aria-label="Account and cart">
          <CartIcon locale={locale} label={messages.openCart} />
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-2 text-xs font-bold dark:border-slate-700 dark:bg-slate-800/80 dark:text-white" aria-label={messages.language}>
            {locales.map((item) => (
              <Link key={item} href={`/${item}`} className={item === locale ? "text-sky-600 dark:text-sky-300" : "text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"}>
                {localeLabels[item]}
              </Link>
            ))}
          </div>
          <Link href="#account" className="relative inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white" aria-label={messages.openAccount}>
            <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

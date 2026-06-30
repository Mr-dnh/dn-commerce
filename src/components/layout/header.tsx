import Link from "next/link";
import { buttstyle, menuItems } from "@/lib/data";
import HamburgerMenu from "@/components/features/hamburgerMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/75 text-slate-950 shadow-md shadow-blackbackdrop-blur-xl supports-backdrop-filter:bg-white/90">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-3 px-3 py-3 sm:px-5 lg:px-8">
        <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-4">
          <HamburgerMenu />
          <Link
            href="/"
            className="whitespace-nowrap text-base font-black uppercase tracking-tight text-slate-950 sm:text-lg"
            aria-label="Aidin Commerce home">
            Aidin
          </Link>
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20">
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <form className="min-w-0 flex-1" role="search">
          <label className="sr-only" htmlFor="site-search">
            Search products
          </label>
          <div className="relative">
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
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
              placeholder="Search"
              className="h-10 w-full rounded-full border border-slate-200 bg-white/85 pl-9 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/5"
            />
          </div>
        </form>

        <div
          className="flex shrink-0 items-center gap-2"
          aria-label="Account and cart">
          <Link href="#cart" className={buttstyle} aria-label="Open cart">
            <svg
              aria-hidden="true"
              className="size-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </Link>

          <Link href="#account" className={buttstyle} aria-label="Open account">
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

"use client";

import { menuItems } from "@/lib/data";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function HamburgerMenu({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full border border-slate-200 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/20 flex flex-col justify-center items-center size-10 space-y-1 dark:border-slate-700 dark:hover:bg-slate-800"
        aria-label={t("menu")}>
        <span
          className={`block w-4 h-0.5 bg-black transition-transform duration-300 dark:bg-white ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-black transition-opacity duration-300 dark:bg-white ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-black transition-transform duration-300 dark:bg-white ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute inset-s-0 top-13 w-40 bg-white shadow-lg rounded-md border py-2 z-50 dark:bg-slate-800 dark:border-slate-700 dark:shadow-slate-900/50">
          <ul className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizeHref(locale, item.href)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:text-white dark:hover:bg-slate-700">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

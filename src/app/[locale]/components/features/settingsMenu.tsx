"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useThemeStore } from "@/store/themeStore";
import { useTranslations } from "next-intl";

interface SettingsMenuProps {
  currentLocale: string;
}

export default function SettingsMenu({ currentLocale }: SettingsMenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("SettingsMenu");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".settings-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/") || "/";
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="settings-menu relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
        aria-label={t("ariaLabel")}>
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute inset-e-0 top-12 z-50 w-48 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-700 dark:bg-slate-900 dark:shadow-slate-900/30">
          <div className="p-2 space-y-1">
            <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t("theme")}
            </p>
            <button
              onClick={() => {
                toggleTheme();
                const newTheme = theme === "light" ? "dark" : "light";
                document.documentElement.className = newTheme;
                setIsOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
              {theme === "light" ? (
                <>
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  {t("lightMode")}
                </>
              ) : (
                <>
                  <svg
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  {t("darkMode")}
                </>
              )}
            </button>

            <div className="my-1 border-t border-slate-200 dark:border-slate-700" />

            <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t("language")}
            </p>
            <button
              onClick={() => switchLanguage("en")}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                currentLocale === "en"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-700 dark:text-slate-300"
              }`}>
              🇬🇧 English
              {currentLocale === "en" && (
                <svg
                  className="size-4 ml-auto text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => switchLanguage("fa")}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                currentLocale === "fa"
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                  : "text-slate-700 dark:text-slate-300"
              }`}>
              🇮🇷 فارسی
              {currentLocale === "fa" && (
                <svg
                  className="size-4 ml-auto text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

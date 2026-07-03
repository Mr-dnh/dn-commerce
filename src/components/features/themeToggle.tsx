"use client";

import { useThemeStore } from "@/store/themeStore";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // hydration mismatch
  useEffect(() => {
    setMounted(true);
    document.documentElement.className = theme;
  }, [theme]);

  if (!mounted) {
    return (
      <button
        className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
        aria-label="Toggle theme">
        <svg
          className="size-5"
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
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white/80 p-2 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700"
      aria-label="Toggle theme">
      {theme === "light" ? (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#0f172a" }} // slate-900
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#facc15" }} // yellow-400
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}

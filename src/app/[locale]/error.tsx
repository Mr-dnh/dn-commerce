"use client";

import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations("Common");

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="rounded-2xl bg-white p-10 shadow-xl dark:bg-slate-800">
        <h1 className="text-3xl font-black text-red-500">{t("errorTitle")}</h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700">
          {t("tryAgain")}
        </button>
      </div>
    </main>
  );
}

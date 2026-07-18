import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  console.log(locale);

  const t = await getTranslations({
    locale,
    namespace: "Common",
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-7xl font-black">404</h1>

        <h2 className="mt-4 text-2xl font-bold">{t("pageNotFound")}</h2>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {t("notFoundDescription")}
        </p>

        <Link
          href={`/${locale}`}
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700">
          {t("backHome")}
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import { footerSections } from "@/lib/data";
import { localizeHref, type Locale } from "@/lib/i18n/config";
import { useTranslations } from "next-intl";

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-slate-900 text-white dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <Link
            href={`/${locale}`}
            className="text-2xl font-black uppercase tracking-tight"
            aria-label="Aidin Commerce home">
            Aidin
          </Link>
          <p className="mt-4 max-w-md text-sm text-slate-300 dark:text-slate-400">
            {t("description")}
          </p>
          <p className="mt-6 text-xs text-slate-500 dark:text-slate-600">
            {t("rights")}
          </p>
        </div>
        <div className="grid divide-x-2 divide-slate-500 gap-8 grid-cols-3 dark:divide-slate-700">
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                {t(`sections.${section.titleKey}`)}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={localizeHref(locale, link.href)}
                      className="text-sm text-slate-300 transition hover:text-white dark:text-slate-400 dark:hover:text-white">
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

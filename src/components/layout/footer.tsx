import Link from "next/link";
import { footerSections } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <Link
            href="/"
            className="text-2xl font-black uppercase tracking-tight"
            aria-label="Aidin Commerce home">
            Aidin
          </Link>
          <p className="mt-4 max-w-md text-sm text-slate-300">
            A polished ecommerce experience for discovering curated products,
            seasonal deals, and everyday essentials.
          </p>
          <p className="mt-6 text-xs text-slate-500">
            © 2026 Aidin Commerce. All rights reserved.
          </p>
        </div>

        <div className="grid divide-x-2 divide-slate-500 gap-8 grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-slate-300 transition hover:text-white ">
                      {link}
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

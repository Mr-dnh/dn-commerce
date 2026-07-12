import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

function getLocale(request: NextRequest) {
  const preferredLocale = request.headers
    .get("accept-language")
    ?.split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .find((language) => locales.some((locale) => language.startsWith(locale)));

  return preferredLocale?.startsWith("fa") ? "fa" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (firstSegment && isLocale(firstSegment)) return NextResponse.next();

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

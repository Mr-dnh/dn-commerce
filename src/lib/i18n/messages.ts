import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  fa: () => import("@/messages/fa.json").then((module) => module.default),
};

export type Messages = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export function getMessages(locale: Locale) {
  return dictionaries[locale]();
}

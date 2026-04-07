import "server-only";
import { headers } from "next/headers";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { locales, defaultLocale, type Locale } from "./i18n.config";

const dictionaryLoaders = {
  pt: () => import("./dictionaries/pt.json").then((mod) => mod.default),
  en: () => import("./dictionaries/en.json").then((mod) => mod.default),
};

export async function getLocale(): Promise<Locale> {
  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  const languages = new Negotiator({
    headers: { "accept-language": acceptLanguage },
  }).languages();
  return match(languages, [...locales], defaultLocale) as Locale;
}

export async function getDictionary(locale?: Locale) {
  const resolvedLocale = locale ?? (await getLocale());
  return dictionaryLoaders[resolvedLocale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

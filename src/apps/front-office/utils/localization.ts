import { groupedTranslations } from "@mongez/localization";
import { current, LocaleCodes } from "@mongez/react";
import Is from "@mongez/supportive-is";

export const LingualMode: "array" | "object" = "array";

export function getLocalizedValue(
  value: any,
  localeCode: string = current("localeCode"),
  localeCodeKey = "localeCode",
  textKey = "text",
) {
  if (!value) return "";

  if (value[localeCode]) return value[localeCode];

  if (Is.array(value)) {
    return value.find(item => item[localeCodeKey] === localeCode)?.[textKey];
  }

  return value;
}

export const localeCodesList: LocaleCodes = {
  en: {
    direction: "ltr",
    name: "English",
  },
  ar: {
    direction: "rtl",
    name: "العربية",
  },
};

groupedTranslations({
  home: {
    en: "Home Page",
    ar: "الصفحة الرئيسية",
  },
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  PopularDishes: {
    en: "Popular dishes",
    ar: "الاطباق الشائعة",
  },
  pizza: {
    en: "pizza",
    ar: " بيتزا",
  },
  sushi: {
    en: "sushi",
    ar: " سوشي",
  },
  salats: {
    en: "salats",
    ar: " السلطات",
  },
  burger: {
    en: "burger",
    ar: " برجر",
  },
  sweets: {
    en: "sweet",
    ar: "الحلوي ",
  },

  Italiano: {
    en: "Italiano Original",
    ar: "ايطاليانو اصلي ",
  },
  Pepperoni: {
    en: "Pepperoni Pizza",
    ar: "بيتزا بيبروني",
  },

  Blueberry: {
    en: "Blueberry Shake",
    ar: "ميلك شيك بلوبيري",
  },

  Lemon: {
    en: "Lemon Shake",
    ar: "ميلك شيك ليمون",
  },
});
export type LocaleCode = {
  localeCode: string;
  direction: "ltr" | "rtl";
  name: string;
  flag?: string;
};

export function getLocaleCodes() {
  const localeCodes: LocaleCode[] = [];
  for (const localeCode in localeCodesList) {
    localeCodes.push({
      localeCode,
      ...(localeCodesList[localeCode] as any),
    });
  }

  const currentLocaleCode = current("localeCode");

  // order locale codes by current locale code
  localeCodes.sort((a, b) => {
    if (a.localeCode === currentLocaleCode) return -1;
    if (b.localeCode === currentLocaleCode) return 1;
    return 0;
  });

  return localeCodes;
}

// src/validation/phoneNumber.ts
import { groupedTranslations, trans } from "@mongez/localization";

export const phoneNumberRule = ({ value, type }) => {
  if (!value || type !== "phoneNumber") return;

  const regex = /^01[0-2|5]{1}[0-9]{8}$/;

  if (!regex.test(value)) {
    return trans("validation.phoneNumber");
  }
};

// don't forget to add the rule name
phoneNumberRule.rule = "phoneNumber";

// now add the translation
groupedTranslations("validation", {
  phoneNumber: {
    en: "Phone number is invalid",
    ar: "رقم الهاتف غير صحيح",
  },
});

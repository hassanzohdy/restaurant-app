import { changeLocaleCode } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";

export default function LanguageSwitch() {
  const langSwitchHandel = isRTL() ? "en" : "ar";

  return (
    <div
      className="relative border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
      onClick={() => changeLocaleCode(langSwitchHandel)}>
      {isRTL() ? (
        <span className="font-serif">En</span>
      ) : (
        <span className="font-extrabold mb-[6px]">ع</span>
      )}
    </div>
  );
}

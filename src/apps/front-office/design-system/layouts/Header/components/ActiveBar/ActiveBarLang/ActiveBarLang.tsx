import { trans } from "@mongez/localization";
import { changeLocaleCode } from "@mongez/react-router";
import { isRTL } from "apps/front-office/utils/helpers";

export default function ActiveBarLang() {
  const langSwitchHandel = isRTL() ? "en" : "ar";

  return (
    <div
      onClick={() => changeLocaleCode(langSwitchHandel)}
      className="activeIcons mb-[4px]">
      {isRTL() ? (
        <span className="font-serif font-bold">En</span>
      ) : (
        <span className="text-xl">ع</span>
      )}
      <span className="text-[8px] font-bold">{trans("language")}</span>
    </div>
  );
}

import { trans } from "@mongez/localization";
import { useHeaderStateOpen } from "apps/front-office/design-system/hooks/headerStateHook";
import { BsSearch } from "react-icons/bs";
import HeaderSearchForm from "../HeaderIcons/HeaderSearch/HeaderSearchForm";

export default function HeaderSearch() {
  const openSearch = useHeaderStateOpen("headerSearch");

  return (
    <>
      <div>
        <button
          className="border border-border cursor-pointer rounded-full w-12 h-12 flex items-center justify-center hover:bg-primary-hover"
          title={trans("search")}
          onClick={openSearch}>
          <BsSearch className="w-[19px] h-[19px]" />
        </button>
        <HeaderSearchForm />
      </div>
    </>
  );
}

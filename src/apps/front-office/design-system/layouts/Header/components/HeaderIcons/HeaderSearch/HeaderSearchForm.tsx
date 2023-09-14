import { trans } from "@mongez/localization";
import { headerSearchAtom } from "apps/front-office/design-system/atoms/header-search-atom";
import { AiOutlineClose } from "react-icons/ai";

export default function HeaderSearchForm() {
  const opened = headerSearchAtom.use("opened");
  return (
    <form
      className={`w-full h-full absolute top-0 left-0 transition-all z-50 duration-200 ${
        opened ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
      <input
        type="text"
        placeholder={trans("Search products…")}
        className="w-full h-full outline-none border-none text-2xl"
      />
      <AiOutlineClose
        onClick={headerSearchAtom.close}
        className="absolute right-0 top-[40%] text-3xl hover:text-primary_hover cursor-pointer"
      />
    </form>
  );
}

import { trans } from "@mongez/localization";
import { headerSearchAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { AiOutlineSearch } from "react-icons/ai";

export default function ActiveBarSearchForm() {
  const opened = headerSearchAtom.use("opened");
  return (
    <div
      className={`absolute px-5 z-30 w-full h-full bg-background transition-all ${
        !opened ? "top-full" : "-top-full"
      }`}>
      <div className="relative h-full">
        <input
          type="search"
          className="w-full h-full rtl:text-left px-5 outline-none border-primary border rounded-full "
          placeholder={trans("searchProducts")}
        />
        <AiOutlineSearch className="absolute right-4 text-2xl top-[27%]" />
      </div>
    </div>
  );
}

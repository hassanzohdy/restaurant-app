import { burgerIconsAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { IoMdClose } from "react-icons/io";
import BurgerMenuList from "./BurgerMenuList";
export default function BurgerMenu() {
  const isOpened = burgerIconsAtom.use("opened");
  return (
    <div
      className={`fixed z-50 top-0 h-screen rtl:right-0 text-white ltr:left-0 w-10/12 sm:w-1/2 md:w-1/3 bg-black p-[10px] shadow-list transition-all ${
        !isOpened
          ? "ltr:-translate-x-full rtl:translate-x-full"
          : "translate-x-0"
      }`}>
      <div
        onClick={burgerIconsAtom.close}
        className="flex justify-end cursor-pointer">
        <IoMdClose className="text-xl" />
      </div>
      <BurgerMenuList />
    </div>
  );
}

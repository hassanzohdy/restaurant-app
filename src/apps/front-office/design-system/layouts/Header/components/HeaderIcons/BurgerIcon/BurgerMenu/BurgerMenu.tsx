import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { IoMdClose } from "react-icons/io";
import { burgerAtom } from "../../../../atoms/header-atoms";
import BurgerMenuList from "./BurgerMenuList";
export default function BurgerMenu() {
  const Opened = burgerAtom.use("opened");
  return (
    <>
      <OverLay atom={burgerAtom} opened={Opened} />

      <div
        className={`fixed xl:hidden z-50 top-0 h-screen rtl:right-0 text-white ltr:left-0 w-10/12 sm:w-1/2 md:w-1/3 bg-black p-[10px]  transition-all ${
          !Opened
            ? "ltr:-translate-x-full rtl:translate-x-full "
            : "translate-x-0 shadow-list"
        }`}>
        <div
          onClick={burgerAtom.close}
          className="flex justify-end cursor-pointer">
          <IoMdClose className="text-xl" />
        </div>
        <BurgerMenuList />
      </div>
    </>
  );
}

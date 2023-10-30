import { trans } from "@mongez/localization";
import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import useToggleState from "../../../Hooks/HeaderStateHook";

const ChartMenu = () => {
  const { groupState, toggleState } = useToggleState();

  useEffect(() => {
    if (groupState.cartIcon) {
      const keyDownHandler = event => {
        if (event.key === "Escape") {
          event.preventDefault();

          toggleState("cartIcon");
        }
      };

      document.addEventListener("keydown", keyDownHandler);

      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    }
  }, [groupState.cartIcon, toggleState]);

  return (
    <>
      <OverLay atom={null} opened={groupState.cartIcon} />
      <div
        className={`fixed hidden md:block z-50 top-0 h-screen rtl:left-0 ltr:right-0 w-1/4 bg-white transition-all ${
          !groupState.cartIcon
            ? "ltr:translate-x-full rtl:-translate-x-full "
            : "translate-x-0 shadow-list"
        }`}>
        <div className="flex flex-row justify-between py-5 px-[15px] border-b">
          <h1 className="text-xl font-bold uppercase">
            {trans("shoppingCart")}
          </h1>
          <button
            onClick={() => toggleState("cartIcon")}
            className="flex flex-row items-center cursor-pointer text-bodyTextColor text-sm font-semibold">
            {trans("close")} <IoCloseSharp />
          </button>
        </div>
        <p className="text-lg text-center m-6 text-headingTextColor">
          {trans("noProductsInCart")}
        </p>
        <div></div>
      </div>
    </>
  );
};

export default ChartMenu;

import { trans } from "@mongez/localization";
import { chartIconAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { IoCloseSharp } from "react-icons/io5";

const ChartMenu = () => {
  const isOpened = chartIconAtom.use("opened");

  return (
    <div
      className={`absolute top-0 h-screen rtl:left-0 ltr:right-0 w-1/4 bg-white shadow-list transition-all ${
        !isOpened
          ? "ltr:translate-x-full rtl:-translate-x-full"
          : "translate-x-0"
      }`}>
      <div className="flex flex-row justify-between py-5 px-[15px] border-b">
        <h1 className="text-xl font-bold uppercase">{trans("shoppingCart")}</h1>
        <h2
          onClick={chartIconAtom.close}
          className="flex flex-row items-center cursor-pointer text-bodyTextColor text-sm font-semibold">
          {trans("close")} <IoCloseSharp />
        </h2>
      </div>
      <p className="text-lg text-center m-6 text-headingTextColor">
        {trans("noProductsInCart")}
      </p>
      <div></div>
    </div>
  );
};

export default ChartMenu;

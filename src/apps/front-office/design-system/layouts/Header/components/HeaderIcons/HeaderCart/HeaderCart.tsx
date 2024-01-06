import { trans } from "@mongez/localization";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import { TiShoppingCart } from "react-icons/ti";
import { useHeaderStateOpen } from "../../../../../hooks/headerStateHook";
import CartMenu from "./CartMenu";

export default function HeaderCart() {
  const cart = userAtom.use("cart") || 0;
  const openCart = useHeaderStateOpen("cartIcon");

  return (
    <div className="relative">
      <button
        className="border border-border cursor-pointer rounded-full  w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
        title={trans("shoppingCart")}
        onClick={openCart}>
        <TiShoppingCart />
        {cart > 0 && (
          <div className="absolute right-[7px] top-[8px] text-[10px] font-bold bg-primary-main rounded-full w-4 h-4 flex items-center justify-center">
            {cart}
          </div>
        )}
      </button>
      <CartMenu />
    </div>
  );
}

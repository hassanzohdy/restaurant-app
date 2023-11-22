import OverLay from "apps/front-office/design-system/layouts/OverLay";
import { useToggleState } from "../../../../Hooks/headerStateHook";
import CartProducts from "../CartProducts";

export default function CartMenu() {
  const { groupState } = useToggleState();

  return (
    <>
      <OverLay atom={null} opened={groupState.cartIcon} />
      <div
        className={`fixed hidden md:block z-50 top-0 bottom-0 h-screen rtl:left-0 ltr:right-0 w-1/4 bg-white transition-all ${
          !groupState.cartIcon
            ? "ltr:translate-x-full rtl:-translate-x-full "
            : "translate-x-0 shadow-list"
        }`}>
        <CartProducts />
      </div>
    </>
  );
}

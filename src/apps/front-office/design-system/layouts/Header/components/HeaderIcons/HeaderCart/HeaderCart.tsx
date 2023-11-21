import { TiShoppingCart } from "react-icons/ti";
import { useToggleState } from "../../../Hooks/headerStateHook";
import { cartLengthAtom } from "../../../atoms/header-atoms";
import CartMenu from "./CartMenu";
export default function HeaderCart() {
  const { toggleState } = useToggleState();
  return (
    <div className="relative">
      <button
        className="border border-border cursor-pointer rounded-full  w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
        onClick={() => toggleState("cartIcon")}>
        <TiShoppingCart />
        <div className="absolute right-[7px] top-[8px] text-[10px] font-bold bg-primary-main rounded-full w-4 h-4 flex items-center justify-center">
          {cartLengthAtom.useValue()}
        </div>
      </button>
      <CartMenu />
    </div>
  );
}

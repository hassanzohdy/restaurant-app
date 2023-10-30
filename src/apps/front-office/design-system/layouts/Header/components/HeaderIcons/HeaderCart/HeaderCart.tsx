import { TiShoppingCart } from "react-icons/ti";
import { useToggleState } from "../../../Hooks/HeaderStateHook";
export default function HeaderCart() {
  const { toggleState } = useToggleState();
  return (
    <button
      className="border border-border cursor-pointer rounded-full  w-12 h-12 flex items-center justify-center text-xl hover:bg-primary-hover"
      onClick={() => toggleState("cartIcon")}>
      <TiShoppingCart />
    </button>
  );
}

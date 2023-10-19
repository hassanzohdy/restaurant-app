import { TiShoppingCart } from "react-icons/ti";
import useToggleState from "../../../Hooks/HeaderStateHook";
export default function HeaderCart() {
  const { toggleState } = useToggleState();
  return (
    <button
      className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary-hover"
      onClick={() => toggleState("cartIcon")}>
      <TiShoppingCart />
    </button>
  );
}

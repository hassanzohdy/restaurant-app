import { chartIconAtom } from "apps/front-office/design-system/atoms/headerAtoms";
import { TiShoppingCart } from "react-icons/ti";

export default function HeaderCart() {
  return (
    <div
      className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover"
      onClick={chartIconAtom.open}>
      <TiShoppingCart />
    </div>
  );
}

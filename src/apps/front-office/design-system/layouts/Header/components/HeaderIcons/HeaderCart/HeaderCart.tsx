import { TiShoppingCart } from "react-icons/ti";
import ChartMenu from "./ChartMenu";

export default function HeaderCart() {
  return (
    <div>
      <div className="border border-border cursor-pointer rounded-full p-3 text-xl hover:bg-primary_hover">
        <TiShoppingCart />
      </div>
      <ChartMenu />
    </div>
  );
}

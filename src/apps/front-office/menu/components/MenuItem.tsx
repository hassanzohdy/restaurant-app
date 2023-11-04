import Pizza from "assets/images/menuItems/pizza.png";
import { FaBasketShopping } from "react-icons/fa6";

export default function MenuItem() {
  return (
    <div className="flex flex-row h-60 ml-12 mt-6 border-2 rounded-2xl">
      <div className="basis-1/4 h-full ">
        <img src={Pizza}></img>
      </div>
      <div className="basis-3/4 pt-20 relative">
        <h2 className="font-bold">Chicken Ranch Pizza</h2>
        <p className="font-light mt-1 ">
          Free Palestine .. Best pizza bla bla bla bla bla bla bla bla bla bla
          bla bla
        </p>
        <p className="font-bold mt-2 text-amber-400">18.30 EGP</p>
        <div className="w-12 h-12 rounded-2xl bg-amber-400 absolute bottom-2 right-2">
          <FaBasketShopping className="text-center align-middle text-xl mt-3 ml-3" />
        </div>
      </div>
    </div>
  );
}

export function MenuItemList() {
  const dumItems = Array.from(Array(10).keys());
  return (
    <div className="flex flex-col ">
      {dumItems.map(data => {
        return <MenuItem key={data} />;
      })}
    </div>
  );
}

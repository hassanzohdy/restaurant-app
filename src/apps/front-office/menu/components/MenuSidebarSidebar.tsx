import { CiBowlNoodles, CiBurger, CiCoffeeCup, CiPizza } from "react-icons/ci";
import { BestDealItemList } from "./BestDealItem";
import "./MenuSidebarSidebar.scss";

function MenuSidebar() {
  return (
    <div className="flex flex-col sidebar">
      <div className="h-full  border-2 rounded-2xl">
        <h2 className="font-black my-4 ml-4 text-lg">Categories</h2>
        <ul role="list" className="m-4 p-4 categoryList rounded-2xl">
          <li className="flex justify-between mb-3">
            <div className="flex flex-row">
              <CiBurger className="text-2xl mr-2" />
              <a href="#">Burgers</a>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiCoffeeCup className="text-2xl mr-2" />
              <a href="#">Cold Drinkes</a>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiCoffeeCup className="text-2xl mr-2" />
              <a href="#">Hot Drinkes</a>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiBowlNoodles className="text-2xl mr-2" />
              <a href="#">Pasta</a>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="flex flex-row">
              <CiPizza className="text-2xl mr-2" />
              <a href="#">Pizza</a>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <input
          className="w-full h-12 border-2 rounded-2xl border-amber-400 mt-6 py-2 px-3"
          placeholder="Search products..."
        />
      </div>
      <div className="mt-6">
        <BestDealItemList />
      </div>
    </div>
  );
}
export default MenuSidebar;

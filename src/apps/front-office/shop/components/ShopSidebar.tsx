import { CiBowlNoodles, CiBurger, CiCoffeeCup, CiPizza } from "react-icons/ci";
import "./ShopSidebar.scss";

function ShopSidebar() {
  return (
    <div className="flex flex-col">
      <div className="h-full  border-2 rounded-2xl">
        <h2 className="font-black my-4 ml-4 text-lg">Categories</h2>
        <ul role="list" className="m-4 p-4 categoryList rounded-2xl">
          <li className="flex justify-between mb-3">
            <div className="flex flex-row">
              <CiBurger className="text-2xl mr-2" />
              <p>Burgers</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiCoffeeCup className="text-2xl mr-2" />
              <p>Cold Drinkes</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiCoffeeCup className="text-2xl mr-2" />
              <p>Hot Drinkes</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between my-3">
            <div className="flex flex-row">
              <CiBowlNoodles className="text-2xl mr-2" />
              <p>Pasta</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
          <li className="flex justify-between">
            <div className="flex flex-row">
              <CiPizza className="text-2xl mr-2" />
              <p>Pizza</p>
            </div>
            <div>
              <p>(0)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ShopSidebar;

import Helmet from "@mongez/react-helmet";
import PopularDishesItem from "app/home/pages/HomePage/PopularDishes/PopularDishesItem";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import { useState } from "react";
import { MenuItemList } from "../../components/MenuItem";
import MenuSidebar from "../../components/MenuSidebarSidebar";
import MenuViewOpts from "../../components/MenuViewOpts";
import "./MenuPage.scss";

export default function MenuPage() {
  const [isGridViewOpt, setIsGridViewOpt] = useState(true);

  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Menu" navItems={[{ name: "Menu" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <MenuSidebar />
          </div>
          <div className="basis-3/4 shopItems">
            <MenuViewOpts
              onGridClick={() => setIsGridViewOpt(true)}
              onListClick={() => setIsGridViewOpt(false)}
              isGridViewOpt={isGridViewOpt}
            />
            {isGridViewOpt ? <PopularDishesItem /> : <MenuItemList />}
          </div>
        </div>
      </div>
    </>
  );
}

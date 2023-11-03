import Helmet from "@mongez/react-helmet";
import PopularDishesItem from "app/home/pages/HomePage/PopularDishes/PopularDishesItem";
import Breadcrumb from "design-system/layouts/Breadcrumb";
import ShopSidebar from "../../components/ShopSidebar";
import ShopViewOpts from "../../components/ShopViewOpts";
import "./ShopPage.scss";

export default function ShopPage() {
  return (
    <>
      <Helmet title="Cart" />
      <Breadcrumb title="Shop" navItems={[{ name: "Shop" }]} />
      <div className="container">
        <div className="flex flex-row mt-12 mb-12">
          <div className="basis-1/4">
            <ShopSidebar />
          </div>
          <div className="basis-3/4 shopItems">
            <ShopViewOpts />
            <PopularDishesItem />
          </div>
        </div>
      </div>
    </>
  );
}

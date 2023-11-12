import { trans } from "@mongez/localization";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import React from "react";
import { TbHeartSearch } from "react-icons/tb";
import WishListProductsTable from "./components/WishListProductsTable";

const wishListProductsList = [
  {
    id: "1",
    name: "BBQ chicken breast",
    thumbnail: popularMealImage1,
    price: "£8.00",
    subtotal: "£8.00",
  },
  {
    id: "2",
    name: "Bacon Burger",
    thumbnail: popularMealImage2,
    price: "£8.00",
    subtotal: "£8.00",
  },
  {
    id: "3",
    name: "Apricot Chicken",
    thumbnail: popularMealImage3,
    price: "£8.00",
    subtotal: "£8.00",
  },
];

const emptyWishListInfo = {
  title: trans("emptyWishList"),
  description: trans("wishListEmptyDescription"),
  icon: <TbHeartSearch size="150" />,
};
function _WishListPage() {
  return (
    <>
      <Breadcrumb title={trans("wishlist")} navItems={[{ name: "wishlist" }]} />
      {wishListProductsList.length > 0 ? (
        <div className="wish-list-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
          <div className="container">
            <WishListProductsTable wishListProducts={wishListProductsList} />
          </div>
        </div>
      ) : (
        <EmptyComponent {...emptyWishListInfo} />
      )}
    </>
  );
}

const WishListPage = React.memo(_WishListPage);
export default WishListPage;

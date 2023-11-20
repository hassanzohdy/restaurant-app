import { trans } from "@mongez/localization";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import React, { useState ,useEffect } from "react";
import { TbHeartSearch } from "react-icons/tb";
import WishlistTable from "./components/WishlistTable";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { getWishlistsList } from "../../services/wishlist-service";
import Loader, { Error } from "apps/front-office/design-system/components/Indicators/Indicators";
import { useOnce } from "@mongez/react-hooks";


const emptyWishListInfo = {
  title: trans("emptyWishlist"),
  description: trans("wishlistEmptyDescription"),
  icon: <TbHeartSearch size="150" />,
};

function _WishlistPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealType[]>([]);
  const [error, setError] = useState<any>(false);

  useOnce(() => {
    getWishlistsList().then(response => {
      setMeals(response.data.wishlist.meals);
    }).catch(error => {
      setError(error.response.data.error || error.message || trans("somethingWentWrong"))
    }).finally(() => setIsLoading(false))
  });

  // Remove Meal From Wishlist
  const removeMealHandler = (mealId: number|string) => {
    const updatedWishlist = meals.filter((meal) => meal.id !== mealId);
    setMeals(updatedWishlist);
  };

  if (isLoading) return <Loader/>;

  if (error) return <Error error={error}/>;

  return (
    <>
      <Breadcrumb title={trans("wishlist")} navItems={[{ name: "wishlist" }]} />
      {meals?.length > 0 ? (
        <div className="wish-list-details py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
          <div className="container">
            <WishlistTable meals={meals} removeMeal={removeMealHandler} />
          </div>
        </div>
      ) : (
        <EmptyComponent {...emptyWishListInfo} />
      )}
    </>
  );
}

const WishlistPage = React.memo(_WishlistPage);
export default WishlistPage;

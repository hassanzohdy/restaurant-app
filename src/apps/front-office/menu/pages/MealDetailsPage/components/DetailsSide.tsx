import { trans } from "@mongez/localization";
import Stars from "apps/front-office/design-system/components/Stars";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import AddMealToCart from "apps/front-office/menu/pages/MealDetailsPage/components/AddMealToCart";
import { price } from "apps/front-office/utils/price";
import { PiDotOutlineFill } from "react-icons/pi";
import { DetailsCategorySection } from "./DetailsCategorySection";

const ShippingFeatures = () => {
  return (
    <ul className="text-primary-text font-light pb-6 border-b">
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        {trans("freeShipping")}
      </li>
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        {trans("orderBeforeNoon")}
      </li>
    </ul>
  );
};

export const DetailsSide = () => {
  const meal = mealAtom.useValue();

  const ratings = meal.rating || 0;

  const displayedSale = price(meal?.salePrice);
  const displayedPrice = price(meal.price);

  const iHaveSale = displayedSale !== displayedPrice;

  return (
    <div className="flex-1">
      <div className="sticky top-20 space-y-6">
        <div className="space-y-6 border-b pb-6">
          <h1 className="text-5xl font-bold">{meal.name}</h1>
          <div className="flex flex-row items-center gap-2">
            <Stars ratings={ratings} />{" "}
            {meal.totalReviews > 0 && (
              <p className="text-sm text-primary-text">
                ({meal.totalReviews} Customer Reviews)
              </p>
            )}
          </div>
          <p className="text-primary-text text-base">{meal.description}</p>
          <div className="flex gap-4 text-2xl font-bold">
            <span
              className={` flex items-end ${
                iHaveSale
                  ? "text-black line-through text-xl"
                  : "text-primary-main text-3xl"
              }`}>
              {displayedPrice}
            </span>
            {iHaveSale && (
              <span className="inline-block text-3xl text-primary-main">
                {displayedSale}
              </span>
            )}
          </div>
        </div>
        <AddMealToCart />
        <DetailsCategorySection />
        <ShippingFeatures />
        {/* <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <p className="font-bold">{trans("guaranteedSafeCheckout")}</p>
          <img
            src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/trust-symbols.png"
            alt="payment methods image"
          />
        </div> */}
      </div>
    </div>
  );
};

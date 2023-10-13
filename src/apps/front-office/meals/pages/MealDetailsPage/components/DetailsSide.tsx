import { Button } from "apps/front-office/design-system/components/Button";
import Stars from "apps/front-office/design-system/components/Stars";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { PiDotOutlineFill } from "react-icons/pi";
import { DetailsCategorySection } from "./DetailsCategorySection";

type Props = {
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  category: string;
  ratings: number;
};

const ShippingFeatures = () => {
  return (
    <ul className="text-primary-text font-light pb-6 border-b">
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        Free global shipping on all orders
      </li>
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        30 days easy returns if you change your mind
      </li>
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        Order before noon for same day dispatch
      </li>
    </ul>
  );
};

export const DetailsSide = ({
  description,
  isFavorite,
  price,
  title,
  category,
  ratings,
}: Props) => {
  const [amount, setAmount] = useState<number>(1);

  const displayedPrice = formatPrice(price);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    const newAmount = amount === 1 ? 1 : amount - 1;
    setAmount(newAmount);
  };

  const handleFavoriteChange = () => {};

  return (
    <div className="flex-1 ">
      <div className="sticky top-10 space-y-6">
        <div className="space-y-6 border-b pb-6">
          <h1 className="text-5xl font-bold">{title}</h1>
          <Stars ratings={ratings} />
          <p className="text-primary-text text-base">{description}</p>
          <span className="inline-block text-2xl font-bold text-primary-main">
            {displayedPrice}
          </span>
        </div>

        <div className="flex items-center gap-10 text-sm font-semibold pb-6 border-b flex-wrap">
          <div className="flex gap-3 items-center font-bold">
            <Button
              className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-2 rounded-full"
              onClick={decrementAmount}>
              -
            </Button>
            <span>{amount}</span>
            <Button
              className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-2 rounded-full"
              onClick={incrementAmount}>
              +
            </Button>
          </div>
          <div className="flex gap-2 flex-1 min-w-fit shrink-0">
            <Button
              variant="primary"
              className="flex-1 uppercase gap-2 text-xs"
              onClick={() => {}}>
              <BsFillBasket2Fill className="shrink-0" />
              add to cart
            </Button>
            <Button
              className={`text-gray-500 btn bg-primary-light ${
                isFavorite ? "text-rose-600" : "hover:text-primary-main"
              } px-5 rounded-xl`}
              onClick={handleFavoriteChange}>
              <AiTwotoneHeart />
            </Button>
          </div>
        </div>

        <DetailsCategorySection category={category} />

        <ShippingFeatures />
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <p className="font-bold">Guaranteed Safe Checkout</p>
          <img
            src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/trust-symbols.png"
            alt="payment methods image"
          />
        </div>
      </div>
    </div>
  );
};

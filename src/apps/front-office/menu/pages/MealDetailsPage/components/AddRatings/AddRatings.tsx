import { trans } from "@mongez/localization";
import { useRef } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ratingAtom } from "../../atoms/rating-atom";

export default function AddRatings() {
  const rating = ratingAtom.useValue();
  const clickedRef = useRef(false);

  function handleStartHover(startIndex: number) {
    ratingAtom.update(startIndex);
  }

  return (
    <div>
      {trans("yourRatings")}
      <span className="text-red-500">*</span>
      <div className="flex items-center mt-2">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            onMouseEnter={() => {
              clickedRef.current = false;
              handleStartHover(star);
            }}
            onMouseLeave={() => !clickedRef.current && handleStartHover(0)}
            onClick={() => {
              clickedRef.current = true;
              handleStartHover(rating);
            }}
            className="inline-block cursor-pointer hover:scale-125 transition-transform">
            {star <= rating ? (
              <AiFillStar className="text-primary-main scale-125" />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

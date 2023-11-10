import Stars from "apps/front-office/design-system/components/Stars";
import { BiSolidTimeFive } from "react-icons/bi";
import { ReviewType } from "../../utils/types";

type ReviewCardProps = {
  review: ReviewType;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex items-start gap-4">
      <img
        src={review.image}
        alt="user image"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="space-y-2">
        <div>
          <Stars ratings={review.ratings} />
          <div className="mt-1 font-bold text-lg flex items-center gap-4">
            {review.name}
            <span className="flex items-center gap-2 font-normal text-primary-text text-xs">
              <BiSolidTimeFive size={20} />
              {review.date}
            </span>
          </div>
        </div>
        <p className="text-primary-text max-w-[555px] leading-relaxed">
          {review.body}
        </p>
      </div>
    </div>
  );
}

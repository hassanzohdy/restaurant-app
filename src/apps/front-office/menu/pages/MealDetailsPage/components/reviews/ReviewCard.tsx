import Stars from "apps/front-office/design-system/components/Stars";
import { FaClock } from "react-icons/fa";
import { ReviewType } from "../../utils/types";

type ReviewCardProps = {
  review: ReviewType;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="space-y-2">
        <div>
          <div className="mt-1 font-bold text-lg flex items-center gap-4">
            {review.name}
          </div>
          <div className="flex items-center gap-2 text-primary-text text-sm">
            <Stars ratings={review.rating} />
            <div className="flex items-center gap-1">
              <FaClock />
              {review.updatedAt && <p>{review.updatedAt.date}</p>}
            </div>
          </div>
        </div>
        <p className="text-primary-text max-w-[555px] leading-relaxed">
          {review.review}
        </p>
      </div>
    </div>
  );
}

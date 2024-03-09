import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { isEmpty } from "@mongez/supportive-is";
import { userAtom } from "apps/front-office/account/atoms/user-atom";
import user from "apps/front-office/account/user";
import { Button } from "apps/front-office/design-system/components/Button";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import useReviews, {
  getMealReviews,
} from "apps/front-office/menu/hooks/use-reviews";
import { useState } from "react";
import { mealAtom } from "../../atoms/meal-atom";
import { ratingAtom } from "../../atoms/rating-atom";
import AddRatings from "../AddRatings";
import { ReviewCard } from "./ReviewCard";
import YourReview from "./yourReview";

export default function ReviewsSection() {
  const [submitClicked, setSubmitClicked] = useState(false);
  const { addReview } = useReviews();
  const { status, reviews, canReview } = getMealReviews();
  const mealId = mealAtom.use("id");
  const { email, name, id } = userAtom.useValue();
  const rating = ratingAtom.useValue();

  function handleAddReviewSubmit({ values }: FormSubmitOptions) {
    const reviewData = {
      ...values,
      rating: rating,
      name: name,
      email: email,
      meal: mealId,
    };

    addReview({ reviewData: reviewData });

    setSubmitClicked(true);
  }

  const getUserReview: any =
    reviews &&
    !isEmpty(reviews) &&
    reviews.find(review => review.createdBy.id === id);

  if (status === "loading") return <Loader />;
  if (status === "error") return;

  return (
    <section className="flex gap-8 flex-wrap lg:flex-row flex-col-reverse mt-8">
      {reviews && !isEmpty(reviews) ? (
        <div className="mr-auto">
          {reviews.map((review, index) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center h-36  font-bold text-bodyTextColor text-xl capitalize">
          {trans("noReviews")}
        </div>
      )}
      {!user.isGuest() && !canReview && !submitClicked ? (
        <div className="text-primary-text space-y-6 w-[400px]">
          <AddRatings />
          <Form onSubmit={handleAddReviewSubmit} className="space-y-6">
            <TextareaInput name="review" label="your review" required />
            <Button className="bg-primary-main hover:bg-primary-hover text-bodyTextColor uppercase py-4 px-10">
              submit
            </Button>
          </Form>
        </div>
      ) : (
        <YourReview getUserReview={getUserReview} />
      )}
    </section>
  );
}

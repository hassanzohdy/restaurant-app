import { trans } from "@mongez/localization";
import { Form } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";
import useReviews from "apps/front-office/menu/hooks/use-reviews";
import { useState } from "react";
import { mealAtom } from "../../atoms/meal-atom";
import { ratingAtom } from "../../atoms/rating-atom";
import AddRatings from "../AddRatings";

export default function UpdateReview({ getUserReview, setToggleEdit }) {
  const { updateReview } = useReviews();
  const rating = ratingAtom.useValue();
  const mealId = mealAtom.use("id");
  const [updateReviewData, setUpdateReviewData] = useState(
    getUserReview.review,
  );

  const handelUpdateReview = value => {
    const updatedReview = {
      ...value.values,
      rating: rating,
      meal: mealId,
    };

    setToggleEdit(false);
    updateReview(getUserReview.id, updatedReview);
  };

  return (
    <div className="flex-1 text-primary-text space-y-6 w-full">
      <Form onSubmit={value => handelUpdateReview(value)} className="space-y-6">
        <AddRatings />
        <TextareaInput
          value={updateReviewData}
          onChange={e => setUpdateReviewData(e)}
          name="review"
          label="your review"
          required
        />
        <div className="space-x-2">
          <Button
            variant="secondary"
            className=" text-white uppercase py-2 px-4 ">
            {trans("update")}
          </Button>
          <button
            className="bg-primary-main hover:bg-primary-hover text-bodyTextColor uppercase py-2 px-4 rounded-md font-bold text-[14px]"
            onClick={() => setToggleEdit(false)}>
            {trans("cancel")}
          </button>
        </div>
      </Form>
    </div>
  );
}

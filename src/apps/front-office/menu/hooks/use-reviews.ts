import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { useState } from "react";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";
import { mealReviewsAtom } from "../atoms/review-meal-atom";
import { mealAtom } from "../pages/MealDetailsPage/atoms/meal-atom";
import {
  addReview,
  deleteReview,
  getReviews,
  updateReview,
} from "../services/meals-service";

const handleError = error => {
  toastError(
    error.response?.data?.error || error.message || trans("somethingWentWrong"),
  );
};

const _addReview = ({ reviewData }) => {
  addReview(reviewData)
    .then(res => {
      toastSuccess(trans("reviewSubmitted"));
      mealReviewsAtom.update(oldReviews => [res.data.review, ...oldReviews]);
    })
    .catch(err => handleError(err));
};

const _handelDeleteReview = id => {
  deleteReview(id)
    .then(() => {
      mealReviewsAtom.update(oldReviews =>
        oldReviews.filter(review => review.id === id),
      );
    })
    .catch(err => handleError(err));
};

const _updateReview = (id, value) => {
  console.log(value);
  updateReview(id, value)
    .then(res => {
      console.log(res);
      toastSuccess(trans("reviewUpdated"));

      mealReviewsAtom.update(oldReviews => {
        const filterDate = oldReviews.filter(review => review.id !== id);
        return [res.data.review, ...filterDate];
      });
    })
    .catch(err => handleError(err));
};

export default function useReviews() {
  return {
    addReview: _addReview,
    handelDeleteReview: _handelDeleteReview,
    updateReview: _updateReview,
  };
}

export const getMealReviews = () => {
  const reviews = mealReviewsAtom.useValue();

  const [status, setStatus] = useState("loading");
  const [canReview, setCanReview] = useState(true);
  const id = mealAtom.use("id");

  useOnce(() => {
    getReviews(id)
      .then(res => {
        setStatus("done");
        setCanReview(res.data.canReview);
        mealReviewsAtom.update(res.data.reviews);
      })
      .catch(err => {
        setStatus("error");
        handleError(err);
      });
  });

  return {
    status,
    reviews,
    canReview,
    setStatus,
  };
};

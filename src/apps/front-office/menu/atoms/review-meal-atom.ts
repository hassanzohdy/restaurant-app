import { atom } from "@mongez/react-atom";
import { ReviewType } from "../pages/MealDetailsPage/utils/types";

export const mealReviewsAtom = atom<ReviewType[]>({
  key: "mealReview",
  default: [],
});

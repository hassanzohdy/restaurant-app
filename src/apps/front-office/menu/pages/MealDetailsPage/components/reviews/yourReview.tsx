import { trans } from "@mongez/localization";
import useReviews from "apps/front-office/menu/hooks/use-reviews";
import { useState } from "react";
import { ReviewCard } from "./ReviewCard";
import UpdateReview from "./updateReview";

export default function YourReview({ getUserReview }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { handelDeleteReview } = useReviews();

  return (
    <div className="border-border border md:w-1/2 w-full p-2 rounded-md flex justify-between">
      {!toggleEdit ? (
        <>
          <ReviewCard review={getUserReview} />
          <div className="flex flex-col md:flex-row h-fit gap-2">
            <button
              className="bg-red-600 py-1 px-2 rounded-md text-white font-bold"
              onClick={() => handelDeleteReview(getUserReview.id)}>
              {trans("delete")}
            </button>
            <button
              className="bg-primary-main py-1 px-2 rounded-md text-white font-bold"
              onClick={() => setToggleEdit(true)}>
              {trans("edit")}
            </button>
          </div>
        </>
      ) : (
        <UpdateReview
          getUserReview={getUserReview}
          setToggleEdit={setToggleEdit}
        />
      )}
    </div>
  );
}

import { trans } from "@mongez/localization";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { Button } from "apps/front-office/design-system/components/Button";
import EmailInput from "apps/front-office/design-system/components/Form/EmailInput";
import TextInput from "apps/front-office/design-system/components/Form/TextInput";
import TextareaInput from "apps/front-office/design-system/components/Form/TextareaInput";

import { isEmpty } from "@mongez/supportive-is";
import user from "apps/front-office/account/user";
import { updateMeal } from "apps/front-office/menu/services/meals-service";
import { mealAtom } from "../../atoms/meal-atom";
import AddRatings from "../AddRatings";
import { ReviewCard } from "./ReviewCard";

export default function ReviewsSection() {
  const reviews = [];
  const id = mealAtom.use("id");
  console.log(id);

  function handSubmit({ values }: FormSubmitOptions) {
    updateMeal(id, values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <section className="flex gap-8 flex-wrap flex-col lg:flex-row mt-8">
      {reviews && !isEmpty(reviews) ? (
        <div className="space-y-6 flex-1">
          {reviews.map((review, index) => {
            return <ReviewCard key={index} review={review} />;
          })}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center h-36  font-bold text-bodyTextColor text-xl capitalize">
          {trans("noReviews")}
        </div>
      )}
      {!user.isGuest() && (
        <div className="flex-1 text-primary-text space-y-6">
          <div>
            {trans("infoPublishMessage")}{" "}
            <span className="text-red-500">*</span>
          </div>
          <AddRatings />
          <Form onSubmit={handSubmit} className="space-y-6">
            <TextareaInput name="review" label="your review" required />
            <div className="flex gap-4 flex-wrap">
              <TextInput
                name="name"
                required
                label={trans("name")}
                placeholder={trans("name")}
                containerStyle="flex-1 min-w-[200px]"
              />
              <EmailInput
                name="email"
                required
                label={trans("emailAddress")}
                placeholder={trans("emailAddress")}
                containerStyle="flex-1 min-w-[200px]"
              />
            </div>
            <Button className="bg-primary-main hover:bg-primary-hover text-bodyTextColor uppercase py-4 px-10">
              submit
            </Button>
          </Form>
        </div>
      )}
    </section>
  );
}

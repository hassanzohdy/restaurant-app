import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";

export default function DescriptionSection() {
  const { description } = mealAtom.useValue();

  return (
    <section className="text-primary-text max-w-[970px] mx-auto leading-7 py-10 space-y-4">
      <p>{description}</p>
    </section>
  );
}

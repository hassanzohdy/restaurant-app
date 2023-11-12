import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";

export default function DescriptionSection() {
  const { description, ingredients } = mealAtom.useValue();

  return (
    <section className=" text-primary-text max-w-[970px] mx-auto leading-7 space-y-4">
      <p>{description}</p>
      <div>
        <span className="inline-block font-bold mr-2">Ingredients:</span>
        {ingredients}
      </div>
    </section>
  );
}

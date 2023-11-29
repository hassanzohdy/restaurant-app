import { mealAtom } from "../atoms/meal-atom";

export default function IngredientsSection() {
  const ingredients = mealAtom.get("ingredients");

  return (
    <section>
      <div className="text-primary-text max-w-[970px] mx-auto leading-7 py-10">
        <span className="inline-block font-bold mr-2">Ingredients:</span>
        {ingredients}
      </div>
    </section>
  );
}

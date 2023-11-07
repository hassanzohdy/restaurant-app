import { trans } from "@mongez/localization";
import SectionHeading from "apps/front-office/design-system/components/SectionHeading";
import { MealType } from "../../utils/types";
import MealCard from "../MealCard";

export type YouMayAlsoWantToTrySectionProps = {
  // props go here
};

export const meal: MealType = {
  id: 2,
  title: "Italiano Original",
  slug: "Italiano Original",
  shortDescription:
    "Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and fresh basil",
  description:
    "Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
  image:
    "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/26-1.png",
  images: [
    "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/26-1.png",
    "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/26-2.png",
  ],
  price: 20.5,
  category: "pizza",
  isFavorite: false,
  ratings: 4,
  ingredients: [
    "Dr. Praeger’s Black Bean Burger",
    "Focaccia bun",
    "Balsamic Vinaigrette",
    "Pesto",
    "Tomato",
    "Swiss Cheese",
  ],
  nextMeal: {
    id: 3,
    image:
      "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/37-1-450x450.png",
    price: 15,
    sale: 12,
    title: "Pepperoni Calzone",
  },
  prevMeal: {
    id: 1,
    image:
      "https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/20-1-450x450.png",
    price: 15.5,
    title: "Hawaii Vegetarian Pizza",
  },
  reviews: [
    {
      name: "Ahmed",
      image:
        "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
      ratings: 4,
      body: "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
      date: "September 4, 2020",
    },
    {
      name: "Ahmed",
      image:
        "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
      ratings: 4,
      body: "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
      date: "September 4, 2020",
    },
    {
      name: "Ahmed",
      image:
        "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
      ratings: 4,
      body: "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
      date: "September 4, 2020",
    },
  ],
};

const meals = [meal, meal];

export default function YouMayAlsoWantToTrySection() {
  return (
    <div className="container">
      <SectionHeading>{trans("youMayAlsoWant")}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 pt-8 pb-20">
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}

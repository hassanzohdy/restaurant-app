import { atom } from "@mongez/react-atom";
import Helmet from "@mongez/react-helmet";
<<<<<<< HEAD
import DescriptionAndReviews from "./components/DescriptionAndReiews";
import MealDetailsSection from "./components/MealDetailsSection";
import MealTopSection from "./components/MealTopSection";
=======
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import DescriptionAndReviews from "./components/DescriptionAndReviews";
import MealDetailsSection from "./components/MealDetailsSection";
import MealsNavigateBtns from "./components/MealsNavigateBtns";
import { MealType } from "./utils/types";
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f

// export type MealDetailsPageProps = {
//   params: {
//     id: string;
//     slug: string;
//   };
// };

<<<<<<< HEAD
export type ReviewType = {
  name: string;
  image: string;
  ratings: number;
  body: string;
  date: string;
};

export type PopupMealType = {
  id: number;
  title: string;
  price: number;
  sale?: number;
  image: string;
};

export type MealType = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: string;
  isFavorite: boolean;
  ratings: number;
  ingredients: string[];
  reviews: ReviewType[];
  nextMeal: PopupMealType;
  prevMeal: PopupMealType;
};

=======
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
export const mealAtom = atom<MealType>({
  key: "meal",
  default: {},
});

const meal: MealType = {
  id: 2,
  title: "Italiano Original",
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
  reviews: [],
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
};

export default function MealDetailsPage() {
  return (
    <>
      <Helmet
        title={meal.title}
        description={meal.shortDescription}
        image={meal.image}
      />
<<<<<<< HEAD
      <MealTopSection nexMeal={meal.nextMeal} prevMeal={meal.prevMeal} />
=======
      <div className="relative">
        <Breadcrumb navItems={[{ name: meal.title }]} title={meal.title} />
        <MealsNavigateBtns nextMeal={meal.nextMeal} prevMeal={meal.prevMeal} />
      </div>
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
      <MealDetailsSection meal={meal} />
      <DescriptionAndReviews
        description={meal.description}
        ingredients={meal.ingredients}
      />
    </>
  );
}

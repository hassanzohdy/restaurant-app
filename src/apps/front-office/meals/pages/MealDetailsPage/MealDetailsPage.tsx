import { atom } from "@mongez/react-atom";
import Helmet from "@mongez/react-helmet";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import DescriptionAndReiews from "./components/DescriptionAndReiews";
import { MealImagesSide } from "./components/MealImagesSide";
import { MealRightSide } from "./components/MealRightSide";
import MealsNavigateBtns from "./components/MealsNavigateBtns";

// export type MealDetailsPageProps = {
//   params: {
//     id: string;
//     slug: string;
//   };
// };

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
  isFavourite: boolean;
  ratings: number;
  ingredients: string[];
  reviews: ReviewType[];
  nextMeal: PopupMealType;
  prevMeal: PopupMealType;
};

export const mealAtom = atom<MealType>({
  key: "meal",
  default: {},
});

export default function MealDetailsPage() {
  // const [data, setData] = useState({
  //   data: undefined,
  //   isLoading: true,
  //   error: undefined,
  // });

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
    isFavourite: false,
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

  // useOnce(() => {
  //   getMeal(params.id)
  //     .then(response => {
  //       setData({
  //         isLoading: false,
  //         data: response.data,
  //         error: undefined,
  //       });
  //     })
  //     .catch(error => {
  //       setData({
  //         isLoading: false,
  //         data: undefined,
  //         error,
  //       });
  //     });
  // });

  // if (data.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (data.error) {
  //   return <div>Error</div>;
  // }

  // const meal = (data as any).meal;

  return (
    <>
      <Helmet
        title={meal.title}
        description={meal.shortDescription}
        image={meal.image}
      />
      <section className="bg-primary-orange-100 py-6 text-primary-text relative">
        <div className="container flex justify-between">
          <img
            src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/09/breadcrumb1.jpg"
            alt="Breadcrumbs background image"
            className="absolute h-full inset-0 w-full object-cover"
            aria-hidden="true"
          />
          <BreadCrumbs />
          <MealsNavigateBtns
            nextMeal={meal.nextMeal}
            prevMeal={meal.prevMeal}
          />
        </div>
      </section>

      <section className="py-20 flex gap-10 sm:flex-row flex-col container relative">
        <MealImagesSide images={meal.images} />
        <MealRightSide {...meal} />
      </section>

      <DescriptionAndReiews
        description={meal.description}
        ingredients={meal.ingredients}
      />
    </>
  );
}

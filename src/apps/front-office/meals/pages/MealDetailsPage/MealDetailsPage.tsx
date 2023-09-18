import { atom } from "@mongez/react-atom";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { getMeal } from "apps/front-office/meals/services/meals-service";
import { useState } from "react";

export type MealDetailsPageProps = {
  params: {
    id: string;
    slug: string;
  };
};

export type Meal = {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
};

export const mealAtom = atom<Meal>({
  key: "meal",
  default: {},
});

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
  const [data, setData] = useState({
    data: undefined,
    isLoading: true,
    error: undefined,
  });

  useOnce(() => {
    getMeal(params.id)
      .then(response => {
        setData({
          isLoading: false,
          data: response.data,
          error: undefined,
        });
      })
      .catch(error => {
        setData({
          isLoading: false,
          data: undefined,
          error,
        });
      });
  });

  if (data.isLoading) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>Error</div>;
  }

  const meal = (data as any).meal;

  return (
    <>
      <Helmet
        title={meal.title}
        description={meal.shortDescription}
        image={meal.image}
      />
    </>
  );
}

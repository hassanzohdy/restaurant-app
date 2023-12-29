import { trans } from "@mongez/localization";
import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import PopularDishesItem from "./PopularDishesItem/PopularDishesItem";
import PopularDishesTabs from "./PopularDishesTabs/PopularDishesTabs";
import styles from "./styles.module.scss";

export type PopularDishesProps = {
  meals: Meal[];
};

export default function PopularDishes({ meals: _ }: PopularDishesProps) {
  return (
    <div className={styles.popularDishes}>
      <h1>{trans("PopularDishes")}</h1>
      <PopularDishesTabs />
      <PopularDishesItem />
    </div>
  );
}

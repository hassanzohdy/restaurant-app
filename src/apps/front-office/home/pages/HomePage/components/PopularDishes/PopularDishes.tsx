import { trans } from "@mongez/localization";
import PopularDishesItem from "./PopularDishesItem/PopularDishesItem";
import PopularDishesTabs from "./PopularDishesTabs/PopularDishesTabs";
import styles from "./styles.module.scss";

export default function PopularDishes() {
  return (
    <div className={`${styles.popularDishes} container py-20`}>
      <h1>{trans("PopularDishes")}</h1>
      <PopularDishesTabs />
      <PopularDishesItem />
    </div>
  );
}

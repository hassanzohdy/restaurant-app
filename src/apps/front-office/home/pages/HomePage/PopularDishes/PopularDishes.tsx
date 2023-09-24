import PopularDishesItem from "./PopularDishesItem/PopularDishesItem";
import PopularDishesTabs from "./PopularDishesTabs/PopularDishesTabs";
import styles from "./styles.module.scss"
export type PopularDishesProps = {
  children: React.ReactNode;
};
export default function PopularDishes() {
  return (
    <div className={styles.popularDishes}>
      <h1>PopularDishes</h1>
      <PopularDishesTabs />
      <PopularDishesItem />
    </div>
  );
}

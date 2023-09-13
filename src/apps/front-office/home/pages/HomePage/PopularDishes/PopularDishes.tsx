import PopularDishesItem from "./PopularDishesItem/PopularDishesItem";
import PopularDishesTabs from "./PopularDishesTabs/PopularDishesTabs";

export type PopularDishesProps = {
  children: React.ReactNode;
};
export default function PopularDishes() {
  return (
    <>
      <h1>PopularDishes</h1>
      <PopularDishesTabs />
      <PopularDishesItem />
    </>
  );
}

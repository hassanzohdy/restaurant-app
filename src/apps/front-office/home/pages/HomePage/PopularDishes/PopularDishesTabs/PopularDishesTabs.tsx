import styles from "./styles.module.scss";
export type PopularDishesTabsProps = {
  children: React.ReactNode;
};
export default function PopularDishesTabs() {
  return (
    <>
      <div className={styles.tabs}>
        <ul>
          <li>pizza</li>
          <li>sushi</li>
          <li>salats</li>
          <li>burger</li>
          <li>Dersest</li>
        </ul>
      </div>
    </>
  );
}

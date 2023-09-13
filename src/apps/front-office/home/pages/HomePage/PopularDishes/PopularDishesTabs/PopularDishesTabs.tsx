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
        </ul>
      </div>
    </>
  );
}

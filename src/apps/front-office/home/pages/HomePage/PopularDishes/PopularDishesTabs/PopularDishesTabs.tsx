import { trans } from "@mongez/localization";
import styles from "./styles.module.scss";
export type PopularDishesTabsProps = {
  children: React.ReactNode;
};
export default function PopularDishesTabs() {
  return (
    <>
      <div className={styles.tabs}>
        <ul>
          <li>{trans("pizza")}</li>
          <li>{trans("sushi")}</li>
          <li>{trans("salats")}</li>
          <li>{trans("burger")}</li>
          <li>{trans("sweets")}</li>
        </ul>
      </div>
    </>
  );
}

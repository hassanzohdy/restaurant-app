import { trans } from "@mongez/localization";
import { useEvent } from "@mongez/react-hooks";
import { popularDishesAtom } from "apps/front-office/home/atoms/popular-dishes-atom";
import { type Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";
import { useState } from "react";
import styles from "./styles.module.scss";

export type PopularDishesTabsProps = {
  children: React.ReactNode;
};

export default function PopularDishesTabs() {
  const tabs = popularDishesAtom.get("tabs");

  return (
    <>
      <div className={styles.tabs}>
        <ul>
          <Tab
            tab={{
              id: 0,
              name: trans("all"),
            }}
          />
          {tabs.map(tab => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </ul>
      </div>
    </>
  );
}

type TabProps = {
  tab: {
    id: number;
    name: string;
    meals?: Meal[];
  };
};

function Tab({ tab }: TabProps) {
  const [activeTab, setIsActiveTab] = useState(
    tab.id === popularDishesAtom.get("activeTab"),
  );

  useEvent(() =>
    popularDishesAtom.onChange((value, oldValue) => {
      if (value.activeTab === tab.id) {
        setIsActiveTab(true);
      } else if (oldValue.activeTab === tab.id) {
        setIsActiveTab(false);
      }
    }),
  );

  return (
    <li
      className={activeTab ? styles.active : ""}
      role="button"
      onClick={() => popularDishesAtom.change("activeTab", tab.id)}>
      {tab.name}
    </li>
  );
}

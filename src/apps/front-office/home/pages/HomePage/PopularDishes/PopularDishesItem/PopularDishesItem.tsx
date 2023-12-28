import { trans } from "@mongez/localization";
import Blueberry from "assets/images/menuItems/blueberry.png";
import lemon from "assets/images/menuItems/lemon.png";
import Pizza from "assets/images/menuItems/pizza.png";
import Pizza2 from "assets/images/menuItems/pizza2.png";
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import DetailsButton from "../DetailsButton";
import styles from "./styles.module.scss";

export type PopularDishesItemProps = {
  children: React.ReactNode;
};
export default function PopularDishesItem() {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className="container">
          <div className={styles.PopularDishesItemWrapper}>
            <div className={styles.PopularDishesItem}>
              <div className={styles.heartIcon}>
                <AiFillHeart color="#ddd" fill="#ddd" size={30}></AiFillHeart>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img src={Pizza2} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>{trans("Italiano")}</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <del className={styles.itemPriceDel}>£12.63 </del>
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <TbShoppingBag color="#000"></TbShoppingBag>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.PopularDishesItem}>
              <div className={styles.heartIcon}>
                <AiFillHeart color="red" fill="red" size={30}></AiFillHeart>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img src={lemon} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <TbShoppingBag color="#000"></TbShoppingBag>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.PopularDishesItem}>
              <div className={styles.heartIcon}>
                <AiFillHeart color="red" fill="red" size={30}></AiFillHeart>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img src={Blueberry} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>{trans("Blueberry")}</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <del className={styles.itemPriceDel}>£12.63 </del>
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <TbShoppingBag color="#000"></TbShoppingBag>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.PopularDishesItem}>
              <div className={styles.heartIcon}>
                <AiFillHeart color="red" fill="red" size={30}></AiFillHeart>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img src={Pizza} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>{trans("Italiano")} </h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <TbShoppingBag color="#000"></TbShoppingBag>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={styles.PopularDishesItem}>
              <div className={styles.heartIcon}>
                <AiFillHeart color="red" fill="red" size={30}></AiFillHeart>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.image}>
                  <img src={Pizza2} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <TbShoppingBag color="#000"></TbShoppingBag>
                </div>
              </div>
            </div>
          </div>
          <DetailsButton />
        </div>
      </div>
    </>
  );
}

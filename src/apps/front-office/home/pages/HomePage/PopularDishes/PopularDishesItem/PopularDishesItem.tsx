import { Card } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { IconHeart, IconShoppingBag } from "@tabler/icons-react";
import styles from "./styles.module.scss";
import Pizza from "/public/images/menuItems/pizza.png";
import Pizza2 from "/public/images/menuItems/pizza2.png";
import lemon from "/public/images/menuItems/lemon.png";
import Blueberry from "/public/images/menuItems/blueberry.png";
import { trans } from "@mongez/localization";

export type PopularDishesItemProps = {
  children: React.ReactNode;
};
export default function PopularDishesItem() {
  return (
    <>
      <Container className={styles.cardContainer}>
        <div className={styles.PopularDishesItemWrapper}>
          <Card variant="outlined" className={styles.PopularDishesItem}>
            <Container>
              <div className={styles.heartIcon}>
                <IconHeart color="red" fill="red" size={30}></IconHeart>
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
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <IconShoppingBag color="#000"></IconShoppingBag>
                </div>
              </div>
            </Container>
          </Card>
          {/*  */}
          <Card variant="outlined" className={styles.PopularDishesItem}>
            <Container>
              <div className={styles.heartIcon}>
                <IconHeart color="red" fill="red" size={30}></IconHeart>
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
                  <IconShoppingBag color="#000"></IconShoppingBag>
                </div>
              </div>
            </Container>
          </Card>
          {/*  */}
          <Card variant="outlined" className={styles.PopularDishesItem}>
            <Container>
              <div className={styles.heartIcon}>
                <IconHeart color="red" fill="red" size={30}></IconHeart>
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
                <span className={styles.itemPrice}>£12.63</span>
                <div className={styles.shopCard}>
                  <IconShoppingBag color="#000"></IconShoppingBag>
                </div>
              </div>
            </Container>
          </Card>
          {/*  */}
          <Card variant="outlined" className={styles.PopularDishesItem}>
            <Container>
              <div className={styles.heartIcon}>
                <IconHeart color="red" fill="red" size={30}></IconHeart>
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
                  <IconShoppingBag color="#000"></IconShoppingBag>
                </div>
              </div>
            </Container>
          </Card>
          {/*  */}
          <Card variant="outlined" className={styles.PopularDishesItem}>
            <Container>
              <div className={styles.heartIcon}>
                <IconHeart color="red" fill="red" size={30}></IconHeart>
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
                  <IconShoppingBag color="#000"></IconShoppingBag>
                </div>
              </div>
            </Container>
          </Card>
        </div>
      </Container>
    </>
  );
}

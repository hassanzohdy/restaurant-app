import { IconHeart } from "@tabler/icons-react";
import Pizze from "/public/images/menuItems/pizza.png";
import Container from "@material-ui/core/Container";
import styles from "./styles.module.scss";
import { Card } from "@material-ui/core";
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
                  <img src={Pizze} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
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
                  <img src={Pizze} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
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
                  <img src={Pizze} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
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
                  <img src={Pizze} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
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
                  <img src={Pizze} />
                </div>
              </div>
              <div className={styles.info}>
                <h3>Italiano Original</h3>
                <p>
                  Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped
                  with lightly
                </p>
                <span className={styles.itemPrice}>£12.63</span>
              </div>
            </Container>
          </Card>
        </div>
      </Container>
    </>
  );
}

import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import PopularMealItem from "./PopularMealItem";

const popularMeals = [
  {
    name: "chicken",
    details:
      "Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.",
    image: popularMealImage1,
  },
  {
    name: "Burger",
    details:
      "Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.",
    image: popularMealImage2,
  },
  {
    name: "Pizza Douce",
    details:
      "Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat.",
    image: popularMealImage3,
  },
];

export default function AboutUsPopularMeals() {
  return (
    <>
      <section className="about-popular-meals pt-[80px] pb-[100px] max-xl:pt-[40px] max-lg:pb-[80px] max-md:pt-[80px]  max-sm:py-[70px]">
        {popularMeals.map((meal, index) => (
          <PopularMealItem
            key={index}
            name={meal.name}
            details={meal.details}
            image={meal.image}
          />
        ))}
      </section>
    </>
  );
}

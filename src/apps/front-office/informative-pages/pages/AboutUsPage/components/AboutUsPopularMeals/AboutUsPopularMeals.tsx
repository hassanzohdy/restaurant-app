import popularMealImage1 from "assets/images/about-us/popular-meal-image-1.png";
import popularMealImage2 from "assets/images/about-us/popular-meal-image-2.png";
import popularMealImage3 from "assets/images/about-us/popular-meal-image-3.png";
import PopularMealItem from "./PopularMealItem";

export default function AboutUsPopularMeals() {
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

  return (
    <>
      <section className="about-popular-meals py-[50px] max-sm:py-[20px]">
        {popularMeals.map(meal => (
          <PopularMealItem
            name={meal.name}
            details={meal.details}
            image={meal.image}
          />
        ))}
      </section>
    </>
  );
}

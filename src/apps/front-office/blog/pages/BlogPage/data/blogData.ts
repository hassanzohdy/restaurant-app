import img1 from "shared/assets/images/Blog/blog-1-500x330.jpg";
import img2 from "shared/assets/images/Blog/blog-2-500x330.jpg";
import img3 from "shared/assets/images/Blog/blog-3-500x330.jpg";
import img4 from "shared/assets/images/Blog/blog-4-500x330.jpg";
import img5 from "shared/assets/images/Blog/blog-5-500x330.jpg";
import img6 from "shared/assets/images/Blog/blog-7-500x330.jpg";

const blogData = [
  {
    id: 1,
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    slug: "Easy 4 Ingredient Hatch Salsa Verde",
    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",
    img: img1,
  },
  {
    id: 2,
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    slug: "Easy 4 Ingredient Hatch Salsa Verde",

    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",

    img: img2,
  },
  {
    id: 3,
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    slug: "Easy 4 Ingredient Hatch Salsa Verde",

    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",

    img: img3,
  },
  {
    id: 4,
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    slug: "Easy 4 Ingredient Hatch Salsa Verde",

    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",
    img: img4,
  },
  {
    id: 5,
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    slug: "Easy 4 Ingredient Hatch Salsa Verde",

    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",
    img: img5,
  },
  {
    id: 6,
    slug: "Easy 4 Ingredient Hatch Salsa Verde",
    title: "Easy 4 Ingredient Hatch Salsa Verde",
    description:
      "Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac. Nec hac",
    img: img6,
  },
];

export function getBlogData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(blogData);
    }, 100);
  });
}

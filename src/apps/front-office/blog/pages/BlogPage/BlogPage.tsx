import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { getBlogData } from "./data/blogData";

export default function BlogPage() {
  const [blogData, setBlogData] = useState<any>([]);
  useOnce(() => {
    getBlogData().then(response => setBlogData(response));
  });
  return (
    <>
      <Helmet title={trans("blog")} />
      <Breadcrumb title="blog" navItems={[{ name: "blog" }]} />
      {!blogData ||
        (blogData.length === 0 && (
          <h3 className="mt-5 text-center text-orange-500 font-bold">
            {trans("noBlogHere")}
          </h3>
        ))}
      <div className="flex flex-wrap justify-between w-[94%] mx-auto mt-20">
        {blogData.map(data => {
          return <BlogCard blog={data} key={data.id} />;
        })}
      </div>
    </>
  );
}

import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import BlogCard from "../BlogCard";
import { PaginationInfo } from "../BlogPage";
import Pagination from "./Pagination";

export type BlogListProps = {
  blogData: any;
  pagination: PaginationInfo;
};
export default function BlogList({ blogData, pagination }: BlogListProps) {
  return (
    <>
      <Helmet title={trans("blog")} />
      <Breadcrumb title="blog" navItems={[{ name: "blog" }]} />
      <div className="blog-list py-[70px]">
        <div className="container">
          {!blogData ||
            (blogData.length === 0 && (
              <h3 className="mt-10 text-center text-primary-main font-bold text-3xl">
                {trans("noBlogHere")}
              </h3>
            ))}
          <div className="grid grid-cols-3 gap-8">
            {blogData.map(data => {
              return <BlogCard blog={data} key={data.id} />;
            })}
          </div>
          <Pagination pagination={pagination} />
        </div>
      </div>
    </>
  );
}

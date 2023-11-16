import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { useState } from "react";
import { getPosts } from "../../services";
import BlogCard from "./BlogCard";
import Pagination from "./components/Pagination";

export type PaginationInfo = {
  limit: number;
  page: number;
  total: number;
  pages: number;
  results: number;
};

export default function BlogPage() {
  const [blogData, setBlogData] = useState<any>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setIsLoading] = useState(true);

  useOnce(() => {
    getPosts({
      ...queryString.all(),
      limit: 6,
    }).then(response => {
      setBlogData(response.data.posts);
      setPagination(response.data.paginationInfo);
      setIsLoading(false);
    });
  });
  return (
    <>
      {loading && (
        <>
          <div className="flex gap-2 justify-center my-4">
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
            <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
          </div>
        </>
      )}
      {!loading && (
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
          <Pagination pagination={pagination} />
        </>
      )}
    </>
  );
}

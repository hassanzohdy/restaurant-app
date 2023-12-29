import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { Link, queryString } from "@mongez/react-router";
import BlogCard from "apps/front-office/blog/pages/BlogPage/BlogCard";
import { getPosts } from "apps/front-office/blog/services";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function LatestNews() {
  const [blogData, setBlogData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useOnce(() => {
    getPosts({
      ...queryString.all(),
      limit: 3,
    })
      .then(response => {
        setBlogData(response.data.posts);
      })
      .catch(error => {
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) return <Loader />;

  if (error || !blogData) return null;

  return (
    <section className="latest-news py-[100px] max-lg:py-[80px] max-sm:py-[70px]">
      <div className="container">
        <div className="heading flex justify-between items-center mb-10">
          <h2 className="text-[42px] font-bold">{trans("latestNews")}</h2>
          <Link
            to={URLS.blog.list}
            className="flex text-[15px] font-semibold group gap-2">
            {trans("seeMore")}
            <MdKeyboardArrowRight className="w-[24px] h-[24px] rounded-md bg-secondary text-white rtl:rotate-180 group-hover:bg-primary-main duration-500 transition-all ease-in-out" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {blogData.map(data => {
            return <BlogCard blog={data} key={data.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

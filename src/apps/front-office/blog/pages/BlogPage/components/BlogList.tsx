import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { currentRoute, navigateTo } from "@mongez/react-router";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdManageSearch } from "react-icons/md";
import blogBanner from "shared/assets/images/Blog/blog-banner.png";
import BlogCard from "../BlogCard";
import { PaginationInfo } from "../BlogPage";
import Pagination from "./Pagination";
export type BlogListProps = {
  blogData: any;
  pagination: PaginationInfo;
  params?: any;
};

const NoBlogInfo = {
  title: trans("noBlogHere"),
  icon: <MdManageSearch size="150" />,
};

export default function BlogList({
  blogData,
  pagination,
  params,
}: BlogListProps) {
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
      navigateTo(URLS.blog.viewPostSearch(event.target.value));
    }
  };

  const route = currentRoute();

  const breadcrumb = (
    <Breadcrumb
      title="blog"
      navItems={
        route === URLS.blog.list
          ? [{ name: "blog", url: URLS.blog.list }]
          : route === URLS.blog.viewPostSearch(params.searchText)
            ? [
                { name: "blog", url: URLS.blog.list },
                { name: `${trans("searchFor")} (${params.searchText})` },
              ]
            : route ===
                `${URLS.blog.list}/keywords/${params.keywordId}/${params.keyword}`
              ? [
                  { name: "blog", url: URLS.blog.list },
                  {
                    name: `${trans("searchFor")} (${params.keyword}) ${trans(
                      "tag",
                    )}`,
                  },
                ]
              : [{ name: "blog", url: URLS.blog.list }]
      }
    />
  );

  return (
    <>
      <Helmet title={trans("blog")} />
      {breadcrumb}
      <div className="blog-list py-[70px] container">
        {!blogData ||
          (blogData.length === 0 ? (
            <EmptyComponent {...NoBlogInfo} />
          ) : (
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="grid grid-cols-1  lg:grid-cols-3 w-[100%] gap-6 lg:w-[75%]">
                {blogData.map(data => {
                  return <BlogCard blog={data} key={data.id} />;
                })}
              </div>
              <div className=" lg:flex lg:w-[23%] w-[100%]">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center">
                    <input
                      placeholder={trans("search")}
                      className="border py-2 px-5 rounded-full w-full focus:border-primary-main rtl:pl-12 ltr:pr-12"
                      defaultValue={searchText}
                      onKeyDown={handleKeyDown}
                    />
                    <BsSearch color="gray" className="ltr:-ml-10 rtl:-mr-8" />
                  </div>
                  <div>
                    <img
                      src={blogBanner}
                      alt="blogBanner"
                      className="rounded-md max-lg:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Pagination pagination={pagination} />
      </div>
    </>
  );
}

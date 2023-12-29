import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { currentRoute, navigateTo } from "@mongez/react-router";
import EmptyComponent from "apps/front-office/design-system/components/EmptyComponent";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import { isLTR } from "apps/front-office/utils/helpers";
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

  return (
    <>
      <Helmet title={trans("blog")} />
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
      <div className="blog-list py-[70px]">
        <div className="container">
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
                <div className=" lg:flex lg:w-[23%]  w-[100%]  ">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center ">
                      <input
                        placeholder={trans("search")}
                        className="border  p-2 rounded-full w-full focus:border-primary-main"
                        defaultValue={searchText}
                        onKeyDown={handleKeyDown}
                      />
                      <BsSearch
                        color="gray"
                        className={isLTR() ? `-ml-10` : `-mr-8`}
                      />
                    </div>
                    <div>
                      <img
                        src={blogBanner}
                        alt="blogBanner"
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <Pagination pagination={pagination} />
        </div>
      </div>
    </>
  );
}

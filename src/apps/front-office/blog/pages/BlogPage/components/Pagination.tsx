export type PaginationProps = {
  pagination: PaginationInfo;
};

import {
  Link,
  currentRoute,
  navigateTo,
  queryString,
} from "@mongez/react-router";
import { createArray } from "apps/front-office/blog/utils";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { PaginationInfo } from "../BlogPage";

export default function Pagination({ pagination }: PaginationProps) {
  const [num, setNum] = useState(pagination.page);
  const totalPages = pagination.pages;
  if (totalPages < 2) return null;
  const pages = createArray(totalPages);
  function Next() {
    navigateToPage(totalPages);
    setNum(totalPages);
  }
  function back() {
    num > 1 && navigateToPage(1);
    setNum(1);
  }

  const pageRoute = page => {
    return (
      currentRoute() +
      "?" +
      queryString.toQueryString({ ...queryString.all(), page })
    );
  };

  const navigateToPage = page => {
    navigateTo(pageRoute(page));
  };
  return (
    <div className="flex justify-center my-4">
      <div className="flex bg-white rounded-lg font-[Poppins]">
        <button
          onClick={back}
          className="h-12 border-2 border-r-0 border-primary-main
               px-4 rounded-l-lg hover:bg-primary-hover hover:text-white">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"></path>
          </svg>
        </button>
        {pages.map(page => (
          <Link
            to={`${URLS.blog.list}?page=${page}`}
            key={page}
            className={` flex h-12 border-2 items-center justify-center  border-r-0 hover:bg-primary-hover  hover:text-white border-primary-main
               w-12 ${num === page && "bg-primary-main  text-white"}`}>
            {page}
          </Link>
        ))}
        <button
          onClick={Next}
          className="h-12 border-2  border-primary-main
               px-4 rounded-r-lg  hover:bg-primary-hover hover:text-white">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
              fillRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

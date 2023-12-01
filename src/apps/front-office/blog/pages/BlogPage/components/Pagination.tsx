export type PaginationProps = {
  pagination: PaginationInfo;
};

import { Link } from "@mongez/react-router";
import { createArray } from "apps/front-office/blog/utils";
import { isLTR } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PaginationInfo } from "../BlogPage";
export default function Pagination({ pagination }: PaginationProps) {
  const [num] = useState(pagination.page);
  const totalPages = pagination.pages;

  if (totalPages < 2) return null;

  const pages = createArray(totalPages);

  return (
    <div className="flex justify-center my-4">
      <div className="flex bg-white rounded-lg font-[Poppins] gap-2">
        {pagination.page > 1 && (
          <Link
            to={`${URLS.blog.list}?page=${1}`}
            className=" flex items-center justify-center h-8 w-8 border-2  border-primary-main
               rounded-full hover:bg-primary-hover hover:text-white">
            {isLTR() ? (
              <FaChevronLeft size=".7rem" color="gray" />
            ) : (
              <FaChevronRight size=".7rem" color="gray" />
            )}
          </Link>
        )}
        {pages.map(page => (
          <Link
            to={`${URLS.blog.list}?page=${page}`}
            key={page}
            className={` flex h-8 rounded-full border-2 items-center justify-center  hover:bg-primary-hover  hover:text-white border-primary-main
               w-8 ${num === page && "bg-primary-main  text-white"}`}>
            {page}
          </Link>
        ))}
        {pagination.page < pagination.pages && (
          <Link
            to={`${URLS.blog.list}?page=${totalPages}`}
            className=" flex items-center justify-center h-8 border-2  border-primary-main
            rounded-full w-8 hover:bg-primary-hover hover:text-white">
            {isLTR() ? (
              <FaChevronRight size=".7rem" color="gray" />
            ) : (
              <FaChevronLeft size=".7rem" color="gray" />
            )}
          </Link>
        )}
      </div>
    </div>
  );
}

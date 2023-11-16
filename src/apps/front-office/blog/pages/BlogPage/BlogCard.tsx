import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { Post } from "apps/front-office/blog/utils";
import URLS from "apps/front-office/utils/urls";

export default function BlogCard({ blog }: { blog: Post }) {
  return (
    <div className="w-[100%] mb-4 rounded-lg flex flex-col gap-2 h-[450px] border border-gray-300 lg:w-[32%]">
      <Link to={URLS.blog.viewPost(blog)}>
        <div className="w-full h-[250px] overflow-hidden rounded-tr-lg rounded-tl-lg ">
          <img
            src={blog.image.url}
            alt={blog.title}
            className="w-full h-full rounded-tr-lg rounded-tl-lg hover:scale-110 transition duration-300 "
          />
        </div>
      </Link>
      <div className="p-5 flex flex-col gap-2">
        <Link to={URLS.blog.viewPost(blog)}>
          <h3 className="font-bold  hover:text-primary-hover transition duration-150 cursor-pointer">
            {blog.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-md">
          {blog.shortDescription.substring(0, 100)}
        </p>
        <Link to={URLS.blog.viewPost(blog)}>
          <button
            type="button"
            className="rounded-lg bg-primary-main hover:bg-primary-hover hover:text-white w-fit font-bold px-8 pb-3 pt-3 text-xs  uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]">
            {trans("readMore")}
          </button>
        </Link>
      </div>
    </div>
  );
}

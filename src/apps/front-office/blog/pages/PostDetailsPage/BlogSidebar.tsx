import { trans } from "@mongez/localization";
import { Link, navigateTo } from "@mongez/react-router";
import { Post } from "apps/front-office/blog/utils";
import { isLTR } from "apps/front-office/utils/helpers";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import blogBanner from "shared/assets/images/Blog/pexels-photo-7358062.jpg";
export type BlogSidebarProps = {
  post: Post;
};

export default function BlogSidebar({ post }: BlogSidebarProps) {
  const [searchText, setSearchText] = useState("");
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
      navigateTo(URLS.blog.viewPostSearch(event.target.value));
    }
  };

  return (
    <>
      <div className=" lg:flex lg:w-[22%]  w-[100%] my-4 ">
        <div className="flex flex-col gap-10">
          <div className="flex items-center ">
            <input
              placeholder={trans("search")}
              className="border  p-2 rounded-full w-full focus:border-primary-main"
              defaultValue={searchText}
              onKeyDown={handleKeyDown}
            />
            <BsSearch color="gray" className={isLTR() ? `-ml-10` : `-mr-8`} />
          </div>

          {post && post.keywords && post.keywords.length > 0 && (
            <div>
              <h3 className="pb-3 font-bold text-gray-800 border-b border-dashed border-gray-300">
                {trans("tags")}
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {post?.keywords.map(tag => {
                  return (
                    <Link key={tag.id} to={URLS.blog.viewPostTag(tag)}>
                      <div className="border border-gray-300 px-2 py-1 text-gray-700 rounded-2xl hover:text-primary-main hover:border-primary-main cursor-pointer">
                        {tag.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
          <div>
            <img src={blogBanner} alt="blogBanner" className="rounded-md" />
          </div>
          {/* <div className="bg-primary-main rounded-lg flex flex-col items-center mb-4">
            <div className="flex flex-col mt-4 text-center">
              <h3 className="text-white font-bold text-[1.5rem] font-['norican']">
                Super Delicious
              </h3>
              <h2 className="text-green-700 font-bold text-[3rem]">Chicken</h2>
              <p className="text-white">call us now:</p>
              <h3 className="text-red-700 font-bold text-[1.5rem]">
                1-800-555-333
              </h3>
            </div>
            <div>
              <img src={banner} alt="banner" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

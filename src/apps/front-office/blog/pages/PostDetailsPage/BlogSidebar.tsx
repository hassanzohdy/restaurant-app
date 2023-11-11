import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { BsSearch } from "react-icons/bs";
import banner from "shared/assets/images/Blog/widgets_blog2.png";
import { categories } from "../BlogPage/data/blogData";

export type BlogSidebarProps = {
  blogData: any;
};
export default function BlogSidebar({ blogData }: BlogSidebarProps) {
  return (
    <>
      <div className="hidden lg:flex lg:w-[22%]">
        <div className="flex flex-col gap-10">
          <div className="flex items-center ">
            <input
              type="search"
              placeholder="Search..."
              className="border border-primary-main p-3 rounded-full w-full"
            />
            <BsSearch className="-ml-10" />
          </div>
          <div className="border border-gray-200 p-2 rounded-2xl">
            <h4 className="font-bold text-gray-800">{trans("categories")}</h4>
            <div className="bg-[#FBF7E8] rounded-2xl p-4 mt-3 flex flex-col gap-4 text-gray-500">
              {categories.map(category => {
                return (
                  <div key={category.id} className="flex justify-between ">
                    <div className="flex gap-2 items-center hover:text-primary-main transition duration-150 cursor-pointer ">
                      <category.icon />
                      <p>{trans(category.title)}</p>
                    </div>
                    <p>({category.item})</p>
                  </div>
                );
              })}
            </div>
          </div>

          {blogData && blogData.recentPosts && (
            <div>
              <h3 className="pb-3 border-b border-dashed font-bold text-gray-800 border-gray-300">
                {trans("recentPosts")}
              </h3>
              <div className="flex flex-col gap-6 mt-4">
                {blogData?.recentPosts.map(post => {
                  return (
                    <div className="flex gap-3" key={post.id}>
                      <div className="w-[140px] h-[80px] ">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <Link to={URLS.blog.viewPost(post)}>
                          <h3 className="font-[500]  hover:text-primary-main transition duration-150">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {blogData && blogData.tags && (
            <div>
              <h3 className="pb-3 font-bold text-gray-800 border-b border-dashed border-gray-300">
                {trans("popularTags")}
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {blogData?.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-gray-300 px-2 py-1 text-gray-700 rounded-2xl hover:text-primary-main hover:border-primary-main cursor-pointer">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          <div className="bg-primary-main rounded-lg flex flex-col items-center mb-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

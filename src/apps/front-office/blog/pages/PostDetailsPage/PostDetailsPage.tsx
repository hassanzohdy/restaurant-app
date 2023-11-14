import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import { Post } from "apps/front-office/blog/utils";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { TbQuote } from "react-icons/tb";
import { getPost, getPostSiblings } from "../../services";
import BlogSidebar from "./BlogSidebar";

export default function PostDetailsPage({ params }: { params: any }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setIsLoading] = useState(true);

  const [postSiblings, setPostSiblings] = useState<any>({
    prev: null,
    next: null,
  });

  useOnce(() => {
    getPostSiblings(params.id).then(response => {
      setPostSiblings({
        prev: response.data.prev,
        next: response.data.next,
      });
    });

    getPost(params.id).then(response => {
      setPost(response.data.post);
      setIsLoading(false);
    });
  });

  const prevBlog = postSiblings.prev;
  const nextBlog = postSiblings.next;

  if (loading) {
    return (
      <>
        <div className="flex gap-2 justify-center my-4">
          <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
          <div className="w-5 h-5 rounded-full animate-pulse bg-primary-main"></div>
        </div>
      </>
    );
  }

  if (!post) return null;

  return (
    <>
      <Helmet description={post?.shortDescription} title={post.title} />
      <Breadcrumb
        title={post.title}
        navItems={[
          { name: "blog", url: URLS.blog.list },
          { name: `${post.title}` },
        ]}
      />
      <div className="w-[95%] mx-auto mt-8">
        <div className="flex justify-between">
          <div className=" w-[100%] lg:w-[75%]">
            <div className="w-[100%]  rounded-lg flex flex-col gap-2  border border-gray-300  mb-10">
              <div className="w-full h-[450px]">
                <img
                  src={post.image.url}
                  alt={post.title}
                  className="w-full h-auto max-h-full rounded-tr-lg rounded-tl-lg object-cover"
                />
              </div>
              <div className="p-5 pb-10 flex flex-col gap-2">
                <h2 className="font-bold text-3xl w-fit hover:text-primary-hover transition duration-150 cursor-pointer">
                  {post.title}
                </h2>
                {/* <p className="text-gray-400">
                  Post By{post.postBy} / {post.date}
                </p> */}
                <p
                  className="text-gray-400 text-md"
                  dangerouslySetInnerHTML={{
                    __html: post.description,
                  }}
                />

                <div className="flex gap-2 items-center">
                  <TbQuote className="text-primary-main" size={"3.5rem"} />
                  <h3
                    className="font-bold"
                    dangerouslySetInnerHTML={{
                      __html: post.shortDescription,
                    }}
                  />
                </div>
                <p
                  className="text-gray-400 text-md"
                  dangerouslySetInnerHTML={{
                    __html: post.description,
                  }}
                />
              </div>
            </div>
            <div className="my-4 flex p-5 justify-between bg-[#F7F4EF] rounded-lg">
              {prevBlog && (
                <Link to={URLS.blog.viewPost(prevBlog)}>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500">{trans("prevPost")}</p>
                    <h3 className=" hover:text-primary-hover transition duration-150 cursor-pointer">
                      {prevBlog.title}
                    </h3>
                  </div>
                </Link>
              )}
              {nextBlog && (
                <Link to={URLS.blog.viewPost(nextBlog)}>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500">{trans("nextPost")}</p>
                    <h3 className=" hover:text-primary-hover transition duration-150 cursor-pointer">
                      {nextBlog.title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <BlogSidebar post={post} />
        </div>
      </div>
    </>
  );
}

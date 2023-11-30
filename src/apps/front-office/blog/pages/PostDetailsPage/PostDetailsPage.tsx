import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Post } from "apps/front-office/blog/utils";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { TbQuote } from "react-icons/tb";
import { getPost } from "../../services";
import PostSiblings from "../BlogPage/components/PostSiblings";
import BlogSidebar from "./BlogSidebar";
import "./style.scss";
export default function PostDetailsPage({ params }: { params: any }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setIsLoading] = useState(true);

  useOnce(() => {
    getPost(params.id).then(response => {
      setPost(response.data.post);
      setIsLoading(false);
    });
  });

  if (loading) {
    return (
      <>
        <Loader />
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
      <div className="post-details py-[70px]">
        <div className="container">
          <div className="flex justify-between flex-wrap">
            <div className=" w-[100%] lg:w-[74%]">
              <div className="w-[100%]  rounded-lg flex flex-col gap-2  border border-gray-300  mb-10">
                <div className="w-full h-[450px]">
                  <img
                    src={post.image.url}
                    alt={post.title}
                    className="w-full  h-full rounded-tr-lg rounded-tl-lg object-cover"
                  />
                </div>
                <div className="p-5 pb-10 flex flex-col gap-2">
                  <h2 className="font-bold text-3xl w-fit hover:text-primary-hover transition duration-150 cursor-pointer">
                    {post.title}
                  </h2>

                  <p
                    className="text-gray-600 text-md break-keep"
                    dangerouslySetInnerHTML={{
                      __html: post.description,
                    }}
                  />

                  <div className="flex gap-2 items-center">
                    <TbQuote className="text-primary-main" size={"3.5rem"} />
                    <h3
                      className="font-bold "
                      dangerouslySetInnerHTML={{
                        __html: post.shortDescription,
                      }}
                    />
                  </div>
                  <div className="text-gray-600 text-md break-all">
                    <p
                      className="text-gray-600 text-md break-all w-full code"
                      dangerouslySetInnerHTML={{
                        __html: post.description,
                      }}
                    />
                  </div>
                </div>
              </div>
              <PostSiblings params={params} />
            </div>
            <BlogSidebar post={post} />
          </div>
        </div>
      </div>
    </>
  );
}

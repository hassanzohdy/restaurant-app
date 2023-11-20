import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";

import { getPostSiblings } from "apps/front-office/blog/services";

export type PostSiblingsProps = {
  params: any;
};

export default function PostSiblings({ params }: PostSiblingsProps) {
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
  });
  const prevBlog = postSiblings.prev;
  const nextBlog = postSiblings.next;
  return (
    <>
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
    </>
  );
}

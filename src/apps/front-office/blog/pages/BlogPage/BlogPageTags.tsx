import { useOnce } from "@mongez/react-hooks";
import { queryString } from "@mongez/react-router";
import Loader from "apps/front-office/design-system/components/Indicators/Indicators";
import { useState } from "react";
import { getPosts } from "../../services";
import BlogList from "./components/BlogList";

export type PaginationInfo = {
  limit: number;
  page: number;
  total: number;
  pages: number;
  results: number;
};

export default function BlogPageTags({ params }: { params: any }) {
  const [blogData, setBlogData] = useState<any>([]);
  const [pagination, setPagination] = useState<any>({});
  const [loading, setIsLoading] = useState(true);

  useOnce(() => {
    getPosts({
      ...queryString.all(),
      keyword: params.keywordId,
      limit: 6,
    }).then(response => {
      setBlogData(response.data.posts);
      setPagination(response.data.paginationInfo);
      setIsLoading(false);
    });
  });

  return (
    <>
      {loading && (
        <>
          <Loader />
        </>
      )}
      {!loading && (
        <>
          <BlogList blogData={blogData} pagination={pagination} />
        </>
      )}
    </>
  );
}

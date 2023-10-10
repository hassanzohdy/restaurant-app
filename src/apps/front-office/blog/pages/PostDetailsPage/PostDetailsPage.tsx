import Helmet from "@mongez/react-helmet";
import { postAtom } from "apps/front-office/blog/atoms";
import PostContent from "apps/front-office/blog/pages/PostDetailsPage/PostContent/PostContent";
import PostSidebar from "apps/front-office/blog/pages/PostDetailsPage/PostSidebar/PostSidebar";
import PostTop from "apps/front-office/blog/pages/PostDetailsPage/PostTop/PostTop";
import { getPost } from "apps/front-office/blog/services";
import { Post, PostDetailsPageProps } from "apps/front-office/blog/utils";
import { useEffect, useState } from "react";

function parseError(_response: any) {
  return "ERR";
}

type PostState = {
  isLoading: boolean;
  error: string | null;
  post: null | Post;
};

const defaultState = {
  isLoading: true,
  error: null,
  post: null,
};

export default function PostDetailsPage({ params }: PostDetailsPageProps) {
  const [data, setData] = useState<PostState>(defaultState);

  useEffect(() => {
    setData(defaultState);
    getPost(params.id)
      .then(response => {
        postAtom.update(response.data.post);
        setData({
          isLoading: false,
          error: null,
          post: response.data.post,
        });

        setTimeout(() => {
          postAtom.change("title", "New Post Title");
        }, 3000);
      })
      .catch(error => {
        setData({
          isLoading: false,
          error: parseError(error),
          post: null,
        });
      });
  }, [params.id]);

  if (data.isLoading) {
    return <div>Loading</div>;
  }

  if (data.error) {
    return <div>{data.error}</div>;
  }

  const post = data.post!;

  return (
    <>
      <Helmet
        title={post.title}
        description={post.content}
        image={post.image}
      />

      <div className="wrapper">
        <PostTop />
        <div className="post-wrapper">
          <PostContent />
          <PostSidebar />
        </div>
      </div>
    </>
  );
}

// Scenario

// DoD For ANY PAGE
// 1. UI: Mandatory
// 2. RTL Design: Depends
// 3. Responsive: Mandatory
// 4. Meta DATA -> SEO: Mandatory
// 5. API: Depends
// 6. Localization: Depends
// 7. Logic | Behavior | Actions: Depends

import BlogPage from "apps/front-office/blog/pages/BlogPage";
import PostDetailsPage from "apps/front-office/blog/pages/PostDetailsPage";
import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";
import BlogPageTags from "./pages/BlogPage/BlogPageTags";
import BlogSearchPage from "./pages/BlogPage/BlogSearchPage";

publicRoutes([
  {
    path: URLS.blog.list,
    component: BlogPage,
  },
  {
    path: URLS.blog.viewPostSearchRoute,
    component: BlogSearchPage,
  },
  {
    path: URLS.blog.viewPostRoute,
    component: PostDetailsPage,
  },
  {
    path: URLS.blog.viewPostTagRoute,
    component: BlogPageTags,
  },
]);

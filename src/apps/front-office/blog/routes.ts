import BlogPage from "apps/front-office/blog/pages/BlogPage";
import PostDetailsPage from "apps/front-office/blog/pages/PostDetailsPage";
import { publicRoutes } from "apps/front-office/utils/router";
import URLS from "apps/front-office/utils/urls";

publicRoutes([
  {
    path: URLS.blog.list,
    component: BlogPage,
  },
  {
    path: URLS.blog.viewPostRoute,
    component: PostDetailsPage,
  },
]);

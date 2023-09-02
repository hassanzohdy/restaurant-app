import { Post, PostsListQueryParams } from "apps/front-office/blog/utils";
import { responseMockup } from "apps/front-office/utils/mockup";
import _post from "./post.json";

const post = _post as Post;

export function getPosts(params: PostsListQueryParams = {}) {
  return responseMockup({
    posts: [post],
  });
}

export function getPost(id: string) {
  return responseMockup({
    post,
  });
}

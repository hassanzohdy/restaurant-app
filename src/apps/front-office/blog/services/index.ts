import endpoint from "shared/endpoint";

export function getPosts(params: any = {}) {
  return endpoint.get("/posts", { params });
}

export function getPost(id: any) {
  return endpoint.get(`/posts/${id}`);
}

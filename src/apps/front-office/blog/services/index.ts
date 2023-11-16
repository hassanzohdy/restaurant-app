import endpoint from "shared/endpoint";

export function getPosts(params: any = {}) {
  return endpoint.get("/posts", { params });
}

export function getPost(id: any) {
  return endpoint.get(`/posts/${id}`);
}

export function getPostSiblings(id: string | number) {
  return endpoint.get(`/posts/${id}/siblings`);
}

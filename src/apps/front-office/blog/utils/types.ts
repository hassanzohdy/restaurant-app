export type PostsListQueryParams = {
  /**
   * Search query
   */
  q?: string;
  /**
   * Page number
   */
  page?: number;
  /**
   * Number of items per page
   *
   * @default 15
   */
  limit?: number;
};

export type PostDetailsPageProps = {
  params: {
    id: string;
    slug: string;
  };
};

export type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: string;
  createdAt: Date;
  createdBy: {
    id: number;
    name: string;
  };
};

import { Image } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

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
  description: string;
  image: Image;
  shortDescription: string;
  createdAt: Date;
  keywords?: {
    id: number;
    name: string;
  }[];
  createdBy: {
    id: number;
    name: string;
  };
};

// append urls here, DO NOT remove this line

import { Meal } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

const URLS = {
  wishlist: "/wishlist",
  faq: "/faq",
  posts: "/posts",
  home: "/",
  notFound: "/404",
  contactUs: "/contact-us",
  aboutUs: "/about-us",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  reservation: "/reservation",
  menu: {
    list: "/menu", // API + Pagination + Filter Activation
    viewMealRoute: "/menu/:id/:slug", // API + Next/Prev API => Reviews UI/API // /meals/:id/similar
    viewMeal: (meal: Meal) => `/menu/${meal.id}/${meal.slug}`,
    search: "/menu/search",
  },
  account: {
    profile: "/account",
    updateProfile: "/account/update-profile",
    changePassword: "/account/change-password",
    addressBook: "/account/address-book",
  },
  blog: {
    list: "/blog",
    viewPostSearchRoute: "/blog/search/:searchText",
    viewPostSearch: (searchText: any) => `/blog/search/${searchText}`,
    viewPostRoute: "/blog/:id/:slug",
    viewPost: (post: any) => `/blog/${post.id}/${post.slug}`,
    viewPostTagRoute: "/blog/keywords/:keywordId/:keyword",
    viewPostTag: (keyword: any) =>
      `/blog/keywords/${keyword.id}/${keyword.name}`,
  },
  cart: "/cart", // API + Empty Cart UI
  orders: {
    // API
    list: "/orders",
    viewOrderRoute: "/orders/:id",
    viewOrder: (order: any) => `/orders/${order.id}`,
    track: "/orders/track",
  },
  checkout: {
    page: "/checkout",
    success: "/checkout/success/:id",
    failed: "/checkout/failed",
  },
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
  },
};

export default URLS;

// append urls here, DO NOT remove this line

import { Post } from "apps/front-office/blog/utils";

const URLS = {
  meals: "/meals",
  posts: "/posts",
  home: "/",
  notFound: "/404",
  contactUs: "/contact-us",
  aboutUs: "/about-us",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  faq: "/faq",
  reservation: "/reservation",
  ourChefs: "/our-chefs",
  gallery: "/gallery",
  offers: "/offers",
  wishlist: "wishlist",
  menu: {
    list: "/menu",
    viewMealRoute: "/menu/:id/:slug",
    viewMeal: (meal: any) => `/menu/${meal.id}/${meal.slug}`,
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
    viewPostRoute: "/blog/:id/:slug",
    viewPost: (post: Post) => `/blog/${post.id}/${post.slug}`,
  },
  cart: "/cart",
  orders: {
    list: "/orders",
    viewOrderRoute: "/orders/:id",
    viewOrder: (order: any) => `/orders/${order.id}`,
    track: "/orders/track",
  },
  checkout: {
    page: "/checkout",
    success: "/checkout/success",
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

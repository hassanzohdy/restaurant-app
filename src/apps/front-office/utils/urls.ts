// append urls here, DO NOT remove this line

const URLS = {
  wishList: "/wish-list",
  faq: "/faq",
  posts: "/posts",
  home: "/",
  notFound: "/404",
  contactUs: "/contact-us",
  aboutUs: "/about-us",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  reservation: "/reservation",
  wishlist: "wishlist",
  menu: {
    list: "/menu", // API + Pagination + Filter Activation
    viewMealRoute: "/menu/:id/:slug", // API + Next/Prev API => Reviews UI/API // /meals/:id/similar
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
    viewPostRoute: "/blog/:id",
    viewPost: (post: any) => `/blog/${post.id}`,
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
    success: "/checkout/success",
    failed: "/checkout/failed",
  },
  auth: {
    login: "/login", // UI Rebuild
    register: "/register", // UI Enhancement
    forgotPassword: "/forgot-password", // New
    resetPassword: "/reset-password", // New
  },
};

export default URLS;

// append urls here, DO NOT remove this line

const URLS = {
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
  menu: {
    list: "/menu",
    viewMealRoute: "/menu/:id/:slug",
    viewMeal: (meal: any) => `/menu/${meal.id}/${meal.slug}`,
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
    viewPost: (post: any) => `/blog/${post.id}/${post.slug}`,
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

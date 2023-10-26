import { groupedTranslations } from "@mongez/localization";

// Add only common localization
groupedTranslations({
  ProductThumbnail: {
    en: "Product Thumbnail",
    ar: "الصورة المصغرة للمنتج",
  },
  product: {
    en: "Product",
    ar: "المنتج",
  },
  price: {
    en: "Price",
    ar: "السعر",
  },
  quantity: {
    en: "Quantity",
    ar: "الكمية",
  },
  subtotal: {
    en: "Subtotal",
    ar: "المجموع الفرعي",
  },
  cartTotals: {
    en: "Cart Totals",
    ar: "المجموع الكلى",
  },
  shippingCosts: {
    en: "Shipping costs are calculated during checkout.",
    ar: "يتم احتساب تكاليف الشحن أثناء انهاء الطلب.",
  },
  proceedToCheckout: {
    en: "Proceed to checkout",
    ar: "انهاء الطلب",
  },
});

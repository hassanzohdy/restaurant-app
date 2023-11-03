export function formatPrice(price?: number) {
  return price
    ? new Intl.NumberFormat("en-IN", {
        currency: "USD",
        style: "currency",
      }).format(price)
    : null;
}

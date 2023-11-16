export function price(amount?: number) {
  if (!amount) return null;

  return "£" + amount.toFixed(2);
}

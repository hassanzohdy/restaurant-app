import {
  americanExpress,
  cod,
  discover,
  mastercard,
  paypal,
  visa,
} from "shared/assets";

export default function FooterPaymentMethods() {
  const paymentMethods = [
    { name: "Visa", icon: visa },
    { name: "Mastercard", icon: mastercard },
    { name: "American Express", icon: americanExpress },
    { name: "Paypal", icon: paypal },
    { name: "Discover", icon: discover },
    { name: "COD", icon: cod },
  ];

  return (
    <>
      <ul className="footer-payment-methods flex items-center">
        {paymentMethods.map(item => (
          <span
            className="payment-method mr-[12px] last-of-type:mr-0"
            key={item.name}>
            <img src={item.icon} className="logo" alt={item.name} />
          </span>
        ))}
      </ul>
    </>
  );
}

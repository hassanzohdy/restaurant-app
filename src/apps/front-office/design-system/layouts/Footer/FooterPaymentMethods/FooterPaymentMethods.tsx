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
        {paymentMethods.map((item, index) => (
          <span className="payment-method" key={index}>
            <img src={item.icon} alt={item.name} />
          </span>
        ))}
      </ul>
    </>
  );
}

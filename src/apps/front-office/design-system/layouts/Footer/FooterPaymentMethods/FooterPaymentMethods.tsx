import visa from '../../../../../../shared/assets/images/paymentmethods/visa.png';
import mastercard from '../../../../../../shared/assets/images/paymentmethods/mastercard.png';
import americanexpress from '../../../../../../shared/assets/images/paymentmethods/americanexpress.png';
import paypal from '../../../../../../shared/assets/images/paymentmethods/paypal.png';
import discover from '../../../../../../shared/assets/images/paymentmethods/discover.png';
import cod from '../../../../../../shared/assets/images/paymentmethods/cod.png';

export default function FooterPaymentMethods() {
  const paymentMethods = [
    { name: 'Visa', icon: visa},
    { name: 'Mastercard', icon: mastercard},
    { name: 'American Express', icon: americanexpress},
    { name: 'Paypal', icon: paypal },
    { name: 'Discover', icon: discover},   
    { name: 'COD', icon: cod},   
  ]

  return (
    <>
      <ul className="footer-payment-methods flex items-center">
        {paymentMethods.map((item) => (
          <span className="payment-method" key={item.name}><img src={item.icon} className="logo" alt={item.name} /></span>
        ))}
      </ul>
    </>
  );
}

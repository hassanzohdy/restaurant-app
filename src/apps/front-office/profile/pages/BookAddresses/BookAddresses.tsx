import { addressesAtom } from "apps/front-office/checkout/atom/checkout-atoms";
import AddAddressBookForm from "apps/front-office/checkout/components/Checkout/AddAddressBookForm";
import AddNewAddressesForm from "apps/front-office/checkout/components/Checkout/AddNewAddressesForm";
import BookAddresses from "apps/front-office/checkout/components/Checkout/BookAddresses";
import { getAddressesData } from "apps/front-office/checkout/utils/get-address-data";

export default function UpdateProfileBookAddresses() {
  getAddressesData();
  const addresses = addressesAtom.useValue();
  return (
    <>
      {addresses.length === 0 ? (
        <AddAddressBookForm />
      ) : (
        <>
          <BookAddresses />
          <AddNewAddressesForm />
        </>
      )}
    </>
  );
}

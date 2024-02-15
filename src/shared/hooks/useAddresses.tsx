import { trans } from "@mongez/localization";
import {
  addressesAtom,
  defaultAddressAtom,
} from "apps/front-office/checkout/atom/checkout-atoms";
import {
  addNewAddress,
  deleteAddress,
  updateAddressData,
} from "apps/front-office/checkout/services/checkout-services";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";

const handleError = error => {
  toastError(
    error.response?.data?.error || error.message || trans("somethingWentWrong"),
  );
};

export default function useAddresses() {
  const addresses = addressesAtom.useValue();

  const postNewAddress = form => {
    const updatedForm = { ...form, isPrimary: true };

    addNewAddress(updatedForm)
      .then(response => {
        addressesAtom.update(oldAddresses => {
          const updatedAddresses = oldAddresses.map(address => ({
            ...address,
            isPrimary: false,
          }));
          return [response.data.record, ...updatedAddresses];
        });

        defaultAddressAtom.update(true);

        toastSuccess(trans("addressSuccessfullyAdded"));
      })
      .catch(error => handleError(error));
  };

  const handleDeleteAddress = (id: number) => {
    deleteAddress(id)
      .then(() => {
        addressesAtom.update(oldAddresses => {
          const updatedAddresses = oldAddresses.filter(
            address => address.id !== id,
          );

          const deletedAddress = oldAddresses.find(
            address => address.id === id,
          );

          const isPrimaryDeleted = deletedAddress?.isPrimary || false;

          const nextAddress = updatedAddresses.find(
            address => address.id !== id,
          );

          if (nextAddress && isPrimaryDeleted) {
            nextAddress.isPrimary = true;
          }

          toastSuccess(trans("addressSuccessfullyDeleted"));

          return updatedAddresses;
        });
      })
      .catch(error => {
        handleError(error);
      });
  };

  const selectAddress = selectedAddressId => {
    if (!selectedAddressId) return null;

    const defaultAddress = addresses.find(address => address.isPrimary);
    const selectedAddress = addresses.find(
      address => address.id === selectedAddressId,
    );

    if (selectedAddressId === defaultAddress?.id) {
      return defaultAddressAtom.update(true);
    }

    if (selectedAddress) {
      const updatedData = {
        ...selectedAddress,
        isPrimary: true,
      };

      updateAddressData(selectedAddressId, updatedData)
        .then(() => {
          addressesAtom.update(oldAddresses => {
            const updatedAddresses = oldAddresses.map(address =>
              address.id === selectedAddressId
                ? { ...address, isPrimary: true }
                : { ...address, isPrimary: false },
            );
            return updatedAddresses;
          });
          defaultAddressAtom.update(true);
          toastSuccess(trans("addressHasSelected"));
        })
        .catch(error => handleError(error));
    }
  };

  const updateAddress = (id, form) => {
    const updatedForm = { ...form, isPrimary: true };

    updateAddressData(id, updatedForm)
      .then(() => {
        addressesAtom.update(oldAddresses => {
          const updatedAddresses = oldAddresses.map(address =>
            address.id === id ? updatedForm : { ...address, isPrimary: false },
          );
          return updatedAddresses;
        });

        defaultAddressAtom.update(true);

        toastSuccess(trans("addressHasUpdated"));
      })
      .catch(error => handleError(error));
  };

  return {
    handleDeleteAddress,
    postNewAddress,
    selectAddress,
    updateAddress,
    addresses,
  };
}

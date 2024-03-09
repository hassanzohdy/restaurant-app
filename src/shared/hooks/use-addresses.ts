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

function addPrimaryAddress(res) {
  addressesAtom.update(oldAddresses => {
    console.log(oldAddresses);
    const updatedAddresses = oldAddresses.map(address => ({
      ...address,
      isPrimary: false,
    }));
    return [{ ...res.data.record, isPrimary: true }, ...updatedAddresses];
  });
}

const _postNewAddress = form => {
  addNewAddress({ ...form, isPrimary: true })
    .then(res => {
      addPrimaryAddress(res);

      defaultAddressAtom.update(true);

      toastSuccess(trans("addressSuccessfullyAdded"));
    })
    .catch(err => {
      handleError(err);
    });
};

const _removeAddress = id => {
  deleteAddress(id)
    .then(() => {
      addressesAtom.update(oldAddresses => {
        const updatedAddresses = oldAddresses.filter(
          address => address.id !== id,
        );

        const deletedAddress = oldAddresses.find(address => address.id === id);

        const isPrimaryAddressDeleted = deletedAddress?.isPrimary;

        const nextAddressWillBePrimary = updatedAddresses.find(
          address => address.id !== id,
        );

        if (isPrimaryAddressDeleted && nextAddressWillBePrimary) {
          nextAddressWillBePrimary.isPrimary = true;
        }

        return updatedAddresses;
      });
      toastSuccess(trans("addressSuccessfullyDeleted"));
    })
    .catch(err => {
      handleError(err);
    });
};

const _updateAddressData = (id, form, successMassage) => {
  updateAddressData(id, form)
    .then(res => {
      addressesAtom.update(oldAddresses => {
        const updatedData = oldAddresses.map(address =>
          address.id === id
            ? { ...res.data.record, isPrimary: true }
            : { ...address, isPrimary: false },
        );
        return updatedData;
      });

      defaultAddressAtom.update(true);

      toastSuccess(successMassage);
    })
    .catch(err => {
      handleError(err);
    });
};

export default function useAddresses() {
  return {
    postNewAddress: _postNewAddress,
    removeAddress: _removeAddress,
    updateAddressData: _updateAddressData,
  };
}

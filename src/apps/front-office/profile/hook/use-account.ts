import { trans } from "@mongez/localization";
import { toastError, toastSuccess } from "shared/hooks/useToastMessage";
import { changePassword, editProfile } from "../services/profile-service";
import { updateProfileType } from "../utils/types";

const _handleError = error => {
  toastError(
    error.response?.data?.error || error.message || trans("somethingWentWrong"),
  );
};

const _updateProfile = (values: updateProfileType) => {
  editProfile(values)
    .then(() => {
      toastSuccess(trans("useInfoUpdated"));
    })
    .catch(error => {
      _handleError(error);
    });
};

const _changePassword = (values: Record<string, any>) => {
  console.log(values);
  changePassword(values)
    .then(() => {
      toastSuccess(trans("passwordHasChanged"));
    })
    .catch(error => {
      _handleError(error);
    });
};

export default function useAccount() {
  return {
    updateProfile: _updateProfile,
    changePassword: _changePassword,
  };
}

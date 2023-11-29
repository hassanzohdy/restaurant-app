import { FormInterface } from "@mongez/react-form";
import router, {
  navigateBack,
  navigateTo,
  refresh,
} from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";
import React from "react";
import { resetPasswordAtom } from "../pages/Register/atoms";
import {
  forgetPassword,
  login,
  register,
  resetPassword,
  verifyCode,
  verifyForgetPassword,
} from "../service/auth";
import user from "../user";
import { showToastMessage } from "./useToastMessage";

const goBack = () => {
  setTimeout(() => {
    if (!Object.values(URLS.auth).includes(router.getPreviousRoute())) {
      navigateBack();
    } else {
      navigateTo(URLS.home);
    }
  }, 0);
};

const onSuccessLogin = () => {
  goBack();
  showToastMessage({ message: "you have login successfully" });
};

/**
 * Login hook
 * It return the onSubmit callback
 */
export function useLogin() {
  const loginSubmit = ({ values, form }) => {
    login(values)
      .then(onSuccessLogin)
      .catch(() => {
        form.submitting(false);
      });
  };

  return loginSubmit;
}

/**
 * Create account/Register hook
 * It return the onSubmit callback
 */
export function useCreateAccount() {
  const createAccount = ({ values, form }) => {
    register(values)
      .then(() => {
        goBack();
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return createAccount;
}

/**
 * Verify register code hook
 * Use this hook to verify user account after registration
 */
export function useCreateAccountVerifyCode(otpEmail: string) {
  const verifyCodeSubmit = ({ values, form }) => {
    const codeAsNumber = parseInt(values.code, 10);

    verifyCode({ email: otpEmail, code: codeAsNumber })
      .then(() => {
        onSuccessLogin();
      })
      .catch(error => {
        form.submitting(false);
        showToastMessage({
          message: error.response.data.error,
          type: "error",
          position: "TOP_LEFT",
        });
      });
  };

  return verifyCodeSubmit;
}

/**
 * Perform logout
 */
export function useLogout(hardReload = true) {
  return () => {
    user.logout();

    setTimeout(() => {
      if (hardReload) {
        window.location.reload();
      } else {
        refresh();
      }
    }, 0);
  };
}

/**
 * Send forget password request hook
 */
export function useForgetPassword() {
  const forgetPasswordSubmit = ({ values, form }) => {
    forgetPassword(values)
      .then(() => {
        resetPasswordAtom.update({
          ...resetPasswordAtom.value,
          email: form.value("email"),
          hasOTP: true,
        });
        navigateTo(URLS.auth.resetPassword);
      })
      .catch(error => {
        form.submitting(false);
        showToastMessage({
          message: error.response.data.error,
          type: "error",
          position: "TOP_LEFT",
        });
      });
  };

  return forgetPasswordSubmit;
}

/**
 * Verify forget password code hook
 */
export function useVerifyForgetPasswordOTP() {
  const verifyForgetPasswordOTPSubmit = (
    e: React.FormEvent,
    form: FormInterface,
  ) => {
    verifyForgetPassword({
      email: resetPasswordAtom.get("email"),
    })
      .then(() => {
        navigateTo(URLS.auth.resetPassword);
      })
      .catch(() => {
        form.submitting(false);
      });
  };

  return verifyForgetPasswordOTPSubmit;
}

/**
 * Reset password hook
 */
export function useResetPassword() {
  const resetPasswordSubmit = ({ values, form }) => {
    resetPassword({
      ...values,
      email: resetPasswordAtom.get("email"),
    })
      .then(() => {
        navigateTo(URLS.auth.login);
        resetPasswordAtom.reset();
      })
      .catch(error => {
        form.submitting(false);
        showToastMessage({
          message: error.response.data.error,
          type: "error",
          position: "TOP_LEFT",
        });
      });
  };

  return resetPasswordSubmit;
}

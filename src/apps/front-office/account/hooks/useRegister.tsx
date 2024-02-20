import { trans } from "@mongez/localization";
import { FormSubmitOptions } from "@mongez/react-form";
import { register } from "apps/front-office/account/service/auth";
import { useState } from "react";
import {
  toastError,
  toastSuccess,
} from "../../../../shared/hooks/useToastMessage";
import { OTPEmailAtom } from "../atoms/auth-atoms";

export type State = "initial" | "loading" | "done" | "error";

export function useRegister() {
  const [state, setState] = useState<State>("initial");

  const createAccount = ({ values, form }: FormSubmitOptions) => {
    setState("loading");
    register(values)
      .then(() => {
        setState("done");
        OTPEmailAtom.update(values.email);
        toastSuccess(trans("accountCreated"));
      })
      .catch(error => {
        setState("error");
        const errors = error.response?.data?.messages;

        toastError(errors);
        form.submitting(false);
        if (errors) {
          for (const error of errors) {
            form.control(error.key)?.setError(error.error);
          }
        }
      });
  };

  return {
    state,
    submit: createAccount,
  };
}

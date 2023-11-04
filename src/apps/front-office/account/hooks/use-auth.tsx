import { register } from "apps/front-office/account/service/auth";
import { useState } from "react";
import { FormSubmitOptions } from "src/form";

export type State = "initial" | "loading" | "done" | "error";

export function useRegister() {
  const [state, setState] = useState<State>("initial");

  const createAccount = ({ values, form }: FormSubmitOptions) => {
    setState("loading");
    register(values)
      .then(() => {
        setState("done");
      })
      .catch(error => {
        setState("error");
        const errors = error.response?.data?.messages;

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

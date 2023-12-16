import { trans } from "@mongez/localization";
import { useOnce } from "@mongez/react-hooks";
import { State } from "apps/front-office/account/hooks/useRegister";
import { useState } from "react";
import { getUserAddresses } from "../services/checkout-services";

export function getAddressesData() {
  const [state, setState] = useState<State>("initial");
  const [error, setError] = useState<any>(null);
  useOnce(() => {
    if (state !== "initial") return;

    setState("loading");
    getUserAddresses()
      .then(() => setState("done"))
      .catch(error => {
        setState("error");
        setError(
          error.response?.data?.error ||
            error.message ||
            trans("somethingWentWrong"),
        );
      });
  });

  return {
    state,
    error,
  };
}

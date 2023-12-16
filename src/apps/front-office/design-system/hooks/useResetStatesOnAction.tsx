import { Atom } from "@mongez/react-atom";
import { useEffect, useRef } from "react";
import { useClickOutside } from "./useClickOutside";
import { useRouteChange } from "./useRouteChange";

function useResetStatesOnAction(atom: Atom) {
  const resetStates = () => {
    atom.reset();
  };

  useRouteChange(resetStates);

  const handleClickOutsideRef = useRef(null);

  const handleClickOutside = useClickOutside({
    callback: resetStates,
    ref: handleClickOutsideRef,
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return { handleClickOutsideRef }; // Return the ref for external use if needed
}

export default useResetStatesOnAction;

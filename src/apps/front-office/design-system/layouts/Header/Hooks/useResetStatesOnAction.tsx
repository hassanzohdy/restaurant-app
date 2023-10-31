import { Atom } from "@mongez/react-atom";
import { useEffect, useRef } from "react";
import { useClickOutside } from "./useClickOutside"; // Import your click outside logic
import { useRouteChange } from "./useRouteChange"; // Import your route change logic

function useResetStatesOnAction(atom: Atom) {
  const resetStates = () => {
    atom.reset();
  };

  const handleClickOutsideRef = useRef(null);
  const handleClickOutside = useClickOutside({
    callback: resetStates,
    ref: handleClickOutsideRef,
  });

  useRouteChange(resetStates);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return { handleClickOutsideRef }; // Return the ref for external use if needed
}

export default useResetStatesOnAction;

import { useEffect } from "react";

export default function useEscapeToClose(
  state: boolean,
  toggleFunc: () => void,
) {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        toggleFunc();
      }
    };

    if (state) {
      document.addEventListener("keydown", keyDownHandler);
    } else {
      document.removeEventListener("keydown", keyDownHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [state, toggleFunc]);
}

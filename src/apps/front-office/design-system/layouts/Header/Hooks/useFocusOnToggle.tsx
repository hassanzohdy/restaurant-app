import { RefObject, useEffect } from "react";

export default function useFocusOnToggle(
  inputRef: RefObject<HTMLInputElement> | null,
  watchState: boolean,
) {
  useEffect(() => {
    if (inputRef && watchState && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [watchState, inputRef]);
}

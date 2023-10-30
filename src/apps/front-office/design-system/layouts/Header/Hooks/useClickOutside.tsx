import { useCallback } from "react";

export function useClickOutside(callback, ref) {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [callback, ref],
  );

  return handleClickOutside;
}

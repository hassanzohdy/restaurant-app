import { RefObject, useCallback } from "react";

interface UseClickOutsideProps {
  callback: () => void;
  ref: RefObject<HTMLElement>;
}
export function useClickOutside({ callback, ref }: UseClickOutsideProps) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [callback, ref],
  );

  return handleClickOutside;
}

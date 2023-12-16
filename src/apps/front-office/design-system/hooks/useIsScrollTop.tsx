import { useEffect } from "react";
import { scrollAtom } from "../atoms/header-atoms";

export default function useIsScrollTop() {
  const scrollTopPosition = scrollAtom.useValue();

  useEffect(() => {
    const handleScroll = () => scrollAtom.update(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("DOMContentLoaded", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("DOMContentLoaded", handleScroll);
    };
  }, []);
  return scrollTopPosition;
}

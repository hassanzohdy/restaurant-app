import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children }: { children: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element: any = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-all duration-1000 mt-20
        ${isVisible ? "opacity-100 mt-0" : "opacity-0 mt-20"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

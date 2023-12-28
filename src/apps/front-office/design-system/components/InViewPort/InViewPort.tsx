import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export type InViewPortProps = {
  component: ReactNode;
};

export default function InViewPort({ component }: InViewPortProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return inView ? component : <div ref={ref} className="mt-8"></div>;
}

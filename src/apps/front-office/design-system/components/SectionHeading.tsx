import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl mb-6 text-center uppercase font-bold">
      {children}
    </h2>
  );
};

export default SectionHeading;

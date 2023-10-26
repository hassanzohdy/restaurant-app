import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "secondary" | "primary";
};

export const Button = ({ children, variant, className, ...rest }: Props) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : ""
      } btn inline-flex font-semibold uppercase text-[14px] ${className} hover:bg-primary-hover duration-700 transition-all ease-in-out`}
      {...rest}>
      {children}
    </button>
  );
};

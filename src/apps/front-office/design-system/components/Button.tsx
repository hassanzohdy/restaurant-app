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
      } btn ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

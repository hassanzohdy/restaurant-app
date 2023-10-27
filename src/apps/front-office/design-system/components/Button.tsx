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
          ? "btn-primary bg-primary-main hover:bg-primary-hover"
          : variant === "secondary"
          ? "btn-secondary bg-primary-hover"
          : ""
      } btn inline-flex items-center justify-center font-semibold uppercase text-[14px] ${className} rounded-md duration-700 transition-all ease-in-out`}
      {...rest}>
      {children}
    </button>
  );
};

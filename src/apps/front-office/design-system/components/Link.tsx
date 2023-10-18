import { Link } from "@mongez/react-router";
import { AnchorHTMLAttributes, ReactNode } from "react";
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "secondary" | "primary";
};
export function BaseLink({ children, variant, className, ...rest }: LinkProps) {
  return (
    <Link
      className={`${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : ""
      } btn inline-flex font-semibold uppercase text-[14px] ${className}`}
      {...rest}>
      {children}
    </Link>
  );
}

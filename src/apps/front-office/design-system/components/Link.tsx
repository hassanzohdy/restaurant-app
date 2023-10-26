import { Link } from "@mongez/react-router";
import { AnchorHTMLAttributes, ReactNode } from "react";
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string,
  children: ReactNode;
  variant?: "secondary" | "primary";
};
export function BaseLink({ href, children, variant, className, ...rest }: LinkProps) {
  return (
    <Link
      to={href}
      className={`${
        variant === "primary"
          ? "btn-primary"
          : variant === "secondary"
          ? "btn-secondary"
          : ""
      } btn inline-flex font-semibold uppercase text-[14px] ${className} hover:bg-primary-hover duration-700 transition-all ease-in-out`}
      {...rest}>
      {children}
    </Link>
  );
}

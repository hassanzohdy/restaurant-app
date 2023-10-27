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
        ? "btn-primary bg-primary-main hover:bg-primary-hover"
        : variant === "secondary"
        ? "btn-secondary bg-primary-hover"
        : ""
      } btn inline-flex items-center justify-center font-semibold uppercase text-[14px] ${className} rounded-md duration-700 transition-all ease-in-out`}
      {...rest}>
      {children}
    </Link>
  );
}

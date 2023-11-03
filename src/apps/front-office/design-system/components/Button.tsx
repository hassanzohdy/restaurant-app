<<<<<<< HEAD
import { ButtonHTMLAttributes, ReactNode } from "react";
=======
import { useSubmitButton } from "@mongez/react-form";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "secondary" | "primary";
};

<<<<<<< HEAD
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
=======
const variants = {
  primary: "bg-primary-main hover:bg-primary-hover",
  secondary: "bg-secondary hover:bg-green-700",
};

export const Button = ({ children, variant, className, ...rest }: Props) => {
  const classes = variant ? variants[variant] : "";
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold uppercase text-[14px] rounded-md duration-400 transition-colors",
        className,
        classes,
      )}
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f
      {...rest}>
      {children}
    </button>
  );
};
<<<<<<< HEAD
=======

export function SubmitButton({
  variant = "secondary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "secondary" | "primary";
}) {
  const classes = variant ? variants[variant] : "";
  // TODO: Form is not triggering proper events for invalid controls
  const { isSubmitting, disabled } = useSubmitButton();

  return (
    <button
      type="submit"
      disabled={disabled || isSubmitting}
      className={`w-full cursor-pointer ${classes} text-white font-bold mt-1 mb-4 py-2 px-4 rounded sm:col-span-2`}
      {...props}
    />
  );
}
>>>>>>> 0b183458ece57a90c4bed59c1afdb79e3383860f

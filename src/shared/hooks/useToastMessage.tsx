import { toast } from "react-toastify";

export const toastMealToCart = (message: React.ReactNode) => {
  return toast(message);
};

export const toastSuccess = (message: string) => {
  return toast(message, {
    type: "success",
  });
};

export const toastError = (message: string) => {
  return toast.error(message, {
    type: "error",
  });
};

export const toastWarning = (message: string) => {
  return toast.warning(message, {
    type: "warning",
  });
};

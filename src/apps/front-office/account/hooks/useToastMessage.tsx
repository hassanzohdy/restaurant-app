import { toast } from "react-toastify";

export const toastMealToCart = message => {
  return toast(message);
};

export const toastSuccess = message => {
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

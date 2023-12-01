import React from "react";
import { toast } from "react-toastify";

type ShowToastMassageTypes = {
  message: React.ReactNode;
  type?: "info" | "success" | "warning" | "error" | "default";
  position?:
    | "TOP_LEFT"
    | "TOP_RIGHT"
    | "TOP_CENTER"
    | "BOTTOM_LEFT"
    | "BOTTOM_RIGHT"
    | "BOTTOM_CENTER";
};

export const showToastMessage = ({
  message,
  type = "success",
  position = "TOP_RIGHT",
}: ShowToastMassageTypes) => {
  const toastId = `${[type]}-toast`;

  toast[type](message, {
    toastId,
    position: toast.POSITION?.[position],
  });

  return toastId;
};

export const toastError = (message: string) => {
  return showToastMessage({
    message,
    type: "error",
  });
};

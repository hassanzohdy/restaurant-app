import { toast } from "react-toastify";

type showToastMassageTypes = {
  message: string;
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
}: showToastMassageTypes) => {
  toast?.[type](message, {
    toastId: `${[type]}`,
    position: toast.POSITION?.[position],
  });
};

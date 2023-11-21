import { toast } from "react-toastify";

export const showToastMessage = (
  massage,
  type = "success",
  position = "TOP_RIGHT",
) => {
  toast?.[type](massage, {
    toastId: `${[type]}`,
    position: toast.POSITION?.[position],
  });
};

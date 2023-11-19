import { trans } from "@mongez/localization";
import { ToastContainer, toast } from "react-toastify";

export default function ToastMessage() {
  const showToastMessage = () => {
    toast.success(trans("accountCreatedSuccessfully"), {
      toastId: "success1",
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      {showToastMessage()}
      <ToastContainer />
    </>
  );
}

import { ToastContainer, toast } from "react-toastify";
export type ToastMessageProps = {
  // props go here
};

export default function ToastMessage() {
  // useEffect(() => {
  //   showToastMessage;
  // }, []);
  const showToastMessage = () => {
    toast.success("Account Created  successfully!", {
      toastId: "success1",
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      {showToastMessage()}
      {/* <button onClick={showToastMessage}>Notify</button> */}
      <ToastContainer />
    </>
  );
}

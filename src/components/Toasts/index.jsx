import { toast, ToastContainer, Zoom } from "react-toastify";
// Styles
import "react-toastify/dist/ReactToastify.css";

const notify = (message) => {
  toast(message, {
    transition: Zoom,
    hideProgressBar: true,
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });

  //   toast.error("Error Notification !", {
  //     position: toast.POSITION.TOP_LEFT,
  //   });

  //   toast.warn("Warning Notification !", {
  //     position: toast.POSITION.BOTTOM_LEFT,
  //   });

  //   toast.info("Info Notification !", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //   });
};

export { ToastContainer, notify, Zoom, toast };

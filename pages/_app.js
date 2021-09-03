import AppLayout from "../components/appLayout";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <ToastContainer
        autoClose={5000}
        transition={Zoom}
        position="top-center"
        className="toast-container"
        toastClassName="dark-toast"
      />
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;

import AppLayout from "../components/appLayout";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome | Oladapo Ayodeji Oti</title>
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;

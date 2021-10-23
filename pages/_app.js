import "../styles/globals.css";
import Head from "next/head";
import { StateProvider } from "../context/darkModeContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Astrid Portofolio</title>
        <meta name="description" content="Astrid Portofolio" />
      </Head>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;

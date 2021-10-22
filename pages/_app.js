import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Astrid Portofolio</title>
        <meta name="description" content="Astrid Portofolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

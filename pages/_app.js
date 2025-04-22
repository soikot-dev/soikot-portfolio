// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Tailwind and custom styles
import 'slick-carousel/slick/slick.css'; // Slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Saikat Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

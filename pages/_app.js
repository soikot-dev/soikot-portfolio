// pages/_app.js
import '../styles/globals.css'; // ✅ Your Tailwind + custom styles
import 'slick-carousel/slick/slick.css'; // ✅ Slick carousel styles
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;

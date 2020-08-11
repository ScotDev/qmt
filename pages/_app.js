import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css'
// import "pure-react-carousel/dist/react-carousel.es.css";

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/styles.min.css';

import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Credits from './components/Credits';

export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="theme-color" content="#111111"></meta>
    </Head>


    <div className="container">

      <Navbar></Navbar>
      <SocialBar></SocialBar>

      <div className="content">
        <Component {...pageProps} />
        <Credits></Credits>
      </div>
    </div>
  </>
}



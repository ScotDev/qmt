import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/styles.min.css';

import Navbar from './components/Navbar';
import Social from './components/Social';
import Credits from './components/Credits';

export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      {/* <script type="text/javascript" src="static/scripts.js"></script> */}
    </Head>


    <div className="container">

      <Navbar></Navbar>
      <Social></Social>

      <div className="content">
        <Component {...pageProps} />
        <Credits></Credits>
      </div>
    </div>
  </>
}



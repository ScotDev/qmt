import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/styles.min.css';

import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Credits from './components/Credits';

import SEO from '../next-seo.config';


export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="preload" rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="theme-color" content="#111111"></meta>
    </Head>

    <DefaultSeo {...SEO}></DefaultSeo>

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



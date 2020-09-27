import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

import '../styles/styles.min.css';
import '../styles/fonts/style.css'

import Navbar from './components/Navbar';
import SocialBar from './components/SocialBar';
import Credits from './components/Credits';

import SEO from '../next-seo.config';

// import 'lazysizes/plugins/attrchange/ls.attrchange';


export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="manifest" href="/site.webmanifest"></link>
      <meta name="theme-color" content="#171923"></meta>
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



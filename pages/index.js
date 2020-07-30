import Head from 'next/head'

import Header from './components/Header';
import Carousel from './components/Carousel';
import Instagram from './components/Instagram_grid';
import Spotify from './components/Spotify';
import Twitter from './components/Twitter';

export default function Home() {
  return (
    <>
      <Head>
        <title>thequarantinemixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Carousel></Carousel>
      <Instagram></Instagram>
      <Spotify></Spotify>
      <Twitter></Twitter>
    </>
  )
}

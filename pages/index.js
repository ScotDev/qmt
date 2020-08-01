import Head from 'next/head';

import Header from './components/Header';
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
      <Instagram></Instagram>
      <Spotify></Spotify>
      <Twitter></Twitter>
    </>
  )
}

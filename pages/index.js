import Head from 'next/head'

import Instagram from './components/Instagram_grid';
import Header from './components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>thequarantinemixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Instagram></Instagram>
    </div>
  )
}

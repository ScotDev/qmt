import Head from 'next/head';
import axios from 'axios';
import Header from './components/Header';
import Instagram from './components/Instagram_grid';
import Spotify from './components/Spotify';
import Article_grid from './components/Article_grid';
// import Twitter from './components/Twitter';

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>thequarantinemixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Instagram></Instagram>
      <Article_grid articles={articles}></Article_grid>
      <Spotify></Spotify>
      {/* <Twitter></Twitter> */}
    </>
  )
}


export async function getServerSideProps() {


  try {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/articles?_limit=5`)
    const data = res.data;


    return {
      props: {
        articles: data
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}
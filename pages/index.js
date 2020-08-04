import Head from 'next/head';
import axios from 'axios';
import Header from './components/Header';
import Instagram from './components/Instagram_grid';
import Spotify from './components/Spotify';
import Article_grid from './components/Article_grid';

export default function Home({ articles, posts }) {
  return (
    <>
      <Head>
        <title>thequarantinemixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Instagram posts={posts}></Instagram>
      <Article_grid articles={articles}></Article_grid>
      <Spotify></Spotify>
    </>
  )
}


export async function getServerSideProps() {

  // Get articles for article grid
  try {
    const { API_URL } = process.env;

    const res_1 = await axios.get(`${API_URL}/articles?_limit=5`)
    const res_2 = await axios.get(`${API_URL}/instagram-posts?_sort=post_position:ASC`)
    console.log(res_2)
    const articles = res_1.data;
    const posts = res_2.data;

    return {
      props: {
        articles: articles,
        posts: posts
      }
    }
  } catch (error) {
    return {
      props: {}
    }
  }


}
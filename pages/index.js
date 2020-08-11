import Head from 'next/head';
// import getConfig from 'next/config';
import axios from 'axios';

import Header from './components/Header';
import Banner from './components/Banner';
import Instagram from './components/InstagramGrid';
import Spotify from './components/Spotify';
import ArticlesHomepage from './components/ArticlesHomepage';
import ReviewsHomepage from './components/ReviewsHomepage';


export default function Home({ articles, posts, banner, reviews }) {
  return (
    <>
      <Head>
        <title>thequarantinemixtape</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner banner={banner}></Banner>
      <Instagram posts={posts}></Instagram>
      <ArticlesHomepage articles={articles}></ArticlesHomepage>
      <ReviewsHomepage reviews={reviews}></ReviewsHomepage>
      <Spotify></Spotify>
    </>
  )
}


export async function getServerSideProps() {

  // Get articles for article grid
  try {

    // const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
    // const API_URL = publicRuntimeConfig.NEXT_PUBLIC_API_URL;
    const API_URL = "https://calm-depths-31916.herokuapp.com";
    // console.log(process.env.API_URL, publicRuntimeConfig.API_URL, serverRuntimeConfig.API_URL)

    const res_1 = await axios.get(`${API_URL}/articles?_limit=5`)
    const res_2 = await axios.get(`${API_URL}/instagrams?_sort=post_position:ASC&_limit=6`)
    const res_3 = await axios.get(`${API_URL}/banners`)
    const res_4 = await axios.get(`${API_URL}/reviews?_limit=5`)
    const articles = res_1.data;
    const posts = res_2.data;
    const banner = res_3.data;
    const reviews = res_4.data;

    return {
      props: {
        articles: articles,
        posts: posts,
        banner: banner,
        reviews: reviews
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }


}
import Head from 'next/head';
import getConfig from 'next/config';
import axios from 'axios';
// import lazysizes from 'lazysizes';

// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import 'lazysizes/plugins/attrchange/ls.attrchange';


import Header from './components/Header';
import Banner from './components/Banner';
import Instagram from './components/InstagramGrid';
import ArticlesHomepage from './components/ArticlesHomepage';
import ReviewsHomepage from './components/ReviewsHomepage';

import Spotify from './components/Spotify';




export default function Home({ articles, posts, banner, reviews }) {



  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/D_Bzg_Del8_400x400_1_8f2c6bd3ba.jpg" /> */}
      </Head>

      <Header></Header>
      <Banner banner={banner}></Banner>
      <Instagram posts={posts}></Instagram>
      <ReviewsHomepage reviews={reviews}></ReviewsHomepage>
      <ArticlesHomepage articles={articles}></ArticlesHomepage>
      <Spotify></Spotify>

    </>
  )
}


export async function getStaticProps() {

  try {

    const { publicRuntimeConfig } = getConfig();
    const API_URL = publicRuntimeConfig.API_URL;

    const res_1 = await axios.get(`${API_URL}/articles?_limit=2`)
    const res_2 = await axios.get(`${API_URL}/instagrams?_sort=post_position:ASC&_limit=6`)
    // Should be single-type in CMS but end functionity is the same
    const res_3 = await axios.get(`${API_URL}/banners?_limit=1`)
    const res_4 = await axios.get(`${API_URL}/reviews?_limit=2`)
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
      },
      revalidate: 1
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
      revalidate: 1
    }
  }


}
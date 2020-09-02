import Head from 'next/head';
import getConfig from 'next/config';
import axios from 'axios';
import dynamic from "next/dynamic";
import react, { useEffect, useState } from 'react';
// import lazysizes from 'lazysizes';

// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
// import 'lazysizes/plugins/attrchange/ls.attrchange';


import Header from './components/Header';
import Banner from './components/Banner';
import Instagram from './components/InstagramGrid';
import ArticlesHomepage from './components/ArticlesHomepage';
import ReviewsHomepage from './components/ReviewsHomepage';

// import Spotify from './components/Spotify';

const Spotify = dynamic(async () => await import('./components/Spotify'), {
  ssr: false
})



export default function Home({ articles, posts, banner, reviews }) {
  const [showChild, setShowChild] = useState(false);



  useEffect(() => { setShowChild(true); }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <Banner banner={banner}></Banner>
      <Instagram posts={posts}></Instagram>
      <ArticlesHomepage articles={articles}></ArticlesHomepage>
      <ReviewsHomepage reviews={reviews}></ReviewsHomepage>

      {showChild && <Spotify></Spotify>}

    </>
  )
}


export async function getStaticProps() {

  try {

    const { publicRuntimeConfig } = getConfig();
    const API_URL = publicRuntimeConfig.API_URL;

    // let articles;
    // let posts;
    // let banner;
    // let reviews;

    // axios.all([
    //   // axios.get(`${API_URL}/articles?_limit=5`),
    //   axios.get(`${API_URL}/instagrams?_sort=post_position:ASC&_limit=6`),
    //   axios.get(`${API_URL}/banners?_limit=1`),
    //   axios.get(`${API_URL}/reviews?_limit=5`)
    // ])
    //   .then(axios.spread((res_1, res_2, res_3, res_4) => {
    //     // articles = res_1.data;
    //     posts = res_2.data;
    //     banner = res_3.data;
    //     reviews = res_4.data;
    //   }))



    const res_1 = await axios.get(`${API_URL}/articles?_limit=5`)
    const res_2 = await axios.get(`${API_URL}/instagrams?_sort=post_position:ASC&_limit=6`)
    const res_3 = await axios.get(`${API_URL}/banners?_limit=1`)
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
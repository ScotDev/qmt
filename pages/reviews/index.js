import Head from 'next/head'
import Link from 'next/link';
import getConfig from 'next/config';
import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import Img from '../components/Img'

export default function reviews({ reviews }) {

    if (!reviews) {
        return <Error statusCode={404}></Error>
    }

    return (<>

        <Head>
            <title>thequarantinemixtape | Reviews</title>
        </Head>

        <section className="review">
            <h1 className="page-title">Album Reviews</h1>
            <div className="review-grid">

                {reviews.map(item => (
                    <Link href="/reviews/[id]" as={`/reviews/${item.id}`} key={item.id}>
                        <div className="review-grid-card" key={item.id}>
                            <Img imgPath={item.album_img.url} imgClass={"card-img"} imgAlt={item.title}></Img>
                            <div className="review-grid-card-text">
                                <p className="card-text-subtitle">{item.artist}</p>
                                <p className="card-text-title">{item.title}</p>
                                <span className="card-text-date"><Moment format="do MMM, YYYY">{item.updatedAt}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    </>
    )
}


export async function getServerSideProps() {
    try {
        const { publicRuntimeConfig } = getConfig();
        const API_URL = publicRuntimeConfig.API_URL;
        const res = await axios.get(`${API_URL}/reviews`)
        const data = res.data;

        return {
            props: {
                reviews: data
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}
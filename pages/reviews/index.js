import Head from 'next/head'
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

                    <div className="review-grid-card" key={item.id}>
                        {/* <img src="/images/emily-rudolph-I-oARMjzXow-unsplash.jpg" className="card-img"></img> */}
                        <Img imgPath={item.album_img} imgClass={"card-img"} imgAlt={item.title}></Img>
                        <div className="review-grid-card-text">
                            <p className="card-text-subtitle">{item.artist}</p>
                            <p className="card-text-title">{item.title}</p>
                            <span className="card-text-date"><Moment format="do MMM, YYYY">{item.updated_at}</Moment></span>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    </>
    )
}


export async function getServerSideProps() {
    try {
        const { API_URL } = process.env;
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
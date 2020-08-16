import Link from 'next/link';
import getConfig from 'next/config';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import Img from '../components/Img'

export default function reviews({ reviews, page, numberOfReviews }) {
    const pageSEO = {
        title: "Album Reviews",
        description: "Album reviews from The Quarantine Mixtape",
        openGraph: {
            title: "Album Reviews",
            description: "Album reviews from The Quarantine Mixtape"
        }
    }

    const router = useRouter();
    const lastPage = Math.ceil(numberOfReviews / 10)

    if (!reviews) {
        return <Error statusCode={404}></Error>
    }

    return (<>

        <NextSeo {...pageSEO}></NextSeo>

        <div className="review">
            <h1 className="page-title">Album Reviews</h1>
            <div className="review-grid">

                {reviews.map(item => (
                    <Link href="/reviews/[id]" as={`/reviews/${item.id}`} key={item.id}>
                        <div className="review-grid-card" key={item.id}>
                            <Img imgPath={item.album_img.url} imgClass={"card-img"} imgAlt={item.title}></Img>
                            <div className="review-grid-card-text">
                                <p className="card-text-subtitle">{item.artist}</p>
                                <p className="card-text-title">{item.title}</p>
                                <span className="card-text-date"><Moment format="Do MMM, YYYY">{item.createdAt}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </div>
        <div className="btn-group">
            <button className={page <= 1 ? "btn-disabled" : "btn-primary"} disabled={page <= 1} onClick={() => router.push(`/reviews?page=${page - 1}`)}>Previous</button>

            <button className="btn-info">{page}</button>

            <button className={page >= lastPage ? "btn-disabled" : "btn-secondary"} disabled={page >= lastPage} onClick={() => router.push(`/reviews?page=${page + 1}`)}>Next</button>
        </div>
    </>
    )
}


export async function getServerSideProps({ query: { page = 1 } }) {
    try {
        const { publicRuntimeConfig } = getConfig();
        const API_URL = publicRuntimeConfig.API_URL;

        // If page is equal to 1 then start from 0, else minus 1 and mutiply by 3
        const start = parseInt(page) === 1 ? 0 : (parseInt(page) - 2) + 10;

        const res = await axios.get(`${API_URL}/reviews?_start=${start}&_limit=10`)
        const data = res.data;

        const numberOfReviewsRes = await axios.get(`${API_URL}/reviews/count`)
        const numberOfReviews = numberOfReviewsRes.data;

        return {
            props: {
                reviews: data,
                numberOfReviews: numberOfReviews,
                page: parseInt(page)
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}
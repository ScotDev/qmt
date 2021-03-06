import Link from 'next/link';
import getConfig from 'next/config';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { motion } from "framer-motion"

import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'


export default function articles({ articles, page, numberOfArticles }) {

    const pageSEO = {
        title: "Articles",
        description: "Blog posts from The Quarantine Mixtape",
        openGraph: {
            title: "Articles",
            description: "Blog posts from The Quarantine Mixtape"
        }
    }
    const router = useRouter();
    const lastPage = Math.ceil(numberOfArticles / 10)

    if (articles === undefined || articles.length == 0) {
        return <Error statusCode={204} errorTitle={"Looks like there's nothing here yet!"}></Error>
    }
    return (<>
        <NextSeo {...pageSEO}></NextSeo>

        <motion.div className="articles" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="page-title">Articles</h1>

            <div className="articles-grid">

                {articles.map(item => (
                    <Link href="/articles/[id]" as={`/articles/${item.id}`} key={item.id}>
                        <div className="articles-grid-card">
                            <div className="articles-grid-card-text">
                                <p className="card-text-title">{item.title}</p>
                                <p className="card-text-subtitle">{item.category}</p>
                                <p className="card-text-description">{item.description_preview}</p>
                                <span className="card-text-date"><Moment format="Do MMM, YYYY">{item.createdAt}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </motion.div>

        <div className="btn-group">
            <button className={page <= 1 ? "btn-disabled" : "btn-primary"} disabled={page <= 1} onClick={() => router.push(`/articles?page=${page - 1}`)}>Previous</button>

            <button className="btn-info">{page}</button>

            <button className={page >= lastPage ? "btn-disabled" : "btn-secondary"} disabled={page >= lastPage} onClick={() => router.push(`/articles?page=${page + 1}`)}>Next</button>
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

        const res = await axios.get(`${API_URL}/articles?_start=${start}&_limit=10`)
        const data = res.data;

        const numberOfArticlesRes = await axios.get(`${API_URL}/articles/count`)
        const numberOfArticles = numberOfArticlesRes.data;

        return {
            props: {
                articles: data,
                numberOfArticles: numberOfArticles,
                page: parseInt(page)
            }
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'


export default function articles({ articles }) {
    if (!articles) {
        return <Error statusCode={404}></Error>
    }
    return (<>

        <Head>
            <title>thequarantinemixtape | Articles</title>
        </Head>

        <div className="article">
            <h1 className="section-title">Articles</h1>

            <div className="article-grid">

                {articles.map(item => (
                    <Link href="/articles/[id]" as={`/articles/${item.id}`} key={item.id}>
                        <div className="article-grid-card">
                            <div className="article-grid-card-text">
                                <p className="article-grid-card-text-title">{item.title}</p>
                                <p className="article-grid-card-text-subtitle">{item.category}</p>
                                <p className="article-grid-card-text-description">{item.description_preview}</p>
                                <span className="article-grid-card-text-date"><Moment format="do MMM, YYYY">{item.updated_at}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </div>
    </>
    )
}



export async function getServerSideProps() {
    const { API_URL } = process.env;

    try {
        const res = await axios.get(`${API_URL}/articles`)
        const data = res.data;

        return {
            props: {
                articles: data
            }
        }
    } catch (error) {
        // res.statusCode = 404;
        return {
            props: {}
        }
    }




}
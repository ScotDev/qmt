import Head from 'next/head';
// import Link from 'next/link';
import axios from 'axios';
import Moment from 'react-moment';
import Error from '../components/Error';

export default function articles({ articles }) {
    if (articles === false) {
        return (<Error></Error>)
    } else {
        return (<>

            <Head>
                <title>thequarantinemixtape | Articles</title>
            </Head>

            <div className="article">
                <h1 className="section-title">Articles</h1>

                <div className="article-grid">



                    {articles.map(item => (
                        <div className="article-grid-card" key={item.id}>
                            <div className="article-grid-card-text">
                                <p className="article-grid-card-text-title">{item.title}</p>
                                <p className="article-grid-card-text-subtitle">{item.category}</p>
                                <p className="article-grid-card-text-description">{item.description_preview}</p>
                                <span className="article-grid-card-text-date"><Moment format="do MMM, YYYY">{item.updated_at}</Moment></span>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
        )
    }

}

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/articles`);
    console.log(res)

    const data = res.data;

    if (res.status !== 200) {
        return {
            props: {
                articles: false
            }
        }
    } else {
        return {
            props: {
                articles: data
            }
        }
    }


}
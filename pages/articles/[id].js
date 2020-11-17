import getConfig from 'next/config';
import { NextSeo } from 'next-seo';


import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import ArticlePost from '../components/ArticlePost';


export default function Article({ data }) {
    const pageSEO = {
        title: `${data.title}`,
        description: `${data.description_preview}`,
        openGraph: {
            title: `${data.title}`,
            description: `${data.description_preview}`
        }
    }


    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (<>
        <NextSeo {...pageSEO}></NextSeo>
        <ArticlePost data={data}></ArticlePost>
    </>
    )
}



export async function getServerSideProps(context) {
    const { publicRuntimeConfig } = getConfig();
    const API_URL = publicRuntimeConfig.API_URL;

    try {
        const { id } = context.query;
        const res = await axios.get(`${API_URL}/articles/${id}`);
        const data = res.data;

        return {
            props: {
                data: data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}

        }
    }

}

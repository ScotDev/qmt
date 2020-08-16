import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import ReviewPost from '../components/ReviewPost';


export default function Review({ data }) {
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
        <ReviewPost data={data}></ReviewPost>
    </>
    )
}



export async function getServerSideProps(context) {
    try {
        const { id } = context.query;
        const { publicRuntimeConfig } = getConfig();
        const API_URL = publicRuntimeConfig.API_URL;
        const res = await axios.get(`${API_URL}/reviews/${id}`);
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

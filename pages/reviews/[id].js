import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import Review_post from '../components/Review_post';


export default function Review({ data }) {


    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (<>
        <Head>
            <title>thequarantinemixtape | {data.title}</title>
        </Head>
        <Review_post data={data}></Review_post>
    </>
    )
}



export async function getServerSideProps(context) {
    try {
        const { id } = context.query;
        const { API_URL } = process.env;
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

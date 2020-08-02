import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import Article_post from '../components/Article_post';



export default function Article({ data }) {

    const { API_URL } = process.env;

    return (<>
        <Head>
            <title>thequarantinemixtape | Article</title>
        </Head>

        {data ? <Article_post data={data} API_URL={API_URL}></Article_post> : <Error statusCode={404}></Error>}

    </>
    )
}



export async function getServerSideProps(context) {
    try {
        const { id } = context.query;
        const { API_URL } = process.env;
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

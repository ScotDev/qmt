import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';

import Error from '../components/Error'
import ArticlePost from '../components/ArticlePost';


export default function Article({ data }) {


    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (<>
        <Head>
            <title>thequarantinemixtape | {data.title}</title>
        </Head>
        <ArticlePost data={data}></ArticlePost>
    </>
    )
}



export async function getServerSideProps(context) {
    const API_URL = "https://calm-depths-31916.herokuapp.com";
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

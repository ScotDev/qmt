import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { motion } from "framer-motion"

import Error from './components/Error';


export default function about({ data }) {
    const pageSEO = {
        title: "About",
        description: "About The Quarantine Mixtape",
        openGraph: {
            title: "About",
            description: "About The Quarantine Mixtape"
        }
    }

    if (!data || data === undefined || data.length == 0) {
        return <Error statusCode={204} errorTitle={"Looks like there's nothing here yet!"}></Error>
    }

    return (
        <>
            <NextSeo {...pageSEO}></NextSeo>

            <motion.div className="page-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="page-title">ABOUT THE QUARANTINE MIXTAPE</h1>
                {data ? <ReactMarkdown source={data.text} className="page-description"></ReactMarkdown> : null}
            </motion.div>
        </>
    )
}

export async function getStaticProps() {

    try {
        const { publicRuntimeConfig } = getConfig();
        const API_URL = publicRuntimeConfig.API_URL;

        const res = await axios.get(`${API_URL}/about`)

        const data = res.data;

        return {
            props: {
                data: data
            },
            revalidate: 1
        }
    } catch (error) {
        return {
            props: {},
            revalidate: 1
        }
    }


}
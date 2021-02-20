import getConfig from 'next/config';
import { NextSeo } from 'next-seo';

import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { motion } from "framer-motion"

import Error from './components/Error';
import Image from './components/Image';


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

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* <div className="page-intro"> */}
                <h1 className="page-title">ABOUT THE QUARANTINE MIXTAPE</h1>
                {/* </div> */}

                <div className="about">

                    <Image src={data.profile_image.url} imgClass={"profile-image"} imgAlt={"Profile of website owner"} thumb={data.profile_image.formats.thumbnail.url} imgWidth={data.profile_image.width}></Image>
                    <div className="post-main-text">
                        {data ? <ReactMarkdown source={data.text} ></ReactMarkdown> : null}
                    </div>

                    <Image src={data.final_image.url} imgClass={"final-image"} imgAlt={"Generic stage with dry ice"} thumb={data.final_image.formats.thumbnail.url} imgWidth={data.final_image.width}></Image>
                </div>
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
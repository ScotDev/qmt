import Head from 'next/head';
import getConfig from 'next/config';
import axios from 'axios'

export default function about({ data }) {
    return (
        <>
            <Head>
                <title>thequarantinemixtape | About</title>
            </Head>
            <div className="page-intro">
                <h1 className="page-title">ABOUT THE QUARANTINE MIXTAPE</h1>
                <p className="page-description">
                    {data ? data.text : null}
                </p>
            </div>
        </>
    )
}

export async function getServerSideProps() {

    try {
        const { publicRuntimeConfig } = getConfig();
        const API_URL = publicRuntimeConfig.API_URL;

        const res = await axios.get(`${API_URL}/about`)

        const data = res.data;

        return {
            props: {
                data: data,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}
        }
    }


}
import Head from 'next/head';
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
                    {data ? data.about : null}
                </p>
            </div>
        </>
    )
}

export async function getServerSideProps() {

    // Get articles for article grid
    try {
        const { API_URL } = process.env;

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
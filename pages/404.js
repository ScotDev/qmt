import Link from 'next/link';
import Head from 'next/head';


import Error from './components/Error'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>thequarantinemixtape | 404</title>
            </Head>
            <Error statusCode={404}></Error>
        </>
    )
}

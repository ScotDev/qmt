import Link from 'next/link';
import Head from 'next/head';


export default function Custom404() {
    return (
        <>
            <Head>
                <title>thequarantinemixtape | 404</title>
            </Head>
            <div className="not-found">
                <h1>Page not found</h1>
                <Link href="/">
                    <a alt="Return to homepage">Go Back <i class="las la-arrow-right"></i></a>
                </Link>
            </div>
        </>
    )
}

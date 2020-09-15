import { NextSeo } from 'next-seo';

import ReactHookForm from './components/Functional/ReactHookForm'

export default function submit() {
    const pageSEO = {
        title: "Submit Music",
        description: "Submit music for review",
        openGraph: {
            title: "Submit Music",
            description: "Submit music for review"
        }
    }


    return (<>

        <NextSeo {...pageSEO}></NextSeo>

        <div className="page-intro">
            <h1 className="page-title">Submit Music for Review</h1>
        </div>
        <ReactHookForm></ReactHookForm>

    </>
    )
}

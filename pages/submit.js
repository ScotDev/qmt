import { NextSeo } from 'next-seo';

import FormikForm from './components/Functional/FormikForm'
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


    return (
        <>

            <NextSeo {...pageSEO}></NextSeo>

            <div className="page-intro">
                <h1 className="page-title">Submit Music for Review</h1>
                <p className="page-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <ReactHookForm></ReactHookForm>
        </>
    )
}

import { NextSeo } from 'next-seo';
import { motion } from "framer-motion"

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

        <motion.div className="page-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="page-title">Submit Music for Review</h1>
            {/* <p className="page-description">Submissions are currently closed until 2021</p> */}
        </motion.div>
        <ReactHookForm></ReactHookForm>
    </>
    )
}

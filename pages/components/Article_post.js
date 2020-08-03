import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
// import NProgress from 'nprogress';

import dynamic from 'next/dynamic';

import Spinner from './Spinner';

const DynamicImg = dynamic(
    () => import('./Img'),
    { ssr: false, loading: () => <Spinner></Spinner> }
)

import Error from './Error'
// import Img from '../components/Img'

export default function Article_post({ data }) {

    const imgPath = data.main_img.url;
    const imgAlt = "article header picture"
    const [totalWordCount, settotalWordCount] = useState(0)
    const [rawText, setrawText] = useState(data.text)
    const [readTimeEstimate, setreadTimeEstimate] = useState(false)

    // const [loading, setloading] = useState(true)

    const getWordCount = () => {
        const avgWordsPerMinute = 265;
        const words = rawText.split(" ");
        settotalWordCount(words.length);

        let minutes;


        if (totalWordCount <= avgWordsPerMinute) {
            minutes = 1;
        } else {
            minutes = totalWordCount / avgWordsPerMinute;
        }



        const formattedMinutes = minutes.toFixed(0)


        setreadTimeEstimate(formattedMinutes.toString())

        console.log(totalWordCount)
    }

    // const pageLoadDelay = () => {
    //     NProgress.start()
    //     const delay = setTimeout(() => {
    //         // setloading(false)
    //         NProgress.done()
    //     }, 2000)
    //     return () => clearTimeout(delay)
    // }

    useEffect(() => {
        getWordCount()
        // pageLoadDelay()
    }, [readTimeEstimate])

    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (
        <div className="article-post" key={data.id}>
            <h1 className="article-post-title">{data.title}</h1>
            <p className="article-post-read-time">{readTimeEstimate && readTimeEstimate + " min read"}</p>
            <h2 className="article-post-description">{data.description_preview}</h2>
            <div className="article-post-author-chip">
                <img className="article-post-author-chip-icon" src="/images/profile.jpg"></img>
                <div className="article-post-author-chip-details">
                    <p className="article-post-author-chip-details-name">{data.created_by.firstname}</p>
                    <p className="article-post-author-chip-details-date"><Moment format="do MMM, YYYY">{data.created_at}</Moment></p>
                </div>
            </div>
            {/* <Img imgPath={imgPath} imgClass={"article-post-main-img"} imgAlt={imgAlt}></Img> */}
            <DynamicImg imgPath={imgPath} imgClass={"article-post-main-img"} imgAlt={imgAlt}></DynamicImg>
            <p className="article-post-main-text">{data.text}</p>
        </div>
    )
}

import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

// import dynamic from 'next/dynamic';

// import Spinner from './Spinner';

// const DynamicImg = dynamic(
//     () => import('./Img'),
//     { loading: () => <Spinner></Spinner> }
// )

import Error from './Error'
import Img from './Img'

export default function Article_post({ data }) {

    const imgAlt = "Article header picture"
    const [totalWordCount, settotalWordCount] = useState(0)
    const [rawText, setrawText] = useState("")
    const [readTimeEstimate, setreadTimeEstimate] = useState(0)

    const getWordCount = () => {
        const avgWordsPerMinute = 265;
        setrawText(data.text)
        const words = rawText.split(" ");
        settotalWordCount(words.length);

        let minutes;

        if (!rawText) {
            minutes = 0
        } else if (totalWordCount <= avgWordsPerMinute) {
            minutes = 1;
        } else {
            minutes = totalWordCount / avgWordsPerMinute;
        }

        const formattedMinutes = minutes.toFixed(0)

        if (minutes === 0) {
            setreadTimeEstimate(false)
        } else {
            setreadTimeEstimate(formattedMinutes.toString())
        }


    }

    useEffect(() => {
        getWordCount()
    })

    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (
        <div className="post" key={data.id}>
            <h1 className="post-title">{data.title}</h1>
            <p className="post-read-time">{readTimeEstimate && readTimeEstimate + " min read"}</p>
            <h2 className="post-description">{data.description_preview}</h2>
            <div className="post-author-chip">
                <img className="post-author-chip-icon" src="/images/profile.jpg"></img>
                <div className="post-author-chip-details">
                    <p className="post-author-chip-details-name">{data.created_by.firstname}</p>
                    <p className="post-author-chip-details-date"><Moment format="do MMM, YYYY">{data.created_at}</Moment></p>
                </div>
            </div>
            <Img imgPath={data.main_img.url} imgClass={"post-main-img"} imgAlt={imgAlt}></Img>
            {/* <DynamicImg imgPath={imgPath} imgClass={"post-main-img"} imgAlt={imgAlt}></DynamicImg> */}
            <p className="post-main-text">{data.text}</p>
        </div>
    )
}

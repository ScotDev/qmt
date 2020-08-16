import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

import ReactMarkdown from 'react-markdown';

// import dynamic from 'next/dynamic';

// import Spinner from './Spinner';

// const DynamicImg = dynamic(
//     () => import('./Img'),
//     { loading: () => <Spinner></Spinner> }
// )

import Error from './Error';
import Img from './Img';
import ShareGroup from './ShareGroup';

export default function Article_post({ data }) {

    const imgAlt = "Article header"
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
            {data.category === "Sponsored" ? <p className="post-category">Sponsored <i class="las la-comments-dollar"></i></p> : null}
            <div className="post-author-chip">
                <img className="post-author-chip-icon" src="https://bucketeer-22d646bf-cc53-432e-a8c1-70360c95d911.s3.amazonaws.com/avatar_690655d741.jpg"></img>
                <div className="post-author-chip-details">
                    <p className="post-author-chip-details-name">{data.created_by.firstname}</p>
                    <p className="post-author-chip-details-date"><Moment format="Do MMM, YYYY">{data.createdAt}</Moment></p>
                </div>
            </div>
            <Img imgPath={data.main_img.url} imgClass={"post-main-img"} imgAlt={imgAlt}></Img>
            {/* <DynamicImg imgPath={imgPath} imgClass={"post-main-img"} imgAlt={imgAlt}></DynamicImg> */}
            <ReactMarkdown source={data.text} className="post-main-text"></ReactMarkdown>
            <ShareGroup title={data.title}></ShareGroup>
        </div>
    )
}

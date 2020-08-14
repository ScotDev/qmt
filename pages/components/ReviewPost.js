import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

import Error from './Error';
import Img from './Img';
import ShareGroup from './ShareGroup';

export default function Article_post({ data }) {

    const imgAlt = "Album cover"
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
            <h2 className="post-artist">{data.artist}</h2>
            <h3 className="post-description">{data.description_preview}</h3>
            <p className="post-read-time">{readTimeEstimate && readTimeEstimate + " min read"}</p>
            <div className="post-author-chip">
                {/* Change img src for production */}
                <Img imgClass={"post-author-chip-icon"} imgPath="https://bucketeer-22d646bf-cc53-432e-a8c1-70360c95d911.s3.amazonaws.com/avatar_690655d741.jpg" imgAlt="Author profile photo"></Img>
                <div className="post-author-chip-details">
                    <p className="post-author-chip-details-name">{data.created_by.firstname}</p>
                    <p className="post-author-chip-details-date"><Moment format="Do MMM, YYYY">{data.createdAt}</Moment></p>
                </div>
            </div>
            <Img imgPath={data.album_img.url} imgClass={"post-main-img"} imgAlt={imgAlt}></Img>
            <p className="post-main-text">{data.text}</p>
            <ShareGroup title={data.title}></ShareGroup>
        </div>
    )
}

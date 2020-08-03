import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

import Error from '../components/Error'

export default function Article_post({ data }) {

    const [totalWordCount, settotalWordCount] = useState(0)
    const [rawText, setrawText] = useState(data.text)
    const [readTimeEstimate, setreadTimeEstimate] = useState(false)

    const getWordCount = () => {
        const avgWordsPerMinute = 265;
        // settext(data.text)
        const words = rawText.split(" ");
        settotalWordCount(words.length);

        // There is a better way to do this

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

    useEffect(() => {
        getWordCount()
        console.log(readTimeEstimate)
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
            {/* <img className="article-post-main-img" src={`${API_URL}${data.main_img.url}`} ></img> */}
            <p className="article-post-main-text">{data.text}</p>
        </div>
    )
}

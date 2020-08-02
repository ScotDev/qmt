import React from 'react';
import Moment from 'react-moment';

import Error from '../components/Error'

export default function Article_post({ data }) {
    // const { API_URL } = process.env;
    if (!data) {
        return <Error statusCode={404}></Error>
    }

    return (
        <div className="article-post" key={data.id}>
            <h1 className="article-post-title">{data.title}</h1>
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

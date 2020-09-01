import React from 'react';
import { useRouter } from 'next/router';

import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

export default function ShareGroup({ title }) {
    const router = useRouter();
    const baseUrl = "https://thequarantinemixtape.com";
    const relativeUrl = router.asPath;
    const url = baseUrl + relativeUrl;
    return (
        <div className="share-group">
            <p className="share-group-title">Liked this post? Share it!</p>
            <ul className="share-buttons">
                <li className="share-button" id="twitter-share"><TwitterShareButton title={title} url={url}><i className="icon-twitter"></i></TwitterShareButton></li>
                <li className="share-button" id="whatsapp-share"><WhatsappShareButton title={title} url={url} separator={"\n"}><i className="icon-whatsapp"></i></WhatsappShareButton></li>
                <li className="share-button" id="reddit-share"><RedditShareButton title={title} url={url}><i className="icon-reddit"></i></RedditShareButton></li>
                <li className="share-button" id="fb-share"><FacebookShareButton quote={title} url={url}><i className="icon-facebook"></i></FacebookShareButton></li>
                <li className="share-button" id="email-share"><EmailShareButton subject={title} url={url} body={"Check out this post from The Quarantine Mixtape: "} separator={"\n"}><i className="icon-email"></i></EmailShareButton></li>
            </ul>

        </div>
    )
}

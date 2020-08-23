import React from 'react';
import { useRouter } from 'next/router';

import {
    EmailShareButton,
    FacebookShareButton,
    RedditShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

export default function ShareGroup({ title, id }) {
    const router = useRouter();
    const baseUrl = "https://thequarantinemixtape.com";
    const relativeUrl = router.asPath;
    const url = baseUrl + relativeUrl;
    return (
        <div className="share-group">
            <p className="share-group-title">Liked this post? Share it!</p>
            <ul className="share-buttons">
                <li className="share-button" id="twitter-share"><TwitterShareButton title={title} url={url}><i className="lab la-twitter"></i></TwitterShareButton></li>
                <li className="share-button" id="whatsapp-share"><WhatsappShareButton title={title} url={url}><i className="lab la-whatsapp"></i></WhatsappShareButton></li>
                <li className="share-button" id="reddit-share"><RedditShareButton title={title} url={url}><i className="lab la-reddit"></i></RedditShareButton></li>
                {/* Facebook requires App ID to work first */}
                {/* <li className="share-button"><FacebookShareButton title={title} url={url}><i className="lab la-facebook"></i></FacebookShareButton></li> */}
                <li className="share-button" id="email-share"><EmailShareButton subject={title} url={url} body={"Check out this post from The Quarantine Mixtape: "}><i className="las la-envelope"></i></EmailShareButton></li>
            </ul>

        </div>
    )
}

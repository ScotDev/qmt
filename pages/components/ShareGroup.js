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
    const baseUrl = "https://www.google.com";
    const relativeUrl = router.asPath;
    const url = baseUrl + relativeUrl;
    return (
        <div className="share-group">
            <ul className="share-buttons">
                <li className="share-button"><TwitterShareButton title={title} url={url}><i className="lab la-twitter"></i></TwitterShareButton></li>
                <li className="share-button"><WhatsappShareButton title={title} url={url}><i className="lab la-whatsapp"></i></WhatsappShareButton></li>
                {/* <li className="share-button"><FacebookShareButton title={title} url={url}><i className="lab la-facebook"></i></FacebookShareButton></li> */}
                <li className="share-button"><EmailShareButton subject={title} url={url} body={"Check out this post from The Quarantine Mixtape"}><i class="las la-envelope"></i></EmailShareButton></li>
            </ul>

        </div>
    )
}

import React from 'react'
import lazysizes from 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/attrchange/ls.attrchange';

export default function Img({ author, imgPath, imgClass, imgAlt }) {

    // This is a shortcut due to Strapi's User panel not allowing images to be associated with them

    if (author === "Celia") {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/celia_1e763a2b73.jpg"
    } else if (author === "Admin") {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/admin_7244ee3f71.jpg"
    } else if (author === "" || null) {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/anon_eba98a4ae4.jpg"
    } else {
        imgPath = imgPath
    }


    return (
        <img src={imgPath} style={{ objectFit: "cover" }} className={`${imgClass} lazyload`} alt={imgAlt}>
        </img>
    )


}

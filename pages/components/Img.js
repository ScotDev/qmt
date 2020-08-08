
import React from 'react'


import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

// console.log(publicRuntimeConfig.API_URL)


export default function Img({ imgPath, imgClass, imgAlt }) {

    const devImgPath = "https://source.unsplash.com/random?waves/1920x1080"
    // console.log(`${publicRuntimeConfig.API_URL}${imgPath}`)


    return (
        // <img src={publicRuntimeConfig.API_URL + imgPath} className={imgClass} alt={imgAlt}>
        <img src={devImgPath} style={{ objectFit: "cover" }} className={imgClass} alt={imgAlt}>
        </img>
    )


}

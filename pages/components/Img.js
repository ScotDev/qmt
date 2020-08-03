
import React from 'react'

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()

// console.log(publicRuntimeConfig.API_URL)

export default function Img({ imgPath, imgClass, imgAlt }) {


    return (
        <img src={`${publicRuntimeConfig.API_URL}${imgPath}`} className={imgClass} alt={imgAlt}>
        </img>
    )


}

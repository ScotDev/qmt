import React from 'react'


export default function Img({ author, imgPath, imgClass, imgAlt }) {

    // This is a shortcut due to Strapi's User panel not allowing images to be associated with users
    // All img urls are the same for now

    if (author === "Celia") {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/D_Bzg_Del8_400x400_1_8f2c6bd3ba.jpg"
    } else if (author === "Admin") {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/D_Bzg_Del8_400x400_1_8f2c6bd3ba.jpg"
    } else if (author === "" || null) {
        imgPath = "https://bucketeer-5a8ae918-5ea2-4eb8-aeb4-3d222713feda.s3.eu-west-1.amazonaws.com/D_Bzg_Del8_400x400_1_8f2c6bd3ba.jpg"
    } else {
        imgPath = imgPath
    }


    return (
        <img src={imgPath} style={{ objectFit: "cover" }} className={`${imgClass} lazyload`} alt={imgAlt}>
        </img>
    )


}

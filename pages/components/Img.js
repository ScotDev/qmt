
import React from 'react'

export default function Img({ imgPath, imgClass, imgAlt }) {


    return (
        <img src={imgPath} style={{ objectFit: "cover" }} className={imgClass} alt={imgAlt}>
        </img>
    )


}

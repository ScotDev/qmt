import React from 'react'



// Rework this to function as intended
export default function AspectRatioImg({ imgSrc, imgAlt, imgClass }) {
    return (
        <div style={{ backgroundImage: `url(${imgSrc})` }} className={`${imgClass} lazyload`} >

            {/* <img src={imgSrc} className={`${imgClass} lazyload`} alt={imgAlt} > */}
            {/* </img> */}

        </div>
    )
}

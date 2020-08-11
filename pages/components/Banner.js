import React from 'react'


import Img from './Img'

export default function Banner({ banner }) {

    if (!banner) {
        return null
    }

    const baseRef = banner[0]
    const banner_img = baseRef.banner_img.url;
    const bannerAlt = baseRef.title

    return (
        <section className="banner">
            <a href={baseRef.promo_link} alt={bannerAlt} className="banner-img">
                <Img imgPath={banner_img} imgClass="banner-img" alt="Promotional banner"></Img>
            </a>
        </section>
    )
}

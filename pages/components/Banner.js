import React from 'react';
import Link from 'next/link'


export default function Banner({ banner }) {

    if (!banner) {
        return null
    }

    const baseRef = banner[0]
    // const banner_img = baseRef.banner_img.formats.large.url;
    const banner_img = baseRef.banner_img.url;
    // const bannerAlt = baseRef.title

    return (
        <div className="banner">
            {/* <a href={baseRef.promo_link} alt={bannerAlt} className="banner-img"> */}
            <div className="banner-content" style={{ backgroundImage: `url(${banner_img})` }}>
                <h1 className="banner-content-title">Welcome to The Quarantine Mixtape</h1>
                <h2 className="banner-content-subtitle">Promoting small and unsigned artists</h2>

                <div className="banner-content-btn-group">
                    <Link href="/submit"><button className="btn-cta">Submit music</button></Link>
                    <Link href="/about"><button className="btn-info">About us</button></Link>
                </div>
            </div>
        </div>
    )
}

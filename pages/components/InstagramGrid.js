import Link from 'next/link'
import axios from 'axios'

export default function Instagram_grid({ posts }) {
    const baseUrl = "https://api.instagram.com/oembed?url=";
    if (!posts) {
        return null
    }

    return (<div className="instagram">
        <h2 className="section-title"><a href="https://www.instagram.com/the.quarantine.mixtape/" target="_blank" rel="noopener">Follow us</a></h2>
        <div className="instagram-grid">

            {posts.map(item => (
                <a href={item.post_url} target="_blank" key={item.id} rel="noopener">
                    <div className="instagram-grid-item">
                        <img src={item.post_url + "media/?size=l"}></img>
                        <div className="instagram-grid-item-overlay">
                            <p className="instagram-grid-item-overlay-text">
                                {item.post_text}
                            </p>
                        </div>
                    </div>
                </a>
            ))}

        </div>
        <Link href="/">
            <a href="https://www.instagram.com/the.quarantine.mixtape/" target="_blank" alt="Instagram profile" className="cta-link" rel="noopener">See more <i className="las la-arrow-right"></i></a>
        </Link>

        <hr></hr>
    </div>
    )
}

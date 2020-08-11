import Link from 'next/link';
import Moment from 'react-moment';
import Img from './Img'

export default function Reviews_homepage({ reviews }) {
    if (!reviews) {
        console.log("No review prop available")
        return null
    }
    return (<>

        <div className="post-homepage">
            <Link href="/reviews">
                <h2 className="section-title">Album Reviews</h2>
            </Link>
            <div className="post-homepage-grid">

                {reviews.map(item => (
                    <Link href="/reviews/[id]" as={`/reviews/${item.id}`} key={item.id}>
                        <div className="post-homepage-grid-card">
                            <Img imgPath={item.album_img} imgClass={"card-img"} imgAlt={item.title}></Img>
                            <div className="post-homepage-grid-card-text card-text">
                                <p className="card-text-title">{item.title}</p>
                                <p className="card-text-subtitle">{item.artist}</p>
                                <p className="post-homepage-grid-card-text-description card-text-description">{item.description_preview}</p>
                                <span className="card-text-date"><Moment format="do MMM, YYYY">{item.updated_at}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
            <Link href="/reviews">
                <a alt="Full review list" className="cta-link">See more <i className="las la-arrow-right"></i></a>
            </Link>
            <hr></hr>
        </div>
    </>
    )
}
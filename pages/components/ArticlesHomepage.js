import Link from 'next/link';
import Moment from 'react-moment';

export default function Article_grid({ articles }) {
    if (articles === undefined || articles.length == 0) {
        return null
    } else {
        return (<>

            <div className="post-homepage">
                <Link href="/articles">
                    <h2 className="section-title">Articles</h2>
                </Link>
                <div className="post-homepage-grid">

                    {articles.map(item => (
                        <Link href="/articles/[id]" as={`/articles/${item.id}`} key={item.id} >
                            <div className="post-homepage-grid-card">
                                <div className="post-homepage-grid-card-text card-text">
                                    <p className="card-text-title">{item.title}</p>
                                    <p className="card-text-subtitle">{item.category}</p>
                                    <p className="post-homepage-grid-card-text-description card-text-description">{item.description_preview}</p>
                                    <span className="card-text-date"><Moment format="Do MMM, YYYY">{item.createdAt}</Moment></span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
                <Link href="/articles">
                    <a alt="Full article list" className="cta-link">See more <i className="icon-arrow-right"></i></a>
                </Link>
                <hr></hr>
            </div>
        </>
        )
    }

}



import Link from 'next/link';
import Moment from 'react-moment';

export default function Article_grid({ articles }) {
    if (!articles) {
        return <p>Nothing found</p>
    }
    return (<>

        <div className="article-homepage">
            <h2 className="section-title">Articles</h2>

            <div className="article-homepage-grid">

                {articles.map(item => (
                    <Link href="/articles/[id]" as={`/articles/${item.id}`} key={item.id}>
                        <div className="article-homepage-grid-card">
                            <div className="article-homepage-grid-card-text">
                                <p className="article-homepage-grid-card-text-title">{item.title}</p>
                                <p className="article-homepage-grid-card-text-subtitle">{item.category}</p>
                                <p className="article-homepage-grid-card-text-description">{item.description_preview}</p>
                                <span className="article-homepage-grid-card-text-date"><Moment format="do MMM, YYYY">{item.updated_at}</Moment></span>
                            </div>
                        </div>
                    </Link>
                ))}
                <Link href="/">
                    <a href="https://www.instagram.com/the.quarantine.mixtape/" target="_blank" alt="Full article list" className="cta-link">View more <i className="las la-arrow-right"></i></a>
                </Link>
            </div>
        </div>
    </>
    )
}



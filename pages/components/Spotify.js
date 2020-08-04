import Link from 'next/link';

export default function Spotify() {
    return (<>
        <div className="spotify">
            <h2 className="section-title">Playlist</h2>
            <iframe className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pUfcNaqfNUz4RZj92EQDR" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <Link href="/">
                <a href="https://www.instagram.com/the.quarantine.mixtape/" target="_blank" alt="Instagram profile" className="cta-link">See more <i className="las la-arrow-right"></i></a>
            </Link>
            <hr></hr>
        </div>

    </>
    )
}



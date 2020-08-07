export default function Spotify() {
    return (<>
        <div className="spotify">
            <a className="section-title" href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" alt="Spotify profile">Spotify</a>
            <div className="spotify-grid">
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Playlist</h3>
                    <iframe className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pUfcNaqfNUz4RZj92EQDR" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                </div>
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Podcasts</h3>
                    <iframe className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pWvASC1XJkMvHrXlaB6GZ" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>

            <a href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" target="_blank" alt="Spotify profile" className="cta-link">See more <i className="las la-arrow-right"></i></a>
            <hr></hr>
        </div>

    </>
    )
}

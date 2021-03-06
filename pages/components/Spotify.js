
export default function Spotify() {


    return (<>
        <div className="spotify">
            <a className="section-title" href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" alt="Spotify profile">Playlists</a>
            <div className="spotify-grid">
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Playlist</h3>

                    <iframe loading="lazy" className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pUfcNaqfNUz4RZj92EQDR" frameBorder="0" allow="encrypted-media" allowtransparency="true" title="Spotify playlist"></iframe>

                </div>
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Podcast</h3>

                    <iframe loading="lazy" className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pWvASC1XJkMvHrXlaB6GZ" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify podcasts"></iframe>

                </div>
            </div>

            <a href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" target="_blank" alt="Spotify profile" className="cta-link" rel="noopener">See more <i className="icon-external-link"></i></a>
            <hr></hr>
        </div>

    </>
    )




}
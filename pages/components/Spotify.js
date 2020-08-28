import SpotifyPlayer from 'react-spotify-player';


export default function Spotify() {

    // const size = {
    //     width: '100%',
    //     height: '500px',
    // };

    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'



    return (<>
        <div className="spotify">
            <a className="section-title" href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" alt="Spotify profile">Spotify</a>
            <div className="spotify-grid">
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Playlist</h3>
                    {/* <iframe loading="lazy" className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pUfcNaqfNUz4RZj92EQDR" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify playlist" sandbox="allow-scripts"></iframe> */}
                    <SpotifyPlayer
                        className="spotify-embed"
                        uri="spotify:playlist:1pUfcNaqfNUz4RZj92EQDR"
                        // size={size}
                        view={view}
                        theme={theme}
                    ></SpotifyPlayer>

                </div>
                <div className="spotify-grid-item">
                    <h3 className="spotify-embed-title">Podcast</h3>
                    {/* <iframe loading="lazy" className="spotify-embed" src="https://open.spotify.com/embed/playlist/1pWvASC1XJkMvHrXlaB6GZ" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Spotify podcasts" sandbox="allow-scripts"></iframe> */}

                    <SpotifyPlayer
                        uri="spotify:playlist:1pWvASC1XJkMvHrXlaB6GZ"
                        // size={size}
                        view={view}
                        theme={theme}
                    ></SpotifyPlayer>

                </div>
            </div>

            <a href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" target="_blank" alt="Spotify profile" className="cta-link" rel="noopener">See more <i className="las la-arrow-right"></i></a>
            <hr></hr>
        </div>

    </>
    )
}

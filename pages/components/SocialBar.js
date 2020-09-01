import React from 'react'

export default function Social() {
    return (
        <div className="social-group">
            <ul>
                <li className="social-group-item"><a href="https://www.instagram.com/the.quarantine.mixtape/" alt="instagram" target="_blank" rel="noopener"><i className="icon-instagram"></i></a></li>
                <li className="social-group-item"><a href="https://www.youtube.com/channel/UCprqAXVwiSiPvCpCSZ1ivsg/" alt="youtube" target="_blank" rel="noopener"><i className="icon-youtube"></i></a></li>
                <li className="social-group-item"><a href="https://twitter.com/TheQuarantineMx" alt="twitter" target="_blank" rel="noopener"><i className="icon-twitter"></i></a></li>
                <li className="social-group-item"><a href="https://ko-fi.com/thequarantinemixtape" alt="ko-fi" target="_blank" rel="noopener"><i className="icon-ko-fi"></i></a></li>
                <li id="spotify" className="social-group-item"><a href="https://open.spotify.com/user/lv5m4f490qhizetbv10ka61sl?si=XOV0rsXzT9G80-r4m3iepg" alt="spotify" target="_blank" rel="noopener"><i className="icon-spotify"></i></a></li>
                <li id="email" className="social-group-item"><a href="mailto:the.quarantine.mixtape@gmail.com" alt="email" target="_blank" rel="noopener"><i className="icon-email"></i></a></li>
            </ul>
        </div>
    )
}

import Link from 'next/link';
import Router from 'next/router';
import React from 'react';


export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="nav-brand"><Link href="/"><a>QMT</a></Link></div>
            <ul className="nav-links">
                <li className="nav-link"><Link href="/"><a>Home</a></Link></li>
                <li className="nav-link"><Link href="/reviews"><a>Reviews</a></Link></li>
                <li className="nav-link"><Link href="/articles"><a>Articles</a></Link></li>
                <li className="nav-link"><Link href="/submit"><a>Submit music</a></Link></li>
                <li className="nav-link"><Link href="/about"><a>About</a></Link></li>
            </ul>

            <div className='hamburger'>
                <input type='checkbox' id="hamburger-checkbox" ></input>
                <div></div>
                <div></div>
                <div></div>

                <ul className="hamburger-links" >
                    <li className="hamburger-link"><Link href="/"><a className="hamburger-link-anchor">Home</a></Link></li>
                    <li className="hamburger-link"><Link href="/reviews"><a className="hamburger-link-anchor">Reviews</a></Link></li>
                    <li className="hamburger-link"><Link href="/articles"><a className="hamburger-link-anchor">Articles</a></Link></li>
                    <li className="hamburger-link"><Link href="/submit"><a className="hamburger-link-anchor">Submit music</a></Link></li>
                    <li className="hamburger-link"><Link href="/about"><a className="hamburger-link-anchor">About</a></Link></li>
                    <li className="hamburger-link">
                        <ul className="social-group-mobile">
                            <li className="social-group-mobile-item"><a href="https://twitter.com/TheQuarantineMx" alt="twitter" target="_blank" rel="noopener"><i className="lab la-twitter"></i></a></li>
                            <li className="social-group-mobile-item"><a href="https://www.instagram.com/the.quarantine.mixtape/" alt="instagram" target="_blank" rel="noopener"><i className="lab la-instagram"></i></a></li>
                            <li className="social-group-mobile-item"><a href="https://www.youtube.com/channel/UCprqAXVwiSiPvCpCSZ1ivsg/" alt="youtube" target="_blank" rel="noopener"><i className="lab la-youtube"></i></a></li>
                            <li className="social-group-mobile-item"><a href="https://ko-fi.com/thequarantinemixtape" alt="ko-fi" target="_blank"><i className="las la-coffee" rel="noopener"></i></a></li>
                            <li className="social-group-mobile-item"><a href="mailto:the.quarantine.mixtape@gmail.com" alt="email" target="_blank"><i className="las la-envelope" rel="noopener"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

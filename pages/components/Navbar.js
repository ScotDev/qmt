import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand"><Link href="/"><a>QMT</a></Link></div>
            <ul>
                <li className="nav-link"><Link href="/"><a>Home</a></Link></li>
                <li className="nav-link"><Link href="/articles"><a>Articles</a></Link></li>
                <li className="nav-link"><Link href="/reviews"><a>Reviews</a></Link></li>
                <li className="nav-link"><Link href="/about"><a>About</a></Link></li>
                <li className="nav-link"><Link href="/submit"><a>Submit music</a></Link></li>
                <li className="nav-link"><Link href="/pr"><a>PR</a></Link></li>
            </ul>
        </nav>
    )
}

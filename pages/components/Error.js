import React from 'react';
import Link from 'next/link';

export default function Error({ statusCode }) {
    return (
        <div className="error">
            <h1 className="error-title">Page could not be loaded</h1>
            <p>{statusCode}</p>
            <Link href="/">
                <a alt="Return to homepage">Go Back <i className="las la-arrow-right"></i></a>
            </Link>
        </div>
    )
}

import React from 'react';
import Link from 'next/link';

export default function Error({ statusCode }) {
    return (
        <div className="error">
            <h1 className="error-title">Page could not be found</h1>
            <p className="error-status-code">{statusCode}</p>
            <Link href="/">
                <a alt="Return to homepage" className="error-return-link">Go Back <i className="icon-arrow-right"></i></a>
            </Link>
        </div>
    )
}

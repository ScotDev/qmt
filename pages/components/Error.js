import React from 'react';
import Link from 'next/link';

export default function Error({ statusCode, errorTitle }) {
    if (errorTitle) {
        errorTitle = errorTitle
    } else {
        errorTitle = "Page could not be found"
    }
    return (
        <div className="error">
            <h1 className="error-title">{errorTitle}</h1>
            <p className="error-status-code">{statusCode}</p>
            <Link href="/">
                <a alt="Return to homepage" className="error-return-link">Go Back <i className="icon-arrow-right"></i></a>
            </Link>
        </div>
    )
}

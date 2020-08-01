import React from 'react';
import Link from 'next/link';

export default function Error() {
    return (
        <div className="error">
            <h1 className="error-title">Section could not be loaded</h1>
            <Link href="/">
                <a alt="Return to homepage">Go Back <i className="las la-arrow-right"></i></a>
            </Link>
        </div>
    )
}

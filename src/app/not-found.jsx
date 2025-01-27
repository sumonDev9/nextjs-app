import Link from 'next/link';
import React from 'react';

const ErrorPAges = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link href='/'>Go back to home</Link>
        </div>
    );
};

export default ErrorPAges;
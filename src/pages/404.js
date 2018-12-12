import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Salem from '../components/images/salem';

const NotFoundPage = () => (
    <>
        <SEO title="404: Not found" />
        <main
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                justifyContent: 'center',
                padding: '0 30px',
                textAlign: 'center',
                background: '#121619',
                color: '#f6f7eb',
            }}
        >
            <Salem />
            <h1 style={{ color: '#f6f7eb' }}>NOT FOUND</h1>
            <p>
                You just hit a route that doesn&#39;t exist... the sadness.
                Maybe go to the <Link to="/">main page</Link>?
            </p>
        </main>
    </>
);

export default NotFoundPage;

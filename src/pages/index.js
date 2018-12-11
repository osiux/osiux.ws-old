import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'center',
            padding: '0 30px',
            textAlign: 'center',
            background: '#485564',
            color: '#FAFAFA'
        }}>
            <p style={{
                fontSize: '3.75em',
                fontWeight: '600',
                padding: 0
            }}>
                ¡Hola! Soy Eduardo
            </p>
            <p style={{
                fontSize: '1.5rem',
                margin: '1.5rem 0',
                fontWeight: '100',
                padding: 0
            }}>
                Holi
            </p>
        </main>
    </Layout>
);

export default IndexPage;

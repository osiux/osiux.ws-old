import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Home"
            keywords={['landing', 'developer', 'react', 'frontend']}
        />
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
            <p
                style={{
                    fontSize: '3.75em',
                    fontWeight: '600',
                }}
            >
                Hi! I'm Eduardo.
            </p>
            <p>
                Frontend developer living in Mexico City, currently working
                remotely at{' '}
                <a href="https://gumgum.com/sports">GumGum Sports</a>. Sometimes
                I like to <a href="https://log.osiux.ws/">write</a> (mostly in
                spanish).
            </p>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    margin: 0,
                }}
            >
                <li>
                    <a href="https://github.com/osiux" title="Github">
                        <span className="symbol">&#xe037;</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ereveles/"
                        title="Linkedin"
                    >
                        <span className="symbol">&#xe052;</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://stackoverflow.com/users/717643/eduardo-reveles"
                        title="Stack Overflow"
                    >
                        <span className="symbol">&#xe081;</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/osiux" title="Twitter">
                        <span className="symbol">&#xe087;</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/oso96_2000/"
                        title="Instagram"
                    >
                        <span className="symbol">&#xe100;</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.last.fm/user/oso96_2000"
                        title="Last.fm"
                    >
                        <span className="symbol">&#xe051;</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:me@osiux.ws" title="Send me an email">
                        <span className="symbol">&#xe024;</span>
                    </a>
                </li>
            </ul>
            <p
                style={{
                    fontSize: '.8em',
                    marginTop: '5vh',
                }}
            >
                Powered by <a href="https://www.gatsbyjs.org/">GatbsyJs</a> and{' '}
                <a href="http://drinchev.github.io/monosocialiconsfont/">
                    Mono Social Icons Font
                </a>
            </p>
        </main>
    </Layout>
);

export default IndexPage;

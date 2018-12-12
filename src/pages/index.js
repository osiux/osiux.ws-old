import React from 'react';
import ReactHintFactory from 'react-hint';

import SEO from '../components/seo';
import Dog from '../components/images/dog';
import Cats from '../components/images/cats';

const ReactHint = ReactHintFactory(React);

const onRenderContent = (target, content) => {
    const { rhImage } = target.dataset;

    return (
        <div className="react-hint__image">
            {rhImage === 'cats' ? <Cats /> : <Dog />}
            <p>Amelia</p>
        </div>
    );
};

const IndexPage = () => (
    <>
        <SEO
            title="Home"
            keywords={['landing', 'developer', 'react', 'frontend']}
        />
        <ReactHint autoPosition events />
        <ReactHint
            autoPosition
            events
            attribute="data-rh-image"
            onRenderContent={onRenderContent}
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
            <h1
                style={{
                    fontSize: '3.75em',
                    fontWeight: '600',
                    color: '#f6f7eb',
                }}
            >
                Hi! I'm Eduardo.
            </h1>
            <p>
                <span data-rh="Laravel, React">Full stack developer</span>{' '}
                living in Mexico City, currently working remotely at{' '}
                <a href="https://gumgum.com/sports">GumGum Sports</a>.
                <br />
                Proudly married to a great{' '}
                <a href="https://www.instagram.com/melissacastillo_photo/">
                    photographer
                </a>
                , we have{' '}
                <span data-rh-image="cats" data-rh-image-at="bottom">
                    3 cats
                </span>{' '}
                and{' '}
                <span data-rh-image="dog" data-rh-image-at="bottom">
                    a dog
                </span>
                .
                <br />
                Sometimes I like to <a href="https://log.osiux.ws/">
                    write
                </a>{' '}
                (mostly in spanish).
            </p>
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    margin: 0,
                    flexWrap: 'wrap',
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
    </>
);

export default IndexPage;

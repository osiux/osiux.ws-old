import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/normalize.css';
import '../styles/styles.css';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => <>{children}</>}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

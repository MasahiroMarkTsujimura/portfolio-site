import React, { Fragment } from 'react';
import Navbar from './Nav';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../index.css';

const Layout = ({ children }) => {
    return (
        <Fragment>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer>
                © {new Date().getFullYear()} Masahiro Mark Tsujimura
            </Footer> */}
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

// const Footer = styled.footer`
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//     padding: 30px;
//     background-color: #3a435e;
//     color: #FBFBFB;
// `;

export default Layout;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import '../index.css';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Nav>
                <Link to='/'><div className='heading__logo'>MT</div></Link>
            </Nav>
            {children}
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

const Nav = styled.nav`
    position: fixed;
    padding-right: 10%;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        color: #050505;
        text-decoration: none;
    }

    .heading__logo {
        height: 100%;
        padding: 15px;
        font-size: 32px;
        background-color: #2e4057;
        color: #f6f6f6;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;

        li {
            padding: 25px;
            list-style: none;
            
            a {
                font-size: 18px;
                color: black;
            }
        }
    }
`;

export default Layout;

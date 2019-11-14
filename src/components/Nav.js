import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';

const Navbar = () => {
    const [isNavOpen, changeNavState] = useState(false);

    return (
        <Fragment>
            <Nav isOpen={isNavOpen}>
                <button className='toggle-button' onClick={() => changeNavState(!isNavOpen)} />
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                </ul>
            </Nav>
        </Fragment>
    );
};

const Nav = styled.nav`
    z-index: 5;
    position: absolute;
    height: 100%;
    width: 200px;
    left: -205px;
    top: 0;
    display: flex;
    display-direction: column;
    background-color: #B9B9B9;
    transition: 0.2s;

    .toggle-button {
        z-index: 100;
        position: absolute;
        height: 40px;
        width: 40px;
        top: 20px;
        left: 190px;
        border: 0;
        border-radius: 10px;
        background-color:#3a435e;
        box-shadow: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    ${props => props.isOpen && css`
        ::after {
            content: '';
            position: absolute;
            top: 0;
            left: 200px;
            background-color: rgba(0,0,0,0.7);
            width: calc(100vw - 205px);
            height: 100vh;
        }
    `}
`;

export default Navbar;
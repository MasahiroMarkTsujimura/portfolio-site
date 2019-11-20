import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import styled from 'styled-components';
import heroBackgroundImg from '../images/hero-background.png';

const IndexPage = () => (
    <Fragment>
        <SEO title='Home' />
        <Hero>
            <h1>Masahiro Mark Tsujimura</h1>
        </Hero>
    </Fragment>
);

const Hero = styled.div`
    background-image: url(${heroBackgroundImg});
    background-color: rgb(110, 207, 231);
    width: 100vw;
    height: 100vh;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    h1 {
        font-size: 60px;
        color: white;
    }
`;

export default IndexPage;

import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import styled from 'styled-components';

//https://dribbble.com/shots/8214828-Real-Advisor-Homepage-Exploration-02

const IndexPage = () => (
    <Fragment>
        <SEO title='' />
        <Main>
            <h1>Masahiro Mark Tsujimura</h1>
            <h2>Front-End Web Developer</h2>
        </Main>
    </Fragment>
);

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export default IndexPage;

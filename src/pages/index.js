import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import styled from 'styled-components';
import { Envelope } from 'styled-icons/boxicons-regular';
import { LinkedinSquare, Github } from 'styled-icons/boxicons-logos';

const IndexPage = () => (
    <Fragment>
        <SEO title='' />
        <Main>
            <h1>Masahiro Mark Tsujimura</h1>
            <h2>Front-End Web Developer</h2>
            <section>
                <a href='https://www.linkedin.com/in/masahiro-mark-tsujimura-69074183/' target='_blank' rel='noopener noreferrer'><LinkedinSquare size='35' /></a>
                <a href='https://github.com/MasahiroMarkTsujimura' target='_blank' rel='noopener noreferrer'><Github size='35' /></a>
                <a href='mailto: masahiromarktsujimura@gmail.com'><Envelope size='35' /></a>
            </section>
        </Main>
    </Fragment>
);

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding-top: 50px;
    margin: 0 5%;

    h1, h2 {
        text-align: center;
    }

    @media (max-width: 767px) {
        h1 {
            font-size:  40px;
        }
        
        h2 {
            font-size: 25px;
        }
    }

    section  {
        a {
            margin: 0 15px;
            color: #050505;
        }
    }
`;

export default IndexPage;

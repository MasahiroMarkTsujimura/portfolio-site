import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const Project = () => {
    return (
        <Fragment>
            <Main>
                <SEO title='' />
                <h1>Projects</h1>
                <section>
                    <ProjectCard name='Juristerra' description='B2Db legal' />
                    <ProjectCard name='Lexperi' description='B2Db legal' />
                    <ProjectCard name='Medpius' description='B2Db legal' />
                    <ProjectCard name='Portfolio Site' description='B2Db legal' />
                    <ProjectCard name='Telegram Bot' description='B2Db legal' />
                    <ProjectCard name='Home Lab' description='B2Db legal' />
                </section>
            </Main>
        </Fragment>
    );
};

const Main = styled.main`
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    height: 100vh;
    margin: 0 10%;

    h1 {
        margin-top: 100px;
        text-align: center;
    }

    section {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;


export default Project;
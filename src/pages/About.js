import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutSection id='Who'>
            <h2>Front end developer with a passion for [insert some tech buzzword]</h2>
            <p>Coworkers say I am intuitive & a quick-thinker</p>
            <p>Friends say I am quirky & sarcastic</p>
            <p>My mother says I am handsome & smart</p>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E1E1E1;

`;

export default About;
import React, { Fragment } from 'react';
import SEO from '../components/Seo';

import Hero from '../section/Hero';
// import About from '../section/About';
// import heroBackgroundImg from '../images/hero-background.png';

//https://dribbble.com/shots/8214828-Real-Advisor-Homepage-Exploration-02

const IndexPage = () => (
    <Fragment>
        <SEO title='' />
        <Hero />
        {/* <About /> */}
    </Fragment>
);

// const Hero = styled.div`
//     background-image: url(${heroBackgroundImg});
//     background-color: rgb(110, 207, 231);
//     width: 100vw;
//     height: 100vh;
//     padding: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     h1 {
//         font-size: 60px;
//         color: black;
//     }
// `;

export default IndexPage;

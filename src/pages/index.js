import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import styled from 'styled-components';
// import heroBackgroundImg from '../images/hero-background.png';

//https://dribbble.com/shots/8214828-Real-Advisor-Homepage-Exploration-02

const IndexPage = () => (
    <Fragment>
        <SEO title='' />
        <Hero>
            <h1>Masahiro Mark Tsujimura</h1>
            <div className='button-container'>
                <button>Who this?</button>
                <button>What he do?</button>
                <button>How to slide in DM?</button>
            </div>
        </Hero>
    </Fragment>
);

const Hero = styled.section`
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: #050505;
        font-size: 50px;
    }

    .button-container {
        display: flex;
        align-items: center;

        button {
            margin: 0 20px;
        }
    }
`;


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

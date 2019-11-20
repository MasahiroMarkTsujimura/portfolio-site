import React from 'react';
import styled from 'styled-components';


const Hero = () => {
    return (
        <HeroSection>
            <h1>Masahiro Mark Tsujimura</h1>
            <div className='button-container'>
                <a href='#Who'><button>Who this?</button></a>
                <button>What he do?</button>
                <button>How to contact?</button>
            </div>
        </HeroSection>
    );
};


const HeroSection = styled.section`
    background-color: #fafafa;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        color: #050505;
    }

    .button-container {
        display: flex;
        align-items: center;

        button {
            font-size: 20px;
            margin: 0 20px;
            padding: 10px 20px;
            border: 1px solid #223a96;
            border-radius: 4px;
            color: #050505;
            background-color: #fafafa;
            cursor: pointer;
        }
    }
`;


export default Hero;
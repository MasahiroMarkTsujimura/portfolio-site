import React from 'react';
import styled, { css } from 'styled-components';

const colorThemes = [
    '#FAFAFA',  //white
    '#050505',  //black
    '#7289df',
    '#3454d1',
    '#223a96',
];

const themes = () => {
    return (
        <ColorContainer>
            {colorThemes.map((color, i) =>
                <div key={i}>
                    <p>{color}</p>
                    <Color color={color} />
                </div>
            )}
        </ColorContainer>
    );
};

const ColorContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px;
`;

const Color = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid black;

    ${props => props.color && css`
        background-color: ${props.color}
    
    `}
`;

export default themes;
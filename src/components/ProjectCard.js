import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ChevronDown } from 'styled-icons/boxicons-regular';


const ProjectCard = ({ name, description }) => {
    const [isOpen, toggleCard] = useState(false);

    return (
        <Card isOpen={isOpen}>
            <h2 onClick={() => toggleCard(!isOpen)}>{name} <ChevronDown size='40' /></h2>
            <p>{description}</p>
        </Card>
    );
};


const Card = styled.section`
    border: 1px solid #050505;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 20px 0px;

    h2 {
        margin: 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    ${props => !props.isOpen && css`
        p {
            display: none;
        }
    `}
`;


export default ProjectCard;
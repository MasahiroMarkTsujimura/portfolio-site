import styled, { css } from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100vw;

    ${props => props && css`
        background-color: ${props.backgroundColor}
    `}
`;
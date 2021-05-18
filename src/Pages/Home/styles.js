import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-areas:
    "header header"
    "carrousel carrousel"
    "contact contact"
    "services services"
    "footer footer"
    ;
`;

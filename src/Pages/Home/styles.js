import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 120px auto;
    grid-template-areas:
    "header header"
    "carousel carousel"
    "contact contact"
    "services services"
    "footer footer"
    ;
`;

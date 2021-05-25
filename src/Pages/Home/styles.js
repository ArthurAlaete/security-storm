import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 110px auto 150px;
    grid-template-areas:
    "header header"
    "carousel carousel"
    "infoContact infoContact"
    "services services"
    "footer footer"
    ;
`;

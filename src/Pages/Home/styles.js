import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 110px auto 150px auto 250px;
    grid-template-areas:
    "header header"
    "carousel carousel"
    "infoContact infoContact"
    "infoServices infoServices"
    "footer footer"
    ;
`;

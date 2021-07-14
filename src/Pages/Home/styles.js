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

    @media (max-width: 767.98px) { 
        overflow: hidden;
        grid-template-rows: auto auto auto auto 250px;
        grid-template-columns: 100vw; 
        grid-template-areas: 
        "header"
        "carousel"
        "infoContact"
        "infoServices"
        "footer"
        ;
    }
`;
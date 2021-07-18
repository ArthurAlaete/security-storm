import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 110px 130px auto 250px;
    grid-template-areas:
        "header header"
        "navBanner navBanner"
        "content content"
        "footer footer"
    ;

    @media (max-width: 767.98px) { 
        overflow: hidden;
        grid-template-rows: auto 130px auto auto 250px;
        grid-template-columns: 100vw; 
        grid-template-areas: 
        "header"
        "navBanner"
        "content"
        "footer"
        "footer"
        ;
    }
`;
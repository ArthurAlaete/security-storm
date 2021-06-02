import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px 130px 250px;
    grid-template-areas:
        "header header"
        "navBanner navBanner"
        "footer footer"
    ;
`;
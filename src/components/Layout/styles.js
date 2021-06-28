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
`;
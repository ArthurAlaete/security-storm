import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px 250px;
    grid-template-areas:
        "header header"
        "footer footer"
    ;
`;
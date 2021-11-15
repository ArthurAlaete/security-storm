import styled from 'styled-components';

export const Content = styled.div`
    grid-area: content;

    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-areas: 
        "matter othersMatters"
    ;

    margin-bottom: 80px;
`;
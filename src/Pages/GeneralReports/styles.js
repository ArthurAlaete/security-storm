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

export const Matter = styled.div`
    grid-area: matter;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 45px;
    margin-left: 10px;
`;

export const MatterImage = styled.img`
    width: 700x;
    height: 300px;
    border-radius: 8px;   
`;

export const MatterTexts = styled.p`
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    width: 100%;

    h4 {
        margin: 20px 0;
        font-size: 25px;
        font-weight: 500;
    }
`;

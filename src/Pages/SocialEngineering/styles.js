import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px 130px auto 250px;
    grid-template-areas:
        "header header"
        "navBanner navBanner"
        "content content"
        "footer footer"
    ;
`;

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

export const MatterText = styled.p`
    margin-top: 45px;
    width: 100%;
`;
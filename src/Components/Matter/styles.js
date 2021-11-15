import styled from 'styled-components';

export const Container = styled.div`
    grid-area: matter;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 45px;
    margin-left: 10px;
`;

export const Image = styled.img`
    width: 700x;
    height: 300px;
    border-radius: 8px;   

    @media(max-width: 767.98px) {
        width: 90%;
    }
`;

export const Content = styled.p`
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

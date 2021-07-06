import styled from 'styled-components';

export const Container = styled.div`
    grid-area: othersMatters;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 80%;
    height: 500px;
    margin: 45px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 1px 8px 2px rgba(0, 0, 0, 0.1);
`;

export const KnowMore = styled.div`
    margin-left: 40px;
    margin-top: 25px;

    h4 {
        margin-bottom: 12px;
    }

    .links {
        text-decoration: none;
        margin-top: 8px;
    }
`;

export const ReadToo = styled.div`
    margin-left: 40px;
    margin-top: 25px;

    h4 {
        margin-bottom: 12px;
    }

    .links {
        text-decoration: none;
        margin-top: 8px;
    }
`;


export const Links = styled.div`
    display: flex;
    flex-direction: column;
`;

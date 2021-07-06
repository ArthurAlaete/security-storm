import styled, { css } from 'styled-components';

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

const contentStyle = css`
    margin-left: 40px;
    margin-top: 25px;

    h4 {
        margin: 12px 0;
    }

    .link {
        text-decoration: none;
        margin-top: 8px;
    }
`;

export const KnowMore = styled.div`
   ${contentStyle}
`;

export const ReadToo = styled.div`
    ${contentStyle}
`;


export const Links = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

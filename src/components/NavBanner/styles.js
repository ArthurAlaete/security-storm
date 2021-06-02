import styled from 'styled-components';

export const Container = styled.div`
    grid-area: navBanner;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
`;

export const CurrentPage = styled.h2`
    color: var(--white);
    margin-left: 60px;
`

export const NavControl = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .link {
        color: var(--white);
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
    }

    p {
        color: var(--white);
        margin-right: 60px;
        font-weight: bold;
        margin-bottom: 0;
        font-size: 14px;
        text-transform: uppercase;
    }
`;
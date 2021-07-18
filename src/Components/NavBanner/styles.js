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
    font-size: 14px;

    .link {
        color: var(--white);
        font-weight: bold;
        margin-right: 5px;
        
    }

    p {
        color: var(--white);
        margin-right: 60px;
        font-weight: bold;
        margin-bottom: 0;
    }


    @media (max-width: 767.98px) {
        display: none;
    }

`;
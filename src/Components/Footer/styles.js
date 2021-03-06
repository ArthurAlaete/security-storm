import styled, { css } from 'styled-components';
import { Facebook, Twitter, Instagram } from '../../Styles/Icons';

export const Container  = styled.div`
    grid-area: footer;
    background-color: var(--primary);
`;

export const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
`;

const cssIcons = css`
    width: 35px;
    height: 35px;
    color: var(--white);
    margin: 10px;

    @media (max-width: 767.98px) {
        width: 30px;
        height: 30px;
    }
`;

export const FacebookIcon = styled(Facebook)`
    ${cssIcons}
`;

export const InstagramIcon = styled(Instagram)`
    ${cssIcons}
`;

export const TwitterIcon = styled(Twitter)`
    ${cssIcons}
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    p {
        color: var(--white);
    }

    span {  
        font-weight: bold;
    }

    @media (max-width: 767.98px) {
        p {
            font-size: 15px;
        }
    }

`;

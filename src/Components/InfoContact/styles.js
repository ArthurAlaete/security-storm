import styled, { css } from 'styled-components';
import { EmailOutline, Phone, Clock } from '../../Styles/Icons'

export const Container = styled.div`
    grid-area: infoContact;

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--primary);
    margin: 1px 0px;


    @media (max-width: 575.98px) {
        flex-direction: column;
        align-items: center;
    }
`;

const cssIcon = css`
    color: var(--white);
    width: 48px;
    height: 48px;


    @media (max-width: 575.98px) { 
        width: 35px;
        height: 35px;
    }
`;

const subContainers = css`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 575.98px) { 
        margin: 20px 0;
    }
`;

const subContainersInfos = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px; 

    p {
        font-size: 17px;
        color: var(--white);
        margin: 0;
    }

    span {
        font-size: 19px;
        color: var(--white);
        font-weight: bold;
    }
`;

export const Telefone = styled.div`
    ${subContainers}
`;

export const TelefoneIcon = styled(Phone)`
    ${cssIcon}
`;

export const TelefoneInfo = styled.div`
        ${subContainersInfos}
`;

export const Horarios = styled.div`
    ${subContainers}
`;

export const HorariosIcon = styled(Clock)`
    ${cssIcon}
`;

export const HorariosInfo = styled.div`
    ${subContainersInfos}
`;

export const Email = styled.div`
    ${subContainers}
`;

export const EmailIcon = styled(EmailOutline)`
    ${cssIcon}
`;

export const EmailInfo = styled.div`
    ${subContainersInfos}
`;


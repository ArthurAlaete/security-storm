import styled, { css } from 'styled-components';
import { EmailOutline, Phone, Clock } from '../../styles/Icons'

export const Container = styled.div`
    grid-area: infoContact;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary);
`;

const cssIcon = css`
    color: var(--white);
    width: 45px;
    height: 45px;
`;

export const Telefone = styled.div`

`;

export const TelefoneIcon = styled(Phone)`
    ${cssIcon}
`;

export const TelefoneInfo = styled.div`

`;

export const Horarios = styled.div`

`;

export const HorariosIcon = styled(Clock)`
    ${cssIcon}
`;

export const HorariosInfo = styled.div`

`;

export const Email = styled.div`

`;

export const EmailIcon = styled(EmailOutline)`
    ${cssIcon}
`;

export const EmailInfo = styled.div`

`;


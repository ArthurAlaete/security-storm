import styled, { css } from 'styled-components';

import {
    AlertTriangle,
    Spy,
    Server,
    Eye,
    People,
    Checklist
} from '../../styles/Icons';

export const Container = styled.div`
    grid-area: infoServices;
`;

export const ServicesContainer = styled.div`

`;

export const ServiceInfo = styled.div`

`;


export const cssIcons = css`
    width: 55px;
    height: 55px;
    color: var(--primary);
`;

export const AlertIcon = styled(AlertTriangle)`
    ${cssIcons}
`;

export const SpyIcon = styled(Spy)`
    ${cssIcons}
`;

export const ServerIcon = styled(Server)`
    ${cssIcons}
`;

export const EyeIcon = styled(Eye)`
    ${cssIcons}
`;

export const PeopleIcon = styled(People)`
    ${cssIcons}
`;

export const ChecklistIcon = styled(Checklist)`
    ${cssIcons}
`;

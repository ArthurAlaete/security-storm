import styled, { css } from 'styled-components';

import {
    AlertTriangle,
    Spy,
    Server,
    Eye,
    People,
    Checklist
} from '../../Styles/Icons';

export const Container = styled.div`
    grid-area: infoServices;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    margin: 40px 0;
`;

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
    width: 400px;
`;

export const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
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

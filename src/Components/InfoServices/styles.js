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

    @media (max-width: 767.98px) { 
        padding: 25px 40px;
    }
`;

export const ServiceInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;

    @media (max-width: 767.98px) { 
        h3 {
            font-size: 22px;
        }

        p {
            font-size: 15px;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        h3 {
            font-size: 25px;
        }
    }
`; 


export const cssIcons = css`
    width: 55px;
    height: 55px;
    color: var(--primary);


    @media (max-width: 767.98px) { 
        width: 45px;
        height: 45px;
    }
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

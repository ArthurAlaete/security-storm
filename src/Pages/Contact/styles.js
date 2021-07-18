import styled, { css } from 'styled-components';

import { 
    Phone, 
    EmailOutline, 
    Clock,
    Facebook,
    Instagram,
    Twitter
} from '../../Styles/Icons';

export const Content = styled.div`
    grid-area: content;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-areas: 
        "formSide contactInfoSide"
    ;


    @media (max-width: 767.98px) { 
        grid-template-columns: 100%;
        grid-template-areas: 
        "formSide";
    }

    @media (min-width: 768px) and (max-width: 991.98px)  { 
        grid-template-columns: 55% 1fr;
        grid-template-areas: 
        "formSide contactInfoSide";
    }
`; 


export const FormSide = styled.div`
    grid-area: formSide;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 75px 110px;
    
    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 18px;
        }

        input, textarea {
            border: solid 1px var(--primary);
            border-radius: 8px;
            padding: 10px;
            width: 520px;
            margin-bottom: 20px;
        }

        textarea {
            min-height: 80px;
        }
    }
    
    button {
        width: 120px;
        margin-top: 20px;
        padding: 10px 30px;
        border-radius: 8px;
        color: var(--white);
        background-color: var(--primary);
        font-weight: bold;
        text-align: center;
    }

    button:hover {
        background-color: var(--tertiary);
    }

    @media (max-width: 767.98px) {
        
        padding: 75px 20px;
        align-items: center;

        form {
            input, textarea {
                width: 350px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 75px 0px;
        align-items: center;

        form {
            input, textarea {
                width: 350px;
            }
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        form {
            input, textarea {
                width: 420px;
            }
        }
    }
    
`;

export const ContactInfoSide = styled.div`
    grid-area: contactInfoSide;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 75px 40px;

    @media (max-width: 767.98px) { 
        display: none;
        padding: 75px 0px;
    }
`;

export const TopInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    p {
        color: var(--tertiary);
        font-size: 16px;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        p {
            font-size: 14px;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 8px;
`;

export const Line = styled.hr`
    width: 100%;
`;

export const BottomInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (min-width: 768px) and (max-width: 991.98px) {
        h3 {
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }
    }
`;

const cssIcons = css`
    color: var(--primary);
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

const cssIconsSocialMedias = css`
    color: var(--primary);
    width: 35px;
    height: 35px;
    margin-right: 15px;

    &:hover {
        cursor: pointer;
    }


    @media (min-width: 768px) and (max-width: 991.98px) {
        height: 25px;
        width: 25px;
    }
`;

const infosContainer = css`
    display: flex;
    align-items: center;
    margin: 5px 0;

    p {
        margin: 0;
        font-size: 18px;
        color: var(--tertiary);
    }
`;

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

export const PhoneInfo = styled.div`
    ${infosContainer}
`;

export const PhoneIcon = styled(Phone)`
    ${cssIcons}
`;

export const EmailInfo = styled.div`
    ${infosContainer}
`;

export const EmailIcon = styled(EmailOutline)`
    ${cssIcons}
`;

export const OfficeHourInfo = styled.div`
    ${infosContainer}
`;

export const ClockIcon = styled(Clock)`
    ${cssIcons}
`;

export const SocialMedias = styled.div`
    margin-top: 30px;
`;

export const FacebookIcon = styled(Facebook)`
    ${cssIconsSocialMedias}
`;

export const InstagramIcon = styled(Instagram)`
    ${cssIconsSocialMedias}
`;

export const TwitterIcon = styled(Twitter)`
    ${cssIconsSocialMedias}
`;



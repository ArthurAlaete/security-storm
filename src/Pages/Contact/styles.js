import styled from 'styled-components';
import { 
    Phone, 
    EmailOutline, 
    Clock,
    Facebook,
    Instagram,
    Twitter
} from '../../styles/Icons';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 100px 130px auto 250px;
    grid-template-areas:
        "header header"
        "navBanner navBanner"
        "content content"
        "footer footer"
    ;
`;

export const Content = styled.div`
    grid-area: content;

    display: grid;
    grid-template-columns: 60% 1fr;
    grid-template-areas: 
        "formSide contactInfoSide"
    ;
`; 

export const FormSide = styled.div`
    grid-area: formSide;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 80px;
    border: solid 1px black;
    
    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 20px;
            font-weight: 500;
            /* color: 'black'; */
            margin-bottom: 18px;
        }

        input, textarea {
            border: solid 1px var(--primary);
            border-radius: 8px;
            padding: 10px;
            width: 520px;
            margin-bottom: 20px;
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
`;

export const ContactInfoSide = styled.div`
    grid-area: contactInfoSide;
    display: flex;
    flex-direction: column;
    padding: 75px;
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

`;

export const Contacts = styled.div`

`;

export const PhoneInfo = styled.div`

`;

export const PhoneIcon = styled(Phone)`

`;

export const EmailInfo = styled.div`

`;

export const EmailIcon = styled(EmailOutline)`

`;

export const OfficeHourInfo = styled.div`

`;

export const ClockIcon = styled(Clock)`

`;

export const SocialMedias = styled.div`

`;

export const FacebookIcon = styled(Facebook)`

`;

export const InstagramIcon = styled(Instagram)`

`;

export const TwitterIcon = styled(Twitter)`

`;



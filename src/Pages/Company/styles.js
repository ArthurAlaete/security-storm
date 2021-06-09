import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    /* width: 100%; */
`;

export const WhoWeAre = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;

    hr {
        border: none;
        margin-bottom: 30px;
        width: 40px;
        height: 3px;
        background-color: #E78A40;
    }

    p {
        margin: 0;
        text-align: center;
        width: 400px;
        font-weight: bold;
        color: var(--tertiary);
    }
`;

export const Logo = styled.img`
    width: 180px;
    height: 180px;
`;

export const WhatWeDo = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 60%;
    padding: 40px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--primary);
    margin: 15px 0;

    hr {
        border: none;
        height: 3px;
        width: 40px;
        background-color: #E78A40;
    }

    h3 {
        color: var(--white);
    }

    p {
        text-align: start;
        color: var(--white);
        
    }
`;

export const HowWeDo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
    width: 60%;
    padding: 40px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--primary);
    margin: 15px 0;

    hr {
        border: none;
        height: 3px;
        width: 40px;
        background-color: #E78A40;
    }

    h3 {
        color: var(--white);
    }

    p {
        text-align: start;
        color: var(--white);
        
    }
`;

export const Experiences = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
    width: 60%;
    padding: 40px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: var(--primary);
    margin: 15px 0;

    hr {
        border: none;
        height: 3px;
        width: 40px;
        background-color: #E78A40;
    }

    h3 {
        color: var(--white);
    }

    p {
        text-align: end;
        color: var(--white);
        
    }
`;


export const Contact = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;

    hr {
        width: 100%;
        border: none;
        height: 1px;
        background-color: red;
    }

    h3 {
        width: 500px;
        text-align: center;
    }
`;

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        font-weight: bold;
        margin: 30px 0;
        color: var(--tertiary);
    }

    .link {
        background-color: var(--primary);
        padding: 10px 20px;
        color: var(--white);
        font-weight: bold;
        border-radius: 8px;
        text-decoration: none;
        transition: all ease-out 0.3s;
    }

    .link:hover {
        background-color: var(--tertiary);
    }
`;
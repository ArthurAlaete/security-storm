import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
    width: 60%;
    padding: 40px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    background-color: var(--primary);
    margin: 30px 0;

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
        margin-left: 60px;
    }

    @media(max-width: 767.98px) {
        width: 90%;
    } 
`;
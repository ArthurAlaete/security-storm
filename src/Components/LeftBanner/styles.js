import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
    width: 60%;
    padding: 40px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
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
        text-align: start;
        color: var(--white);
    }
`;
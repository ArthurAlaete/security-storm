import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 110px 1fr;
    grid-template-areas: 
        "header header"
        "message message"
        "footer footer"
    ;
`;

export const MessageContainer = styled.div`
    grid-area: message;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 80px;
    min-height: 85vh;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    .paragraph {
        margin: 20px 5px;
    }

    .paragraph:nth-of-type(1) {
        color: var(--tertiary);
        font-weight: bold;
        margin: 10px 5px;
    }
`;
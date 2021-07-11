import styled from 'styled-components';



export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);

    @media (max-width: 575.98px) { 
        flex-direction: column;
    }
`;


export const Navbar = styled.nav`
    
    > ul {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 40px;

        li {
            display: flex;
            justify-content: space-between;
            margin: 0px 15px;
        }

        a {
            color: var(--secondary);
            text-decoration: none;

            border-radius: 8px;
            padding: 5px 15px;
            font-size: 19px;
            transition: all ease-out 0.3s;
        }

        .pagina-ativa {
            background-color: var(--primary);
            color: var(--white);
        }

        a:hover {
            background-color: var(--tertiary);
            color: var(--white);
        }
    }

    @media (max-width: 575.98px) { 
        animation: slideDown 1s ease-out forwards;
        display: none;

        &.show {
            display: flex;
            flex-direction: column;
            transition: all 2s ease-in;

            ul {
                flex-direction: column;
                padding: 10px;
            }
        }

        @keyframes slideDown {
            from {
                transform: translateY(-10px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;

export const Toggle = styled.div`  
    display: none;
    background-color: var(--primary);
    position: absolute;
    height: 35px;
    width: 35px;
    padding: 20px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    right: 20px;
    top: 30px;
    z-index: 2;
    cursor: pointer;

    .row {
        position: absolute;
        background-color: var(--white);
        width: 30px;
        height: 3px; 
        transition: all 0.2s;
    }

    &::before {
        content: '';
        background-color: var(--white);
        position: absolute;
        width: 30px;
        height: 3px;
        margin-bottom: 20px;
        transition: all 0.2s;
    }

    &::after {
        content: '';
        background-color: var(--white);
        position: absolute;
        width: 30px;
        height: 3px;
        margin-top: 20px;
        transition: all 0.2s;
    }

    &.activated {
        background-color: red;

        .row {
            margin: 0;
            transform: rotate(45deg)
        }

        &::after {
            margin: 0;
            transform: rotate(45deg)
        }

        &::before {
            margin: 0;
            transform: rotate(-45deg)
        }
    }

    @media (max-width: 575.98px) { 
        display: flex;
    }
`;

export const Logo = styled.img`
    width: 100px;
    height: 90px;
    padding-bottom: 12px;
    margin: 0 20px;

    @media (max-width: 575.98px) { 
        margin: 10px 20px;
        padding-bottom: 0;
    }
`;




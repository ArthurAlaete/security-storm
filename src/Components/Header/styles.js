import styled from 'styled-components';



export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);

    @media (max-width: 767.98px) { 
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

    @media (max-width: 767.98px) { 
        animation: slideDown 0.4s ease-out forwards;
        display: none;
        width: 100%;

        &.show {
            display: flex;
            flex-direction: column;
            transition: all 2s ease-in;

            ul {
                flex-direction: column;
                padding: 10px;
                margin-right: 5px;

                .pagina-ativa {
                    background: transparent;
                    font-weight: bold;
                    color: var(--tertiary);
                }

                a:hover {
                    background: transparent;
                    color: var(--tertiary);
                }
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


    @media (min-width: 768px) and (max-width: 991.98px) {
        ul {
            a {
                font-size: 17px;
            }
            li {
                margin: 0 6px;
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

    @media (max-width: 767.98px) { 
        display: flex;
    }
`;

export const Logo = styled.img`
    width: 100px;
    height: 90px;
    padding-bottom: 12px;
    margin: 0 20px;

    @media (max-width: 767.98px) { 
        margin: 10px 20px;
        padding-bottom: 0;
    }
`;




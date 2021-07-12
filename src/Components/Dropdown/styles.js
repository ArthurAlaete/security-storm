import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '../../Styles/Icons';


export const Container = styled.div`
    position: relative;
    cursor: pointer;
`;

export const DropdownView = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 5px 15px;
    border-radius: 8px;

    p {
        margin: 0;
        font-size: 19px;
    }

    &.activated {
        background-color: var(--primary);
        color: var(--white);
    }

    &:hover {
        background-color: var(--tertiary);
        color: var(--white);
    }

    @media (max-width: 575.98px) { 
        margin-left: 20px;

        &.activated {
            background-color: transparent;
            color:#000;
        }

        &:hover {
            background-color: transparent;
            color: #000;
        }
    }
`;

export const ArrowIcon = styled(ArrowIosDownwardOutline)`
    width: 25px;
    height: 25px;

    &.inverse {
        transform: rotate(180deg);
    }
`; 

export const DropdownLinks = styled.div`
        display: none;
        flex-direction: column;
        background-color: var(--white);
        position: absolute;
        width: 250px;
        border-radius: 8px;
        opacity: 0;
        margin-top: 4px;
        box-shadow: 2px 2px 0px 0.5px rgba(0, 0, 0, 0.2);
        z-index: 2;
        overflow: hidden;
    
        a.links {
            border-radius: 0px;
            padding: 10px;
            border-bottom: solid 1px rgba(0, 0, 0, 0.1);
        }

        &.show {
            display: flex;
            animation: showLinks 0.5s ease-out forwards; 
        }


        @keyframes showLinks {
            from {
                opacity: 0;
                transform: translateY(-5px)
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }


        @media (max-width: 575.98px) { 
            position: relative;
            flex-direction: column;
            background-color: var(--white);
            align-items: center;
            width: 100%;
            opacity: 0;
            margin-top: 4px;
            box-shadow: none;
            z-index: 2;
            overflow: hidden;

            a.links {
                color: var(--tertiary);
                font-style: italic;
            }

            &::after {
                content: '';
                animation: teste 0.4s ease-in forwards;
                position: absolute;
                width: 50px;
                height: 2px;
                margin-bottom: 4px;
                background-color: var(--primary);
            }

            @keyframes teste {
                from {
                    width: 0;
                }
                to {
                    width: 50px;
                }
            }
        }
`;
    
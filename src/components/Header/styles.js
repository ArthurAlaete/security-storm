import styled from 'styled-components';


export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);

    height: 120px;
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
            margin: 0 15px;
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

        .dropdown {
            position: relative;
            border-radius: 8px;

            .dropdown-links {
                display: none;
                flex-direction: column;
                background-color: var(--white);
                position: absolute;
                width: 200px;
                border-radius: 8px;
                opacity: 0;
                margin-top: 5px;
                box-shadow: 1px 2px 0px 0.5px rgba(0, 0, 0, 0.2);
                z-index: 2;
            
                a {
                    padding: 10px;
                }
            }

            &:hover {
                .dropdown-links {
                    display: flex;
                    animation: showLinks 0.5s ease-out forwards;
                }
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
        }
    } 

`;

export const Logo = styled.img`
    width: 100px;
    height: 90px;
    padding-bottom: 12px;
    margin: 0 20px;
`;


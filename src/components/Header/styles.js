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
    } 

`;

export const Logo = styled.img`
    width: 110px;
    height: 100px;
    margin: 0 20px;
`;


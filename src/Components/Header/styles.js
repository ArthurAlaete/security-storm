import styled from 'styled-components';



export const Container = styled.div`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);

    height: 120px;

    @media (max-width: 575.98px) { 
        flex-direction: column;
        height: 300px;
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

        @media (max-width: 575.98px) { 
            flex-direction: column;
            padding: 20px;
        }
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




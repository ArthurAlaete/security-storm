import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../Assets/images/logo_small.png'

import { 
    Container, 
    Logo, 
    Navbar 
} from './styles';

const Header = () => {
    return (
        <Container>
            <Logo src={LogoImage} />
            
            <Navbar>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="pagina-ativa">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" activeClassName="pagina-ativa">Empresa</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" activeClassName="pagina-ativa">Pentest</NavLink>
                    </li>
                    <li>
                        <NavLink to="#" activeClassName="pagina-ativa">Contato</NavLink>
                    </li>
                </ul>
            </Navbar>
        </Container>
    )
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from '../../Assets/images/logo_small.png'
import Dropdown from '../Dropdown';

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
                        <NavLink exact to="/" activeClassName="pagina-ativa">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/empresa" activeClassName="pagina-ativa">A empresa</NavLink>
                    </li>
                    <li>
                       <Dropdown /> 
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="pagina-ativa">Contato</NavLink>
                    </li>
                </ul>
            </Navbar>
        </Container>
    )
}

export default Header;
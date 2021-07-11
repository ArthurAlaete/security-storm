import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from '../../Assets/images/logo_small.png'
import Dropdown from '../Dropdown';

import { 
    Container, 
    Logo, 
    Navbar, 
    Toggle
} from './styles';

const Header = () => {

    const [toggleActivated, setToggleActivated] = React.useState(false);

    return (
        <Container>
            <Logo src={LogoImage} />
            <Toggle onClick={() => setToggleActivated(!toggleActivated)} className={toggleActivated ? 'activated' : ''}>
                <div className="row" />
            </Toggle>
            <Navbar className={toggleActivated ? 'show' : ''} >
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
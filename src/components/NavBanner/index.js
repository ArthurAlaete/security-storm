import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NavControl, CurrentPage} from './styles';

const NavBanner = ({ currentPage,  navPath }) => {
    return (
        <Container>
            <CurrentPage>{currentPage}</CurrentPage>
            <NavControl>
                <Link to="/" className="link">Home</Link>
                <p>{navPath}</p>
            </NavControl>
        </Container>
    )
}

export default NavBanner;
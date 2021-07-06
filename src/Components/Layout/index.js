import React from 'react';

import { Container } from './styles';

const Layout = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout;
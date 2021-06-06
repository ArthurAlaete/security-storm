import React from 'react';

import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';

const Company = () => {
    return (
        <Container>
            <Header />
            <NavBanner currentPage="Empresa" navPath="/empresa"/>
            <Content>
                <h1>content</h1>
            </Content>
            <Footer />
        </Container>
    )
}

export default Company;
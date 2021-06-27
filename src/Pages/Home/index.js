import React from 'react';

import Header from '../../components/Header';
import Carrossel from '../../components/Carrossel';
import InfoContact from '../../components/InfoContact';
import InfoServices from '../../components/InfoServices';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <Carrossel />
            <InfoContact />
            <InfoServices />
            <Footer />
        </Container>
    )
}

export default Home;
import React from 'react';

import Header from '../../Components/Header';
import Carrossel from '../../Components/Carrossel';
import InfoContact from '../../Components/InfoContact';
import InfoServices from '../../Components/InfoServices';
import Footer from '../../Components/Footer';

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
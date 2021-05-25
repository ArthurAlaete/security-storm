import React from 'react';

import Header from '../../components/Header';
import Carrossel from '../../components/Carrossel';
import InfoContact from '../../components/InfoContact';

import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <Carrossel />
            <InfoContact />
            
        </Container>
    )
}

export default Home;
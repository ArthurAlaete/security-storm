import React from 'react';

import Header from '../../components/Header';
import Carrossel from '../../components/Carrossel';

import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <Carrossel />
        </Container>
    )
}

export default Home;
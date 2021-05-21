import React from 'react';

import Header from '../../components/Header';
import Carrosel from '../../components/Carousel';

import { Container } from './styles';

const Home = () => {
    return (
        <Container>
            <Header />
            <Carrosel />
        </Container>
    )
}

export default Home;
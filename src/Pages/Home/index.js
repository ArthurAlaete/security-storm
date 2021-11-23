import React from 'react';

import { 
    Header,
    Carrossel,
    InfoContact,
    InfoServices, 
    Footer, 
} from '../../Components';

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
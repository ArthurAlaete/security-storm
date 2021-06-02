import React from 'react';

import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Contact = () => {
    return(
        <Container>
            <Header />
            <NavBanner currentPage="Contato" navPath="/contato" />
            {/* <Content>
                <Form>

                </Form>
                <SideContactInfo>
                    
                </SideContactInfo>
            </Content> */}
            <Footer />
        </Container>
    )
}


export default Contact;
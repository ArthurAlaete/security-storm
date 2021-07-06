import React from 'react';

import Layout from '../../Components/Layout';
import Header from '../../Components/Header';
import NavBanner from '../../Components/NavBanner';
import Footer from '../../Components/Footer';
import ImagemContato from '../../Assets/images/contato.png';

import { 
    Content, 
    FormSide, 
    ContactInfoSide, 
    Image,
    TopInfo,
    Line,
    BottomInfo,
    Contacts,
    PhoneInfo,
    PhoneIcon,
    EmailInfo,
    EmailIcon,
    OfficeHourInfo,
    ClockIcon,
    SocialMedias,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
} from './styles';

const Contact = () => {

    return(
        <Layout>
            <Header />
            <NavBanner currentPage="Contato" navPath="/ Contato" />
            <Content>
                <FormSide>
                    <form>
                        <label>Nome(obrigatório)</label>
                        <input type="text" name="nome" placeholder="Nome"/>
                        <label>Email(obrigatório)</label>
                        <input type="text" name="email" placeholder="Email"/>
                        <label>Assunto</label>
                        <input type="text" name="nome" placeholder="Assunto"/>
                        <label>Sua Mensagem</label>
                        <textarea placeholder="Sua mensagem"></textarea>
                    </form>
                    <button>Enviar</button>
                </FormSide>
                <ContactInfoSide>
                    <TopInfo>
                        <Image src={ImagemContato} alt="ImagemContato.png"/>
                        <p>Por favor, preencha os campos ao lado com o máximo de informações para fácil entendimento</p>
                    </TopInfo>
                    <Line />
                    <BottomInfo>
                        <h3>Detalhes de contato</h3>
                        <Contacts>
                            <PhoneInfo>
                                <PhoneIcon />
                                <p>+55 84 9999-9999</p>
                            </PhoneInfo>
                            <EmailInfo>
                                <EmailIcon />
                                <p>securitystorm@gmail.com</p>
                            </EmailInfo>
                            <OfficeHourInfo>
                                <ClockIcon />
                                <p>Nosso Expediente: Seg - Sex 08:30 - 18:00</p>
                            </OfficeHourInfo>
                        </Contacts>
                        <SocialMedias>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                        </SocialMedias>
                    </BottomInfo>
                </ContactInfoSide>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Contact;
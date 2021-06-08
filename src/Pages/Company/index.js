import React from 'react';

import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import Footer from '../../components/Footer';

import { 
    Container, 
    Content,
    WhoWeAre,
    Logo,
    WhatWeDo,
    HowWeDo,
    Experiences
} from './styles';

const Company = () => {
    return (
        <Container>
            <Header />
            <NavBanner currentPage="Empresa" navPath="/empresa"/>
            <Content>
                <WhoWeAre>
                    <Logo />
                    <h3>Quem somos?</h3>
                    <hr /> {/*  Uma linhas um pouco grossa e curta */}
                    <p>
                        Desde nossa fundação em 2019, nascemos com a missão de transformar a forma 
                        como as empresas se defendem contra ameaças virtuais e contribuir para o cenário 
                        global de segurança da informação. 
                        Acreditamos que se antecipar à possíveis ameaças virtuais é a melhor 
                        forma de proteger os dados e informações contra ciberataques. 
                        Com uma tempestade de segurança contribuimos para essa proteção.
                    </p>
                </WhoWeAre>
                <WhatWeDo>
                    <h3>O que fazemos?</h3>
                    <hr />
                    <p>
                        Ajudamos empresas de todo o mundo à manter seus dados e informações sensíveis 
                        em segurança e protegidos de ataques virtuais. Através de testes de intrusão e 
                        da capacitação profissional elevamos o nível de segurança das empresas e a 
                        capacidade técnica de seus profissionais para lidar com questões relacionadas 
                        à segurança da informação e mitigação de falhas.
                    </p>
                </WhatWeDo>
                <HowWeDo>
                    <h3>Como trabalhamos?</h3>
                    <hr />
                    <p>
                        Nossa equipe possui as habilidades e o conhecimento técnico necessário para analisar 
                        e testar ambientes reais e digitais em busca de vulnerabilidades de segurança 
                        que possam comprometer dados e empresas. Nossos clientes recebem relatórios frequentes
                        de possíveis brechas de segurança para que se mantenham protegidos e diminuam os riscos de possíveis ataques
                    </p>
                </HowWeDo>
                <Experiences>
                    <h3>Profissionais com uma larga experiência em:</h3>
                    <hr />
                    <p>
                        Análise de vulnerabilidades;
                        Testes de invasão;
                        Configurações de Redes de computadores;
                        Modelagem de Dados;
                        Configurações de servidores;
                        Desenvolvimento de Sistemas;
                        Sites;
                        E-commerce;
                        Aplicativos;
                        Metodologia SEO (Search Engine Optimization), dentre outros da área.
                    </p>
                </Experiences>
            </Content>
            <Footer />
        </Container>
    )
}

export default Company;
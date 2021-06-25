import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoImage from '../../Assets/images/logo.png';
import MissionIMG from '../../Assets/images/mission.png';
import WhatWeDoIMG from '../../Assets/images/o_que_fazemos.png';
import ExperiencesIMG from '../../Assets/images/profissionais.png';
import HowWeDoIMG from '../../Assets/images/como_trabalhamos.png';

import Header from '../../Components/Header';
import NavBanner from '../../Components/NavBanner';
import RightBanner from '../../Components/RigthBanner';
import LeftBanner from '../../Components/LeftBanner';
import Footer from '../../Components/Footer';

import { 
    Container, 
    Content,
    WhoWeAre,
    Logo,
    WhatOurMission,
    WhatOurMissionImage,
    WhatWeDo,
    WhatWeDoImage,
    HowWeDo,
    HowWeDoImage,
    Experiences,
    ExperiencesImage,
    Contact,
    ContactTitle,
    ContactContent
} from './styles';

const Company = () => {

    return (
        <Container>
            <Header />
            <NavBanner currentPage="Empresa" navPath="/empresa"/>
            <Content>
                <WhoWeAre>
                    <Logo src={LogoImage} />
                    <hr /> {/*  Uma linhas um pouco grossa e curta */}
                    <p>
                        Fundada desde 2021, somos uma empresa voltada para o ramo de segurança da informação.
                    </p>
                </WhoWeAre>
                <WhatOurMission>
                    <LeftBanner 
                        title="Qual nossa missão?"
                        text="Desde nossa fundação em 2019, nascemos com a missão de transformar a forma 
                        como as empresas se defendem contra ameaças virtuais e contribuir para o cenário 
                        global de segurança da informação. 
                        Acreditamos que se antecipar à possíveis ameaças virtuais é a melhor 
                        forma de proteger os dados e informações contra ciberataques. 
                        Com uma tempestade de segurança contribuimos para essa proteção."
                    />
                    <WhatOurMissionImage src={MissionIMG} />
                </WhatOurMission>
                <WhatWeDo>
                    <WhatWeDoImage src={WhatWeDoIMG}/>
                    <RightBanner 
                        title="O que fazemos?"
                        text="Ajudamos empresas de todo o mundo à manter seus dados e informações sensíveis 
                        em segurança e protegidos de ataques virtuais. Através de testes de intrusão e 
                        da capacitação profissional elevamos o nível de segurança das empresas e a 
                        capacidade técnica de seus profissionais para lidar com questões relacionadas 
                        à segurança da informação e mitigação de falhas."
                    />
                </WhatWeDo>
                <Experiences>
                    <LeftBanner title="Profissionais com uma larga experiência em:">
                        <div className="listExperiencies">
                            <p>
                                Desenvolvimento de Sistemas;<br/>
                                Sites;<br/>
                                E-commerce;<br/>
                                Aplicativos;<br/>
                                Análise de vulnerabilidades;<br/>
                            </p>
                            <p>
                                Testes de invasão;<br/>
                                Modelagem de Dados;<br/>
                                Configurações de servidores;<br/>
                                Configurações de Redes de computadores.<br/>
                            </p>
                        </div>
                    </LeftBanner>
                    <ExperiencesImage src={ExperiencesIMG}/>
                </Experiences>
                <HowWeDo>
                    <HowWeDoImage src={HowWeDoIMG}/>
                    <RightBanner 
                        title="Como trabalhamos?"
                        text="Nossa equipe possui as habilidades e o conhecimento técnico necessário para analisar 
                        e testar ambientes reais e digitais em busca de vulnerabilidades de segurança 
                        que possam comprometer dados e empresas. Nossos clientes recebem relatórios frequentes
                        de possíveis brechas de segurança para que se mantenham protegidos e diminuam os riscos de possíveis ataques"
                    />
                </HowWeDo>
                <Contact>
                    <ContactTitle>
                        <hr />
                        <h3>Contate-nos</h3>
                        <hr />
                    </ContactTitle>
                    <ContactContent>
                        <p>
                            Se interessou pelo nosso trabalho? 
                            Entre em contato conosco para saber mais ou fazer um agendamento
                        </p>
                        <NavLink to="/contato" className="link">Entre em contato</NavLink>
                    </ContactContent>
                </Contact>

            </Content>
            <Footer />
        </Container>
    )
}

export default Company;
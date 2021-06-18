import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import NavBanner from '../../Components/NavBanner';
import Footer from '../../Components/Footer';

import MatterIMG from '../../Assets/images/engenharia_social.jpg';

import { 
    Container,
    Content,
    Matter,
    MatterImage,
    MatterText,
    OthersMatters,
    Links,
    KnowMore,
    ReadToo
} from './styles';

const SocialEngeneering = () => {
    return (
        <Container>
            <Header />
            <NavBanner currentPage="Engenharia Social" navPath="/engenharia social" />
            <Content>
                <Matter>
                    <MatterImage src={MatterIMG} />
                    <MatterText>
                        CONTEÚDO
                    </MatterText>
                </Matter>
                <OthersMatters>
                    <KnowMore>
                        <h4>Saiba Mais</h4>
                        <Links>
                            <Link to="" className="links">- O que é pentest?</Link>
                            <Link to="" className="links">- Fases de um pentest</Link>
                            <Link to="" className="links">- Tipos de pentest</Link>
                            <Link to="" className="links">- Relatórios Gerais e Técnicos</Link>
                        </Links>
                    </KnowMore>
                    <ReadToo>
                        <h4>Leia também</h4>
                        <Links>
                            <Link to="" className="links">- Ataques Hacker: o que os favorecem?</Link>
                            <Link to="" className="links">- O que justifica realizar um pentest?</Link>
                        </Links>
                    </ReadToo>
                </OthersMatters>
            </Content>
            <Footer />
        </Container>
    )
}

export default SocialEngeneering;
import React from 'react';
import Header from '../../Components/Header';
import NavBanner from '../../Components/NavBanner';
import Footer from '../../Components/Footer';
import OthersMatters from '../../Components/OthersMatters';

import MatterIMG from '../../Assets/images/engenharia_social.jpg';

import { 
    Container,
    Content,
    Matter,
    MatterImage,
    MatterText,
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
                <OthersMatters 
                    KnowMoreLinks={[
                        { title: "O que é Pentest?", path: "" },
                        { title: "Fases de um Pentest", path: "" },
                        { title: "Tipos de Pentest", path: "" },
                        { title: "Relatórios Gerais e Técnicos", path: "" },
                    ]}
                    ReadTooLinks={[
                        { title: "Ataques Hacker: o que os favorecem?", path: "" },
                        { title: "O que justifica realizar um Pnetest?", path: "" }
                    ]}
                />
            </Content>
            <Footer />
        </Container>
    )
}

export default SocialEngeneering;
import React from 'react';

import { 
    Container,
    RedesSociais,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    FooterInfo,
} from './styles';

const Footer = () => {
    return (
        <Container>
            <RedesSociais>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </RedesSociais>

            <FooterInfo>
                <p>Todos os direitos reservados - SecurityStorm</p>
                <p>Desenvolvido por <span>Arthur.A</span></p>
            </FooterInfo>
            
        </Container>
    )
}

export default Footer;
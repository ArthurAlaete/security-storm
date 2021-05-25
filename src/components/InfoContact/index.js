import React from 'react';

import { 
    Container, 
    Telefone,
    TelefoneIcon,
    TelefoneInfo, 
    Horarios, 
    HorariosIcon,
    HorariosInfo,
    Email,
    EmailIcon,
    EmailInfo
} from './styles';

const InfoContact = () => {
    return(
        <Container>
            <Telefone>
                <TelefoneIcon />
                <TelefoneInfo>
                    <p>Entre em contato conosco</p>
                    <span>+55 84 9999-9999</span>
                </TelefoneInfo>
            </Telefone>

            <Horarios>
                <HorariosIcon />
                <HorariosInfo>
                    <p>Nossos horários</p>
                    <span>Seg - Sex 08:30 - 18:00</span>
                </HorariosInfo>
            </Horarios>

            <Email>
                <EmailIcon />
                <EmailInfo>
                    <p>Corrêio eletrônico</p>
                    <span>securitystorm@gmail.com</span>
                </EmailInfo>
            </Email>
        </Container>
    )
}

export default InfoContact;
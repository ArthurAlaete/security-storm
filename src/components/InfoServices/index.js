import React from 'react';

import { 
    Container,
    ServicesContainer,
    ServiceInfo,
    AlertIcon,
    SpyIcon,
    ServerIcon,
    EyeIcon,
    PeopleIcon,
    ChecklistIcon,

} from './styles';

const InfoServices = () => {
    return (
        <Container>
            <ServicesContainer>
                <AlertIcon />
                <ServiceInfo>
                    <h3>Análise de Vulnerabilidades</h3>
                    <p>Descoberta de ativos vulneráveis utilizando scanners automatizados</p>
                </ServiceInfo>
            </ServicesContainer>

            <ServicesContainer>
                <SpyIcon />
                <ServiceInfo>
                    <h3>Testes de Invasão</h3>
                    <p>Exploração de vulnerabilidades descobertas para obtenção de acesso</p>    
                </ServiceInfo> 
            </ServicesContainer>

            <ServicesContainer>
                <ServerIcon />
                <ServiceInfo>
                    <h3>Configuração de Redes e Servidores</h3>
                    <p>Com análise dos pontos vulneráveis e suas correções a curto e longo prazo</p>    
                </ServiceInfo> 
            </ServicesContainer>

            <ServicesContainer>
                <EyeIcon />
                <ServiceInfo>
                    <h3>Exploração de Falhas</h3>
                    <p>Obtenção de dados, informações sigilosas, bloqueio de contas, etc</p>    
                </ServiceInfo> 
            </ServicesContainer>

            <ServicesContainer>
                <PeopleIcon />
                <ServiceInfo>
                    <h3>Engenharia Social</h3>
                    <p>Exploração de falhas humanas através de emails, contatos telefônicos, etc</p>    
                </ServiceInfo> 
            </ServicesContainer>

            <ServicesContainer>
                <ChecklistIcon />
                <ServiceInfo>
                    <h3>Relatórios Gerenciais</h3>
                    <p>Descrição das atividades, resultados dos testes e correções a realizar</p>    
                </ServiceInfo> 
            </ServicesContainer>
        </Container>
    )
}

export default InfoServices;
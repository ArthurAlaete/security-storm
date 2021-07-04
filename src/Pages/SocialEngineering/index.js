import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import Footer from '../../components/Footer';
import OthersMatters from '../../components/OthersMatters';

import MatterIMG from '../../Assets/images/engenharia_social.jpg';

import { 
    Content,
    Matter,
    MatterImage,
    MatterTexts,
} from './styles';

const SocialEngeneering = () => {
    return (
        <Layout>
            <Header />
            <NavBanner currentPage="Engenharia Social" navPath="/ Testes de Invasão / Engenharia social" />
            <Content>
                <Matter>
                    <MatterImage src={MatterIMG} />
                    <MatterTexts>
                        <p>
                            A engenharia social, no contexto de segurança da informação, refere-se a manipulação 
                            psicológica de pessoas para a execução de ações ou divulgar informações confidenciais.
                            Este é um termo que descreve um tipo psicotécnico de intrusão que depende fortemente de 
                            interação humana e envolve enganar outras pessoas para quebrar procedimentos de segurança.
                        </p>
                        <p>
                            Um ataque clássico na engenharia social é quando uma pessoa se passa por um funcionário
                            de alto nível dentro da organização e diz que o mesmo possui problemas urgentes 
                            de acesso ao sistema, conseguindo assim o acesso a locais restritos. 
                            Existem também outras técnicas utilizadas como ataques de engenharia social das 
                            quais podemos listar:
                        </p>

                        <h4>E-mail Falso</h4>
                        <p>
                            Sem dúvidas esta é a técnica mais utilizada para conseguir um acesso na rede alvo.
                            Conhecido como phishing, que pode ser traduzido como “pescaria” ou “e-mail falso”, 
                            são e-mails manipulados e enviados com o intuito de aguçar algum sentimento 
                            de seus destinatários, para que o usuário aceite o e-mail e realize 
                            as operações solicitadas.
                        </p>

                        <h4>Análise do Lixo</h4>
                        <p>
                            Provavelmente poucas organizações tem o cuidado de verificar o que está sendo descartado 
                            da empresa e de que forma é realizado este descarte. O lixo é uma das fontes mais ricas 
                            de informações para os Engenheiros Sociais. Existem muitos relatos e matérias publicadas
                            na Internet abordando este tipo de ataque, visto que através das informações coletadas 
                            no lixo podem conter nome de funcionários, telefone, e-mail, senhas, contato de clientes, 
                            fornecedores, transações efetuadas, entre outros, ou seja, este é um dos primeiros passos 
                            para que se inicie um ataque direcionado à empresa
                        </p>

                        <h4>Contato Telefônico</h4>
                        <p>
                            Utilizando de uma ligação telefônica, seja se passando por um funcionário da empresa, 
                            fornecedor ou terceiros, é possível que o hacker consiga nomes e e-mail de gerentes, 
                            coordenadores, até colaboradores da área de TI, informações de hardwares e de softwares 
                            e até mesmo endereços de IP, diretamente dos próprios funcionários da empresa alvo nesse 
                            tipo de ataque.
                        </p>

                        <h4>Internet e Redes Sociais</h4>
                        <p>
                            Atualmente muitas informações podem ser coletadas através da Internet e Redes Sociais sobre o alvo. 
                            Quando um hacker precisa conhecer melhor seu alvo, esta técnica é utilizada, iniciando um 
                            estudo no site da empresa para melhor entendimento, pesquisas na Internet e uma boa consulta 
                            nas redes sociais na qual é possível encontrar informações interessantes de funcionários da empresa, 
                            cargos, amizades, perfil pessoal, entre outros.
                        </p>
                        <p>
                            Como esse tipo de ataque depende do fator humano para obter êxito, esse último se caracteriza 
                            como um dos principais tipos de vulnerabilidade. Neste link você encontrará algumas das mais 
                            exploradas que favorecem um ataque hacker.
                        </p>
                    </MatterTexts>
                </Matter>
                <OthersMatters 
                    KnowMoreLinks={[
                        { title: "O que é Pentest?", path: "/testes-invasao/pentest" },
                        { title: "Fases de um Pentest", path: "/testes-invasao/fases-pentest" },
                        { title: "Tipos de Pentest", path: "/testes-invasao/tipos-pentest" },
                        { title: "Relatórios Gerais e Técnicos", path: "/testes-invasao/relatorios" },
                    ]}
                    ReadTooLinks={[
                        { title: "Ataques Hacker: o que os favorecem?", path: "/testes-invasao/ataques" },
                        { title: "O que justifica realizar um Pnetest?", path: "/testes-invasao/justificacao" }
                    ]}
                />
            </Content>
            <Footer />
        </Layout>
    )
}

export default SocialEngeneering;
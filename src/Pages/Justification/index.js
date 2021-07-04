import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import OthersMatters from '../../components/OthersMatters';
import Footer from '../../components/Footer';

import MatterIMG from '../../Assets/images/justificacao.jpg';

import { 
    Content,
    Matter,
    MatterImage,
    MatterTexts,
} from './styles';

const Justification = () => {
    return (
        <Layout>
            <Header />
            <NavBanner currentPage="O que justifica um Pentest?" navPath="/ Testes de Invasão / O que justifica um Pentest" />
            <Content>
                <Matter>
                    <MatterImage src={MatterIMG} />
                    <MatterTexts>
                        <p>
                            Há alguns anos muitas empresas não conheciam o termo pentest ou 
                            sequer se preocupavam com segurança digital. Muitas não investiam 
                            seriamente na segurança de seus dados, limitando todo esforço realizado 
                            para configuração de redes e de servidores a um único funcionário, 
                            geralmente de outro setor da empresa, que tinha bons conhecimentos 
                            de informática e a aquisição de softwares de forma ilegal (pirataria).
                        </p>
                        <h4>Sequestros Virtuais</h4>
                        <p>
                            Hoje existem casos de sequestro de dados através de vírus (ransomwares) em 
                            empresas menores, como farmácias e oficinas mecânicas, quem dirá escolas e 
                            repartições públicas, onde o software malicioso através de um sistema de 
                            encriptação de dados ‘sequestra’ todos os arquivos de computadores em uma 
                            rede sem retirá-los de lá, solicitando assim uma determinada quantia em 
                            dinheiro para descriptografar todos os dados.
                        </p>
                        <p>
                            A certeza é uma só: após um ataque devastador de um invasor mal intencionado, 
                            nem a troca dos sistemas de gerenciamento e dos servidores de acesso, e nem a 
                            contratação de um serviço especializado para reconfigurar toda a rede computadores, 
                            irão repor os milhares e milhares em prejuízo causados pela falta de uma política 
                            de segurança da informação caso os dados envolvidos sejam registros trabalhistas, 
                            fiscais, estoques, compras, em resumo: quando toda a vida de uma empresa for 
                            perdida nesse ataque.
                        </p>
                        <h4>A necessidade de um Pentest</h4>
                        <p>
                            A realização de um Teste de Invasão (Pentest) é necessária quando 
                            há uma mudança na arquitetura da rede de computadores de uma empresa, 
                            ou na aquisição de um novo sistema de gerenciamento, pois dessa forma é 
                            possível prever e mitigar caso alguma vulnerabilidade em potencial seja 
                            descoberta devido tais mudanças.
                        </p>
                        <p>
                            No geral sempre existe a necessidade de se realizar um pentest ao menos 
                            uma vez por ano, devido ao surgimento de novas tecnologias e o 
                            aperfeiçoamento técnico dos invasores durante esse período.
                        </p>
                        <p>
                            Em determinados casos há a necessidade de se realizar tais testes de invasão a 
                            cada 6 meses como no caso de sistemas financeiros relacionados à pagamentos eletrônicos
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
                        { title: "Engenharia Social", path: "/testes-invasao/engenharia-social" },
                    ]}
                />
            </Content>
            <Footer />
        </Layout>
    )
}

export default Justification;
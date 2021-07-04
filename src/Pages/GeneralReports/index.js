import React from 'react';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import NavBanner from '../../components/NavBanner';
import OthersMatters from '../../components/OthersMatters';
import Footer from '../../components/Footer';

import MatterIMG from '../../Assets/images/relatorio.png';

import { 
    Content,
    Matter,
    MatterImage,
    MatterTexts,
} from './styles';

const GeneralReports = ({ history }) => {

    return (
        <Layout>
            <Header />
            <NavBanner currentPage="Relatórios Gerais e Técnicos" navPath="/ Testes de Invasão / Relatórios Gerais e Técnicos" />
            <Content>
                <Matter>
                    <MatterImage src={MatterIMG} />
                    <MatterTexts>
                        <p>
                            Ao final de todas as etapas de um pentest é gerado um relatório contendo 
                            todo o descritivo do teste realizado de forma clara, transparente e objetiva.
                            Neste relatório será apontado o que o cliente está fazendo corretamente, 
                            quais pontos ele deverá melhorar sua postura quanto à 
                            segurança da informação, como foi possível realizar a invasão, 
                            quais os resultados das descobertas durante a invasão, 
                            como corrigir esses problemas, etc.
                        </p>
                        <p>
                            Esse relatório é divido em duas seções: <strong>gerencial</strong> e <strong>técnica</strong>.
                        </p>
                        <h4>Seção Gerencial</h4>
                        <p>
                            Na seção gerencial são apresentados um histórico com toda a descrição do 
                            propósito do teste de invasão, um postura geral da eficiência do teste e 
                            dos problemas encontrados, um perfil do risco classificando a postura da 
                            empresa quanto à segurança caso seja necessário, as descobertas gerais dos 
                            problemas encontrados e a eficiência de qualquer medida de prevenção 
                            encontrada, um resumo das recomendações com uma visão geral das tarefas 
                            necessárias de correção e prevenção, e um mapa estratégico com objetivos 
                            de curto e longo prazo para melhorias da postura do cliente quanto à segurança.
                        </p>
                        <h4>Seção Técnica</h4>
                        <p>
                            Na seção técnica serão apresentados uma introdução com detalhes 
                            técnicos do escopo do teste, todos os detalhes das fases de coleta 
                            de informações, avaliação de vulnerabilidades, exploração de falhas
                            e pós-exploração de falhas, uma descrição do risco identificado 
                            com uma estimativa das perdas caso as vulnerabilidades identificadas 
                            sejam exploradas por um invasor e a conclusão com uma visão geral do 
                            teste realizado.
                        </p>
                    </MatterTexts>
                </Matter>
                <OthersMatters 
                    KnowMoreLinks={[
                        { title: "O que é Pentest?", path: "/testes-invasao/pentest" },
                        { title: "Fases de um Pentest", path: "/testes-invasao/fases-pentest" },
                        { title: "Tipos de Pentest", path: "/testes-invasao/tipos-pentest" },
                    ]}
                    ReadTooLinks={[
                        { title: "Ataques Hacker: o que os favorecem?", path: "/testes-invasao/ataques" },
                        { title: "Engenharia Social", path: "/testes-invasao/engenharia-social" },
                        { title: "O que justifica realizar um Pentest?", path: "/testes-invasao/justificacao" },
                    ]}
                />
            </Content>
            <Footer />
        </Layout>
    )
}

export default GeneralReports;
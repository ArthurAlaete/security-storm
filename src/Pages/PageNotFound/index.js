import React from 'react';

import { 
    Header,
    Footer, 
} from '../../Components';

import { 
    Container, 
    MessageContainer 
} from './styles';

const PageNotFound = () => {
    return (
        <Container>
            <Header />
            <MessageContainer>
                <h1>Página não encontrada</h1>
                <p className="paragraph">Nós não pudemos encontrar o que você está buscando.</p>
                <p className="paragraph">Por favor, contate o dono do site que o redirecionou para a URL original e avise-o sobre o link quebrado.</p>
            </MessageContainer>
            <Footer />
        </Container>
    )
}

export default PageNotFound;
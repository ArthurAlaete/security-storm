import React from 'react';
import { Link } from 'react-router-dom';

import { Container, DropdownView, DropdownLinks, ArrowIcon } from './styles';

const Dropdown = () => {

    const [showDropdown, setShowDropdown] = React.useState(false);

    return(
        <Container onClick={() => setShowDropdown(!showDropdown)}>
            <DropdownView className={showDropdown ? "activated" : ''}>
                <p>Testes de Invasão</p>
                <ArrowIcon className={showDropdown ? 'inverse' : ''} />
            </DropdownView>
            <DropdownLinks className={showDropdown ? 'show' : ''}>
                <Link className="links" to="/testes-invasao/pentest">O que é Pentest?</Link>
                <Link className="links" to="/testes-invasao/fases-pentest">Fases de um Pentest</Link>
                <Link className="links" to="/testes-invasao/tipos-pentest">Tipos de Pentest</Link>
                <Link className="links" to="/testes-invasao/relatorios">Relatórios gerais e técnicos</Link>
            </DropdownLinks>
        </Container>
    )
}

export default Dropdown;
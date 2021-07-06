import React from 'react';
import { Link } from 'react-router-dom';
import { Container, KnowMore, ReadToo, Links } from './styles';

const OthersMatters = ({ KnowMoreLinks, ReadTooLinks }) => {
    return(
        <Container>
            <KnowMore>
                <h4>Saiba Mais</h4>
                <Links>
                    {KnowMoreLinks.map(KnowMoreLink => (
                        <Link to={KnowMoreLink.path} className="links">- {KnowMoreLink.title}</Link>
                    ))}
                </Links>
            </KnowMore>
            <ReadToo>
                <h4>Leia também</h4>
                <Links>
                    {ReadTooLinks.map(ReadTooLink => (
                            <Link to={ReadTooLink.path} className="links">- {ReadTooLink.title}</Link>
                    ))}
                </Links>
            </ReadToo>
        </Container>
    )
}

export default OthersMatters;
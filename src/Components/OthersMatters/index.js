import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Container, 
    KnowMore, 
    ReadToo, 
    Links 
} from './styles';

const OthersMatters = ({ KnowMoreLinks, ReadTooLinks }) => {
    return(
        <Container>
            <KnowMore>
                <h4>Saiba mais:</h4>
                <Links>
                    {KnowMoreLinks.map(KnowMoreLink => (
                        <Link to={KnowMoreLink.path} className="link">{KnowMoreLink.title}</Link>
                    ))}
                </Links>
            </KnowMore>
            <ReadToo>
                <h4>Leia também:</h4>
                <Links>
                    {ReadTooLinks.map(ReadTooLink => (
                            <Link to={ReadTooLink.path} className="link">{ReadTooLink.title}</Link>
                    ))}
                </Links>
            </ReadToo>
        </Container>
    )
}

export default OthersMatters;
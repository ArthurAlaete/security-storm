import React from 'react';
import {
    Container,
    Image,
    Content
} from './styles'

const Matter = ({ children, matterIMG }) => {
    return (
        <Container>
            <Image src={matterIMG} />
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Matter;
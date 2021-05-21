import styled from 'styled-components';

export const Container = styled.div`
    grid-area: carousel;

    .carousel-item {
        
        img {
            height: 500px;
        }

        .carousel-caption {

            margin-bottom: 20px;

            .carousel-texto {
                margin-bottom: 100px;
            }

            .link {
                color: var(--white);
                text-decoration: none;
                background: var(--primary);
                font-weight: bold;

                border-radius: 8px;
                padding: 12px;
                font-size: 15px;
                transition: all ease-out 0.3s;
            }

            .link:hover {
                background-color: var(--tertiary);
                color: var(--white);
            }
        }
    }
    
`;
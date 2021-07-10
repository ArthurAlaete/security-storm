import styled from 'styled-components';

export const Container = styled.div`
    grid-area: carousel;

    .carousel-control-prev:hover, 
    .carousel-control-next:hover {
        transform: scale(1.5);
    }

    .carousel-item {
        
        img {
            height: 500px;
        }

        .carousel-caption {

            margin-bottom: 20px;

            .carousel-texto {

                margin-bottom: 30px;

                h3 {
                    display: inline;
                    font-weight: bold; 
                    background-color: rgba(255, 255, 255, 0.9); 
                    color: var(--secondary); 
                    padding: 15px; 
                    border-radius: 4px;
                }

                p {
                    margin-top: 30px; 
                    margin-bottom: 80px; 
                    font-weight: bold; 
                    background-color: rgba(24, 20, 20, 0.8); 
                    color: var(--white); 
                    padding: 12px; 
                    border-radius: 4px;
                    font-size: 17px;
                }
            }

            .carousel-link {
                color: var(--white);
                text-decoration: none;
                background: var(--primary);
                font-weight: bold;

                border-radius: 8px;
                padding: 12px;
                font-size: 15px;
                transition: all ease-out 0.3s;
            }

            .carousel-link:hover {
                background-color: var(--tertiary);
                color: var(--white);
            }
        }
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    grid-area: carousel;

    .carousel-control-prev:hover, 
    .carousel-control-next:hover {
        transform: scale(1.5);
    }

    .carousel-item {
        
        .carousel-imagem {
            height: 500px;
        }

        .carousel-caption {

            margin-bottom: 20px;
            z-index: 1;

            .carousel-texto {

                margin-bottom: 30px;

                h3.carousel-titulo {
                    display: inline-block;
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


    @media (max-width:767.98px) { 
        .carousel-item {
            .carousel-imagem {
                height: 370px;
            }
            .carousel-caption {
                .carousel-texto {
                    margin-bottom: 30px;
    
                    h3.carousel-titulo {
                        font-size: 15px;
                    }
    
                    p.carousel-paragrafo {
                        font-size: 13px;
                        margin-top: 20px; 
                        margin-bottom: 20px; 
                    }
                }   
                .carousel-link {
                    font-size: 12px;
                }
            }
        } 
    }
    @media (min-width: 768px) and (max-width: 991.98px) { 
        .carousel-item {
            .carousel-imagem {
                height: 400px;
            }
            .carousel-caption {
                .carousel-texto {
                    margin-bottom: 30px;
    
                    h3.carousel-titulo {
                        font-size: 17px;
                    }
    
                    p.carousel-paragrafo {
                        font-size: 15px;
                        margin-top: 20px; 
                        margin-bottom: 20px; 
                    }
                }   
            }
        } 
    }
`;

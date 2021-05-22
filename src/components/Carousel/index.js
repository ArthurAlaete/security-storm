import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

import Carrosel01 from '../../Assets/images/carrosel/carrosel_01.jpg'
import Carrosel02 from '../../Assets/images/carrosel/carrosel_02.jpg'
import Carrosel03 from '../../Assets/images/carrosel/carrosel_03.png'

import { Container } from './styles';

const Carrosel = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carrosel01}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-texto">
              <h3>O que é Pentest?</h3>
              <p>O Pentest é uma forma de detectar e explorar vulnerabilidades nos sistemas, ou seja, 
                simular ataques de hackers. Essas avaliações são úteis para validar 
                a eficácia dos mecanismos de defesa do aplicativo e dos servidores por trás dele.</p>
            </div>
            <Link to="" className="carousel-link">Saiba mais</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carrosel02}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carousel-texto">
              <h3>Você pode está favorecendo um ataque hacker!</h3>
              <p>Todo computador, seja ele um servidor web, um notebook ou até mesmo um smartphone, 
                que esteja conectado à internet, está sujeito a sofrer ataque hacker.</p>
            </div>
            <Link to="" className="carousel-link">Saiba mais</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carrosel03}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="carousel-texto">
              <h3>O que justifica realizar um pentest?</h3>
              <p>Atualmente existem muitos casos de sequestro de dados através de vírus (ransomwares) em grandes e pequenas empresas, 
                como farmácias e oficinas mecânicas, quem dirá escolas e repartições públicas.</p>
            </div>
            <Link to="" className="carousel-link">Entenda melhor</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Carrosel;
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <Link to="" className="link">Saiba mais</Link>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <Link to="" className="link">Saiba mais</Link>
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
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <Link to="" className="link">Entenda melhor</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Carrosel;
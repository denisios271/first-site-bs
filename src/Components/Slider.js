import { Carousel } from 'react-bootstrap';
import React from 'react';
import space from '../space.jpg';
import mountains from '../mountains.jpg';
import ocean from '../ocean.jpg';
/* let myCarousel = new Carousel(document.getElementById('myCarousel')) ; */

export const Slider = () =>(

  <Carousel variant="dark">
   <Carousel.Item style={{'height':'400px'}}>
    <img
      className="d-block w-100"
      src={space}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height':'400px'}}>
    <img
      className="d-block w-100"
      src={mountains}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height':'400px'}}>
    <img
      className="d-block w-100"
      src={ocean}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)
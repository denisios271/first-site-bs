import { Carousel } from 'bootstrap';
import React from 'react';
import space from '../space.jpg';


let myCarousel = new Carousel(document.getElementById('myCarousel')) ;


export function Slider(){
    return (
    <myCarousel>
           <Carousel.Item>
              <img
                className ="d-block w-100"
                src = {space}
                alt="First slide"
              />
            <Carousel.Caption>
                <h3>First slide</h3>
                <p>Some text information</p>
            </Carousel.Caption>
            </Carousel.Item>
    </myCarousel>

)}
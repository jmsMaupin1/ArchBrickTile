import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css'

export default class carousel extends Component {
  render() {
    return (
      <Carousel interval={3000} pauseOnHover={false}>
        {
          this.props.slides.map((slide, index)=>{
            return (
              <Carousel.Item key={index}>
                <div className="carousel-slide" style={{backgroundImage: 'url('+slide+')'}}>
                </div>
              </Carousel.Item>
            );
          })  
        }
      </Carousel>
    );
  }
}

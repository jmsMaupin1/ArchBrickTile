import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css'

export default class carousel extends Component {
  render() {
    return (
      <div>
        <Carousel interval={15000} pauseOnHover={false} indicators={true}>
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
      </div>
    );
  }
}

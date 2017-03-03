import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './carousel.css'

export default class carousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div className="carousel-slide building">
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide couch">
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide clay-roof">
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

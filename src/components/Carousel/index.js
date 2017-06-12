import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Logo from '../../assets/abt-logo2.png'
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
        <img className='carousel-logo' src={Logo} alt="" />
        {/* <a href={"#" + this.props.scrollTo}><i className="fa fa-angle-double-down"></i></a> */}
      </div>
    );
  }
}

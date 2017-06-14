import React, { Component } from 'react';
import LightBox from 'react-images';

import './gallerysquare.css';

export default class GallerySquare extends Component {

  openLightBox() {
    this.setState((state, props) => {
      return {
        isOpen: true
      }
    });
  }
  closeLightBox() {
    this.setState((state, props) => {
      return {
        isOpen: false
      }
    });
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="square square-lightbox fadeInLeftBig">
        <div className="square-content">
          <div className="square-lightbox-image">
            <img className="img-responsive" src={this.props.image} alt="" />
          </div>
          <div className="square-overlay">
            <div className="table">
              <div className="table-cell">
                  <h3>{this.props.title}</h3>
                  <p>{this.props.subtext}</p>
                  <div className="square-overview">
                    <span className="square-expand"><a onClick={this.openLightBox.bind(this)}><i className="fa fa-search-plus"></i></a></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <LightBox
          backdropClosesModal={true}
          images={[{src: this.props.image}]}
          isOpen={this.state.isOpen}
          onClose={this.closeLightBox.bind(this)}
        />
      </div>
    );
  }
}


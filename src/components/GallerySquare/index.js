import React, { Component } from 'react';
import './gallerysquare.css';

export default class GallerySqaure extends Component {
	render() {
		return (
      <div className="gallery-square col-sm-3">
          <div className="folio-item wow fadeInLeftBig" data-wow-duration="1000ms" data-wow-delay="400ms">
            <div className="folio-image">
              <img className="" src={this.props.image} alt=""/>
            </div>
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay-text">
                  <div className="folio-info">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.subtext}</p>
                  </div>
                  <div className="folio-overview">
                    <span className="folio-link"><a className="folio-read-more" href={this.props.link?this.props.link:"#"} ><i className="fa fa-link"></i></a></span>
                    <span className="folio-expand"><a href={this.props.image} data-lightbox="portfolio"><i className="fa fa-search-plus"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		);
	}
}

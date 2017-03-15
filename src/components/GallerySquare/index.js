import React, { Component } from 'react';
import './gallerysquare.css';

export default class index extends Component {
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
                    <span className="square-link"><a className="square-read-more" href={this.props.link?this.props.link:"#"} ><i className="fa fa-link"></i></a></span>
                    <span className="square-expand"><a href={this.props.image} data-lightbox="portsquare"><i className="fa fa-search-plus"></i></a></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



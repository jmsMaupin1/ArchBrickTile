import React, { Component } from 'react';
import './suppliersquare.css';


export default class index extends Component {
    render() {
        return (
            <div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
              <div className="post-thumb">
                <a target='_#'href={this.props.link?this.props.link:"#"}><img className="img-responsive" src={this.props.image} alt="" /></a>
              </div>
              <div className="entry-header">
                <a target='_#' href={this.props.link?this.props.link:"#"}><h3>{this.props.title}</h3></a>
              </div>
              <div className="entry-content">
                <p>{this.props.subtext}</p>
              </div>
              <div>
                  <h2></h2>
              </div>

            </div>
        )
    }
}

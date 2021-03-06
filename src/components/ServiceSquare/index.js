    import React, { Component } from 'react';
import './servicesquare.css';

export default class ServiceSquare extends Component {
	render() {
		return (
			<div className={"service-square col-lg-4 " + this.props.extraClasses}>
				<div className="container text-center">
		            <div className="service-icon">
		              <i className={"fa " + this.props.icon}></i>
		            </div>
		            <div className="service-info">
		              <h3>{this.props.service}</h3>
		              <p>{this.props.subtext}</p>
		            </div>
	          	</div>
	        </div>
		);
	}
}

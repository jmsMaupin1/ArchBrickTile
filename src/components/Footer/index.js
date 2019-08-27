import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
		    	<div className="container"></div>
		    	<div className="footer-content">
			      	<div className="container">
				        <div className="row">
				          <div className="col-sm-6">
				            <p>&copy; 2017 Architectural Brick & Tile.</p>
				          </div>
				          <div className="col-sm-6">
				            <p className="pull-right">Designed by MR SaaS</p>
				          </div>
				        </div>
			      	</div>
			    </div>
		  </footer>
		);
	}
}

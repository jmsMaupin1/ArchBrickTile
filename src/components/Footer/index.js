import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
		    	<div className="container"></div>
		    	<div className="footer-content">
			    	<div className="social-icons">
			          <ul>
			            <li><a className="envelope" href="mailto:info@archbricktile.com"><i className="fa fa-envelope"></i></a></li>
			            <li><a className="twitter" href="https://www.houzz.com/pro/archbrick/architectural-brick-and-tile-inc"><i className="fa fa-houzz"></i></a></li>
			            <li><a className="facebook" href="https://www.facebook.com/archbricktile/"><i className="fa fa-facebook"></i></a></li>
			            {/* <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li> */}
			          </ul>
			        </div>
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

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
			            <li><a className="envelope" href="#"><i className="fa fa-envelope"></i></a></li>
			            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li> 
			            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
			            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
			            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
			            <li><a className="tumblr" href="#"><i className="fa fa-tumblr-square"></i></a></li>
			          </ul>
			        </div>
			      	<div className="container">
				        <div className="row">
				          <div className="col-sm-6">
				            <p>&copy; 2017 Architecture Brick & Tile.</p>
				          </div>
				          <div className="col-sm-6">
				            <p className="pull-right">Designed by Mr. SaaS</p>
				          </div>
				        </div>
			      	</div>
			    </div>
		  </footer>	    
		);
	}
}

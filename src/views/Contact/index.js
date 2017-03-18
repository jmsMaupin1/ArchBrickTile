import React, { Component } from 'react';
import './contact.css';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-banner parallax">
					<h1>Contact Us!</h1>
				</div>
				<div className="social">
					<div>
						<h2>Architecture Brick & Tile</h2>
						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							123 SOMEWHERE LANE
						</p>

						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							Indianapolis, IN 46222
						</p>

						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							abt@abtinfo.com
						</p>

						<h2>Social</h2>

						<p className="list-item">
							<a href="#">
								<span className="fa-stack fa-lg">
								    <i className="fa fa-circle fa-stack-2x"></i>
								    <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
								</span>
								instagram-username
							</a>
						</p>

						<p className="list-item">
							<a href="#">
								<span className="fa-stack fa-lg">
								    <i className="fa fa-circle fa-stack-2x"></i>
								    <i className="fa fa-houzz fa-stack-1x fa-inverse"></i>
								</span>
								houzz-username
							</a>
						</p>

						<p className="list-item">
							<a href="#">
								<span className="fa-stack fa-lg">
								    <i className="fa fa-circle fa-stack-2x"></i>
								    <i className="fa fa-youtube fa-stack-1x fa-inverse"></i>
								</span>
								youtube-username
							</a>
						</p>

					</div>
				</div>
				<div className="contact-form">
					<div>
						<h2>Get ahold of us!</h2>
						<form>
							<div className="cf-email"><input name="" placeholder="Your e-mail" title="Your e-mail" type="text" /></div>
	                        <div className="cf-name"><input name="" placeholder="Your name" title="Your name" type="text" /></div>
	                        <div className="cf-message"><textarea placeholder="Your massage" name="" rows="5"></textarea></div>
	                        <div className="cf-submit"><button type="submit">Submit Button</button></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

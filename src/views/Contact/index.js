import React, { Component } from 'react';
import './contact.css';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-banner parallax">
					<h1>Contact Us Today!</h1>
				</div>
				<div className="social">
					<div>
						<h2>Architectural Brick & Tile</h2>
						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							(317) 842-2888
						</p>

						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							8610 E 106th St #100, Fishers, IN 46038
						</p>

						<p className="list-item">
							<span className="fa-stack fa-lg">
							    <i className="fa fa-circle fa-stack-2x"></i>
							    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
							</span>
							 info@archbricktile.com
						</p>

					</div>
				</div>
				<div className="contact-form">
					<div>
						<form>
							<div className="cf-email"><input name="" placeholder="Your e-mail" title="Your e-mail" type="text" /></div>
	                        <div className="cf-name"><input name="" placeholder="Your name" title="Your name" type="text" /></div>
	                        <div className="cf-message"><textarea placeholder="Your massage" name="" rows="5"></textarea></div>
	                        <div className="cf-submit"><button type="submit">Contact Us</button></div>
						</form>
					</div>
				</div>

				<div>
				<iframe
					className="cnt"
					width="100%"
				  	height="400px"
				  	frameBorder="0"
				  	style={{"border":0}}
					src="https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Fishers,+Indiana,+IN,+United+States&output=embed"></iframe>
    			</div>
			</div>
		);
	}
}

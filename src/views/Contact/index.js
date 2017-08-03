import React, { Component } from 'react';
import './contact.css';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact">
				<div className="contact-banner parallax">
					
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

						<h1>Contact Us Today!</h1>
					</div>
				</div>
				<div className="contact-form">
					<div>
						<form>
							<div className="cf-email"><input name="" placeholder="Your e-mail" title="Your e-mail" type="text" /></div>
	                        <div className="cf-name"><input name="" placeholder="Your name" title="Your name" type="text" /></div>
	                        <div className="cf-message"><textarea placeholder="Your message" name="" rows="5"></textarea></div>
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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.9343825884293!2d-86.01891218528978!3d39.94285739224782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b36343172669%3A0x6a0070334be48048!2sArchitectural+Brick+%26+Tile!5e0!3m2!1sen!2sus!4v1497297439931"></iframe>
    			</div>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { Link } from 'react-router';
import './sticky-header.css'

export default class Header extends Component {
	render() {
		let classes = this.props.isSticky? "sticky" : "non-sticky";
		return (
			<div className={"sticky-header " + classes}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/suppliers">Suppliers</Link>
				<Link to="/contact">Contact Us</Link>
			</div>
		);
	}
}

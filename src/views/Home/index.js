import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Home extends Component {
	render() {
		return (
			<div>
				<Link to="/about">about</Link>
				<Link to="/contact">contact</Link>
				<Link to="/product">product</Link>
			</div>
		);
	}
}

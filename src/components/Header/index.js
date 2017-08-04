import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';
import './header.css';

import ABTIcon from '../../assets/abt-logo2.png';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state={
			revealed: false
		}
	}

	handleClick(e){
		this.setState((state, props) => {return{
			revealed: !state.revealed
		}});
	}

	click(e){
		let nav = $('.nav-button').click();
	}

	render() {
		let classes = this.props.isSticky? "contracted" : "expanded";
		let revealed = this.state.revealed? "revealed" : "concealed";
		return (
			<div className={"navigation " + classes}>
				<div className="fluid-container">
					<div className='navigation-content col-lg-12'>
							<Link onClick={this.click.bind(this)} className={'col-lg-3 ' + revealed} to="/">Home</Link>
							<Link onClick={this.click.bind(this)} className={'col-lg-3 ' + revealed} to="/about">About</Link>
							<Link onClick={this.click.bind(this)} className={'col-lg-3 ' + revealed} to="/"><img alt="ABT Logo" className="logo" src={ABTIcon}></img></Link>
							<Link onClick={this.click.bind(this)} className={'col-lg-3 ' + revealed} to="/suppliers">Suppliers</Link>
							<Link onClick={this.click.bind(this)} className={'col-lg-3 ' + revealed} to="/contact">Contact Us</Link>
						<button className="nav-button" onClick={this.handleClick.bind(this)}><i className="fa fa-bars"/></button>
					</div>
				</div>
			</div>
		);
	}
}


// <span style={{
// 							color: "white",
// 							font: "100px",
// 							paddingLeft: "20px",
// 							paddingTop: "20px",
// 						}}>(317) 842-2888</span>
import React, { Component } from 'react';
import { Link } from 'react-router';
import './header.css';

import ABTIcon from '../../assets/abt-icon2.png';


export default class index extends Component {
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

	render() {
		let classes = this.props.isSticky? "contracted" : "expanded";
		let revealed = this.state.revealed? "revealed" : "concealed";
		return (
			<div className={"navigation " + classes}>
				<div className="fluid-container">
					<Link to="/"><img alt="ABT Logo" className="logo" src={ABTIcon} style={{
							paddingTop: "10px",
						}}></img></Link><span style={{
							color: "white",
							font: "100px",
							paddingLeft: "20px",
							paddingTop: "20px",
						}}>(317) 842-2888</span>
					<div className={"navigation-content"}>
						<Link className={revealed} to="/">Home</Link>
						<Link className={revealed} to="/about">About</Link>
						<Link className={revealed} to="/suppliers">Suppliers</Link>
						<Link className={revealed} to="/contact">Contact Us</Link>
					</div>
					<button className="nav-button" onClick={this.handleClick.bind(this)}><i className="fa fa-bars"/></button>
				</div>
			</div>
		);
	}
}

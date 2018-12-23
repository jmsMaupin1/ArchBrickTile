import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import './App.css';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			scrollTop: 0
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.updateScrollTop.bind(this))
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateScrollTop);
	}

	updateScrollTop(e){
		let top = window.scrollY;
		this.setState({
			scrollTop: top
		});
	}

	render() {
		return (
	    	<div className="App">
		        <Header isSticky={this.state.scrollTop > 80}/>
		        	{React.cloneElement(this.props.children, {...this.props})}
	      	</div>
	  	);
	}
}

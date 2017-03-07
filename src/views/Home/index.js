import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Carousel';
import Gallery from '../../components/ProductGallery';
import './home.css';
export default class Home extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="home">
				<Carousel slides={[
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/1384_1-818x478.jpg",
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/2011-catalog_final_full-size-soft-copy_page_041.jpg",
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/living_horz_050.jpg"
        	]}/>

        	<Gallery />
			</div>
		);
	}
}

import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Carousel';
import GallerySquare from '../../components/GallerySquare';


import BrickProduct from '../../assets/brick-product.jpg';
import CarvedStone from '../../assets/carved-stone.jpg';
import ClayPavers from '../../assets/clay-pavers.jpg';
import MasonryAccents from '../../assets/masonry-accents.jpeg';
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
        		<GallerySquare 
        			image={MasonryAccents}
        			title="Masonry Accents"
        			subtext="All the Masonry Accents you could want"
        		/>

        		<GallerySquare 
        			image={BrickProduct}
        			title="Brick Products"
        			subtext="All the Masonry Accents you could want"
        		/>

        		<GallerySquare 
        			image={ClayPavers}
        			title="Clay Pavers"
        			subtext="All the Masonry Accents you could want"
        		/>

        		<GallerySquare 
        			image={CarvedStone}
        			title="Carved Stone"
        			subtext="All the Masonry Accents you could want"
        		/>
			</div>
		);
	}
}

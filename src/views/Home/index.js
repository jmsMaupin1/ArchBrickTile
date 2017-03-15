import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Carousel';
import GalleryHeader from '../../components/ProductGalleryHeader';
import GallerySquare from '../../components/GallerySquare';
import ServiceSquare from '../../components/ServiceSquare';


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

            <GalleryHeader />
            <GallerySquare 
                    image={BrickProduct}
                    title="Check out our bricks"
                    subtext="All the bricks"
            />

            <GallerySquare 
                    image={CarvedStone}
                    title="Check out our carved stone"
                    subtext="All the carved stone"
            />

            <GallerySquare 
                    image={ClayPavers}
                    title="Clay Pavers"
                    subtext="All the Clay Pavers"
            />

            <GallerySquare 
                    image={MasonryAccents}
                    title="Check out our Masonry Accents"
                    subtext="All the Accents"
            />

            <GallerySquare 
                    image={BrickProduct}
                    title="Check out our bricks"
                    subtext="All the bricks"
            />

            <GallerySquare 
                    image={CarvedStone}
                    title="Check out our carved stone"
                    subtext="All the carved stone"
            />

            <GallerySquare 
                    image={ClayPavers}
                    title="Clay Pavers"
                    subtext="All the Clay Pavers"
            />

            <GallerySquare 
                    image={MasonryAccents}
                    title="Check out our Masonry Accents"
                    subtext="All the Accents"
            />

            <ServiceSquare 
                icon={"fa-product-hunt"}
                service={"Supply Products"}
                subtext={"We supply products for commercial and residential projects."}
            />

            </div>
		);
	}
}

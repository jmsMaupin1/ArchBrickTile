import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import GallerySquare from '../../components/GallerySquare';
import AboutParallax from '../../components/AboutParallax';
import ServiceSquare from '../../components/ServiceSquare';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import BrickProduct from '../../assets/brick-product.jpg';
import ClayPavers from '../../assets/clay-pavers.jpg';
import CarvedStone from '../../assets/carved-stone.jpg';
import MasonryAccents from '../../assets/masonry-accents.jpeg';
import DecorativeAccents from '../../assets/deco-tiles.jpg';
import ExteriorStone from '../../assets/exterior-stone.jpg';
import GlassTile from '../../assets/glass-tile.jpg';
import CeramicTile from '../../assets/ceramic-tile.jpg';
import HardwoodFlooring from '../../assets/hardwood-tile.jpg';
import MasonryVeneers from '../../assets/masonry-veneers.jpg';
import MetalTile from '../../assets/metal-tiles.jpg';
import StoneFloors from '../../assets/stone-floors.jpg';
import PorcelainTile from '../../assets/porcelain-tiles.jpg';

export default class index extends Component {
	constructor(props){
		super(props);
        configureAnchors({scrollDuration: 1000});
        this.state = {
          galleryList : [
            {
              image:BrickProduct,
              title:"Check out our bricks",
              subtext:"We offers many different lines of residential, commercial, and architectural brick manufactures. We go the extra mile in making sure we get you the best brick product at the best price",
            },
            {
              image:ClayPavers,
              title:"Check out our clay pavers",
              subtext:"We have a showroom full of clay pavers for you to sample for whatever your needs may be",
            },
            {
              image:CarvedStone,
              title:"Check out our carved stone",
              subtext:"We are fortunate enough to represent the best of the best in reproductions and original masterpieces in forms such as fireplace surrounds and majestic overmantles, kitchen stove stone hoods, outdoor water features and fountains",
            },
            {
              image:MasonryAccents,
              title:"Check out our masonry accents",
              subtext:"No matter what your masonry needs, we have everything you need when it comes to functioning decorative masonry products",
            },
            {
              image:DecorativeAccents,
              title:"Check out our Tile and Stone Accents",
              subtext:"We are known for having whatever is unique in Indiana. We pride ourselves on being able to offer variety, choice and the design ability to put it all together within your budget",
            },
            {
              image:ExteriorStone,
              title:"Check out our Exterior Stones",
              subtext:"We can help you with your selection of stone as well as the setting mortars that can really make your stone standout",
            },
            {
              image:GlassTile,
              title:"Check out our Glass Tiles",
              subtext:"Our vast selection of colors, tones, shades and sizes in glass tile will allow you to find the perfect way to express yourself on your kitchen backsplash, bathroom walls, floors and countertops",
            },
            {
              image:CeramicTile,
              title:"Check out our HandCrafted Ceramic Tiles",
              subtext:"Handcrafted tile is available in a variety of mediums, colors and finishes which may be utilized in many different venues.  Residentially or commercially, each tile has its place, durability and use",
            },
            {
              image:HardwoodFlooring,
              title:"Check out our Hardwood Flooring",
              subtext:"We have a very wide variety of hardwood selections from which to choose, ranging from many styles, patterns, colors and species.  Let us help you today with a floor that will last a lifetime",
            },
            {
              image:MasonryVeneers,
              title:"Check out our Masonry Veneers",
              subtext:" Whether you are looking for a brick look, stone look, or the more modern look of panelized stone, visit our showroom to see one of the states largest selections of thin veneer materials",
            },
            {
              image:MetalTile,
              title:"Check out our Metal Tiles",
              subtext:"We represent over 100 different Metallic Tile manufacturers. We have the largest variety of specialty accents in Indiana",
            },
            {
              image:StoneFloors,
              title:"Check out our Stone Floors",
              subtext:"We utilize many different vendors and importers from all over the world to make sure we offer all our clients the very best selection and quality materials available",
            },
            {
              image:PorcelainTile,
              title:"Check out our Porcelain Tiles",
              subtext:"We represent materials ranging from high-definition graphics and inkjet technologies in order to reproduce the most natural looking marbles and stones quarried from around the world as well as through-body, contemporary porcelains in warm or cool tones",
            }
          ],
          showButtonText:"Show More",
          numberShown: 8
        }
	}

	changeAmount(){
		this.setState((state, props) => {
      		return {
		        numberShown: state.numberShown > 8 ? 8 : state.galleryList.length,
		        showButtonText: state.showButtonText==="Show Fewer"? "Show More" : "Show Fewer"
	      	}
    	});
	}

	render() {
		return (
			<div>
				<Carousel scrollTo="products" slides={[
					"http://www.archbricktile.com/wp-content/gallery/living-spaces/1384_1-818x478.jpg",
    				"http://www.archbricktile.com/wp-content/gallery/living-spaces/2011-catalog_final_full-size-soft-copy_page_041.jpg",
    				"http://www.archbricktile.com/wp-content/gallery/living-spaces/living_horz_050.jpg"
				]}></Carousel>

				<ScrollableAnchor id="products">
					<div className="text-center" style={{
						paddingTop: "80px",
						paddingBottom: "80px"
					}}>
						<h2>Product Gallery</h2>
						<p>Check out our products</p>	
					</div>
				</ScrollableAnchor>

				<div style={{
					width: "100%",
					maxHeight: "6000px",
					overflow: "hidden"
				}}>
					{this.state.galleryList.map((square, i)=>{
	          			if(i<this.state.numberShown)return <GallerySquare key={i} image={square.image} title={square.title} subtext={square.subtext}/>
	        		})}
        		</div>

        		<div className="text-center" style={{
        			width: "100%",
        			height: "100%",
        			paddingTop: "40px",
        			paddingBottom: "40px"
        		}}>
        			<a style={{
        				cursor: "pointer",
        				border: "1px solid grey",
        				color: "#666",
        				fontSize: "14px",
        				fontWeight: "600",
        				padding: "15px 125px",
        				textTransform: "uppercase"
        			}}
        			onClick={this.changeAmount.bind(this)}>
        				{this.state.showButtonText}
        			</a>
        		</div>

        		<ScrollableAnchor id="about">
        			<AboutParallax />
        		</ScrollableAnchor>

        		<ScrollableAnchor id="services">
        			<div style={{
        				paddingTop: "80px",
        				paddingBottom: "80px"
        			}} className="text-center">
        				<h2>Our Services</h2>
        				<p>Check out the services we offer</p>
        			</div>
        		</ScrollableAnchor>
        		<div style={{
        			height: "450px"
        		}}>
        			<ServiceSquare
        				icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>

        			<ServiceSquare        				
        				icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>

        			<ServiceSquare        				
        				icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>

        			<ServiceSquare
						icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>

        			<ServiceSquare
						icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>

        			<ServiceSquare
						icon="fa-product-hunt"
        				service="Supply Products"
        				subtext="We supply products for commercial and residential projects."
        			/>
        		</div>
			</div>
		);
	}
}

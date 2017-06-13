import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import GallerySquare from '../../components/GallerySquare';
import AboutParallax from '../../components/AboutParallax';
import SocialMedia from '../../components/SocialMedia';
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
import MetalTile from '../../assets/metal-tiles.jpg';
import StoneFloors from '../../assets/stone-floors.jpg';
import PorcelainTile from '../../assets/porcelain-tiles.jpg';

export default class index extends Component {
	constructor(props){
		super(props);
        configureAnchors({scrollDuration: 10000});
        this.state = {
          galleryList : [
            {
              image:BrickProduct,
              title:"Brick",
              subtext:"We offers many different lines of residential, commercial, and architectural brick manufactures. We go the extra mile in making sure we get you the best brick product at the best price",
            },
            {
              image:ClayPavers,
              title:"Clay Pavers",
              subtext:"We have a showroom full of clay pavers for you to sample for whatever your needs may be",
            },
            {
              image:CarvedStone,
              title:"Custom Carved Stone",
              subtext:"We are fortunate enough to represent the best of the best in reproductions and original masterpieces in forms such as fireplace surrounds and majestic overmantles, kitchen stove stone hoods, outdoor water features and fountains",
            },
            {
              image:MasonryAccents,
              title:"Decorative Masonry Accents",
              subtext:"No matter what your masonry needs, we have everything you need when it comes to functioning decorative masonry products",
            },
            {
              image:DecorativeAccents,
              title:"Decorative Tile and Stone Accents",
              subtext:"We are known for having whatever is unique in Indiana. We pride ourselves on being able to offer variety, choice and the design ability to put it all together within your budget",
            },
            {
              image:ExteriorStone,
              title:"Exterior Stones",
              subtext:"We can help you with your selection of stone as well as the setting mortars that can really make your stone standout",
            },
            {
              image:GlassTile,
              title:"Glass Tiles",
              subtext:"Our vast selection of colors, tones, shades and sizes in glass tile will allow you to find the perfect way to express yourself on your kitchen backsplash, bathroom walls, floors and countertops",
            },
            {
              image:CeramicTile,
              title:"HandCrafted Ceramic Tiles",
              subtext:"Handcrafted tile is available in a variety of mediums, colors and finishes which may be utilized in many different venues.  Residentially or commercially, each tile has its place, durability and use",
            },
            {
              image:HardwoodFlooring,
              title:"Hardwood Flooring",
              subtext:"We have a very wide variety of hardwood selections from which to choose, ranging from many styles, patterns, colors and species.  Let us help you today with a floor that will last a lifetime",
            },
            {
              image:MetalTile,
              title:"Metal Tile",
              subtext:"We represent over 100 different Metallic Tile manufacturers. We have the largest variety of specialty accents in Indiana",
            },
            {
              image:StoneFloors,
              title:"Natural Stone Floors",
              subtext:"We utilize many different vendors and importers from all over the world to make sure we offer all our clients the very best selection and quality materials available",
            },
            {
              image:PorcelainTile,
              title:"Porcelain Tile",
              subtext:"We represent materials ranging from high-definition graphics and inkjet technologies in order to reproduce the most natural looking marbles and stones quarried from around the world as well as through-body, contemporary porcelains in warm or cool tones",
            }
          ],
          showButtonText:"Show More",
          numberShown: 12
        }
	}

	changeAmount(){
		this.setState((state, props) => {
      		return {
		        numberShown: state.numberShown > 12 ? 12 : state.galleryList.length,
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
					<div className="text-center container" style={{
						paddingTop: "80px",
						paddingBottom: "80px"
					}}>
                                                <div className="col-sm-6">
						<h2>Product Gallery</h2>
						<h5>Check out our product gallery below</h5>
                                                <h5>(Hover over a product square to learn more)</h5>
                                                </div>
                                                <div className="col-sm-6">
                                                <h3>Showroom Hours:</h3>
                                                <h4>
                                                        Monday – Friday 8:00 – 5:00 <br />
                                                        Thursday Eve until 7:00 <br />
                                                        Saturday 10:00 – 3:00 <br />
                                                        Warehouse Monday – Friday 7:30 – 4:30
                                                </h4>
                                                </div>
					</div>

				</ScrollableAnchor>

				<div style={{
					width: "100%",
					maxHeight: "6000px",
					overflow: "hidden"
				}}>
  					{
              this.state.galleryList.map((square, i)=>{
                if(i<this.state.numberShown)
                  return <GallerySquare key={i} image={square.image} title={square.title} subtext={square.subtext}/>
                else
                  return null;
  	          })
            }
        		</div>

        		{/* <div className="text-center" style={{
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
        		</div> */}

        		<ScrollableAnchor id="about">
        			<AboutParallax />
        		</ScrollableAnchor>

        		<ScrollableAnchor id="services">
        			<div style={{
        				paddingTop: "80px",
        				paddingBottom: "80px",
                                        paddingLeft: "40px",
                                        paddingRight: "40px"
        			}} className="text-center">
        				<h2>Our Services</h2>
        				<h4>As the owner of a 45 year old distributorship, we are proud to have evolved from a brick distributorship to a specialty building materials center specializing in foreign and domestic hardwood, brick, stone, and paving exteriors, porcelain, glass, metal, and decorative tiles and an extensive offering of natural stone flooring, mosaic and architectural moldings and features. With my sister, Kelly, and my daughter, Robyn, by my side, we are devoted to introducing unique and innovative materials to our marketplace and providing our clients, both commercial and residential, the means to achieve their design solutions and dreams. Our selections range from domestic brick, stones, and Porcelains to custom fireplaces, mosaic designs, glass tiles and panels, and exotic hardwoods. Through our infinite resources, we can find unequaled products and help you in your design and solution process. </h4>
        			</div>
        		</ScrollableAnchor>

               {/* <ScrollableAnchor id="facebook">

               <div className="col-lg-12 offset-6" style={{

                    paddingTop: "80px",
                    paddingBottom: "80px",
                                   paddingLeft: "40px",
                                   paddingRight: "40px"
               }}>
               <div className="fb-page" data-href="https://www.facebook.com/archbricktile/" data-tabs="timeline" data-width="500" data-small-header="false"  data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/archbricktile/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/archbricktile/">Architectural Brick and Tile</a></blockquote></div>

               </div>

               </ScrollableAnchor> */}
               <SocialMedia />
      			{/* <ServiceSquare
      				icon="fa-product-hunt"
      				service="Residential"
      				subtext="Create your own special environment around your personal lifestyle. Step out of the box and mix elements like stone and glass mosaics accented with mirror pieces to update your bathroom or kitchen for a touch of sophistication."
      			/>

      			<ServiceSquare
      				icon="fa-product-hunt"
      				service="Commercial"
      				subtext="For your commercial project, think BIG — Check out our extensive selection of large format porcelain and natural stones for your walls and floors, a contemporary luxurious choice!"
      			/>

      			<ServiceSquare
      				icon="fa-product-hunt"
      				service="Exterior"
      				subtext="Want to add some usable square footage to your home the easy way? Try adding an outdoor “living room” complete with brick or flagstone pavers and a stacked stone fireplace and kitchen area."
      			/> */}
			</div>
		);
	}
}

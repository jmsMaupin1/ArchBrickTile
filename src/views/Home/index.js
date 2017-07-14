import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import ProductSquare from '../../components/ProductSquare';
import AboutParallax from '../../components/AboutParallax';
import SocialMedia from '../../components/SocialMedia';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import facebook from '../../assets/fb-pic.jpg';
import instagram from '../../assets/instapic.jpg';
import stone from '../../assets/stone.jpg';
import tile from '../../assets/tile.jpg';
import exterior from '../../assets/exterior.jpg';
import bathroom from '../../assets/bathroom.jpg';
import houzz from '../../assets/houzz.jpg';
import residential from '../../assets/residential.jpg';
import commercial from '../../assets/commercial.jpg';
import kitchen from '../../assets/kitchen.jpg';
import BrickProduct from '../../assets/brick-product.jpg';
import styles from './homeStyles.js';

export default class index extends Component {
	constructor(props){
		super(props);
        configureAnchors({scrollDuration: 1000});
	}

	render() {
		return (
			<div>
				<Carousel scrollTo="products" slides={[
					"http://www.archbricktile.com/wp-content/gallery/living-spaces/1384_1-818x478.jpg",
    				"http://www.archbricktile.com/wp-content/gallery/living-spaces/2011-catalog_final_full-size-soft-copy_page_041.jpg",
    				"http://www.archbricktile.com/wp-content/gallery/living-spaces/living_horz_050.jpg"
				]}/>

				<ScrollableAnchor id="products">
					<div className="text-center container" style={styles.galleryHeader}>
            <div className="col-sm-6">
  						<h2>Product Gallery</h2>
  						<h5>
                Check out our product gallery below
                <br/>
                (Hover over a product square to learn more)
              </h5>
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

        <div className='fluid-container' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
          <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
            <div className='help-block' />
            <ProductSquare image={instagram} text='Instagram'/>
            <div className='help-block' />
            <ProductSquare image={facebook} text='Facebook'/>
            <div className='help-block' />
            <ProductSquare image={houzz} text='Houzz'/>
          </div>

          <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
            <div className='help-block' />
            <ProductSquare image={residential} text='Residential Projects'/>
            <div className='help-block' />
            <ProductSquare image={commercial} text='Commercial Projects'/>
            <div className='help-block' />
            <ProductSquare image={kitchen} text='Kitchen Products'/>
          </div>

          <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
            <div className='help-block' />
            <ProductSquare image={BrickProduct} text='Masonry / Brick'/>
            <div className='help-block' />
            <ProductSquare image={exterior} text='Exteriors'/>
            <div className='help-block' />
            <ProductSquare image={kitchen} text='Kitchen Products'/>
          </div>

          <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
            <div className='help-block' />
            <ProductSquare image={bathroom} text='Bathroom'/>
            <div className='help-block' />
            <ProductSquare image={tile} text='Tile'/>
            <div className='help-block' />
            <ProductSquare image={stone} text='Natural Stone'/>
          </div>
        </div>

    		<ScrollableAnchor id="about">
    			<AboutParallax />
    		</ScrollableAnchor>
        <SocialMedia />
			</div>
		);
	}
}



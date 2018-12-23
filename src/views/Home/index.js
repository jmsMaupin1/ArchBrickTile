import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import ProductSquare from '../../components/ProductSquare';
import AboutParallax from '../../components/AboutParallax';
import SocialMedia from '../../components/SocialMedia';
import Certifications from '../../components/Certifications';
import Modal from '../../components/Modal';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import Moose from '../../assets/Moose.jpg';
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
import wood from '../../assets/wood.jpg';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

import thirdThursday from '../../assets/announcements/thirdThursday.JPG';
import memorialday from '../../assets/announcements/memorialDayAnnouncement.png';
import fourthOfJuly from '../../assets/announcements/fourthOfJuly.JPG';
import ellasaid from '../../assets/announcements/ellasaid.png';
import augthirdthurs from '../../assets/announcements/augthirdthurs.JPG';
import decemberAnnouncement from '../../assets/announcements/December.JPG';

import './home.css';

export default class index extends Component {
	constructor(props){
		super(props);
        configureAnchors({scrollDuration: 1000});
	}

	render() {
		return (
			<div>
        <Modal>
          <img className="" alt="" role="presentation" src={decemberAnnouncement} />
        </Modal>
				<Carousel scrollTo="products" slides={[
					carousel1,
          carousel2,
          carousel3 ]}>
          <div className="announcement-pic">
            {/*<img className="col-lg-12 col-lg-offset-0" alt="" role="presentation" src={augthirdthurs} />*/}
          </div>
        </Carousel>

				<ScrollableAnchor id="products">
			    <div className="text-center container galleryheader">
            <div className="col-sm-6">
    					<h2>Product Gallery</h2>
    					<h5>
                Check out our product gallery below
              </h5>
            </div>
            <div className="col-sm-6">
              <h3>Showroom Hours:</h3>
              <h4>
                Monday – Friday 8:00 – 5:00 <br />
                Thursday Eve until 7:00 <br />
                Saturday 10:00 – 3:00 <br />
              </h4>
              <h3>Warehouse Hours:</h3>
              <h4>
                Monday – Friday 7:30 – 4:30
              </h4>
            </div>
          </div>
        </ScrollableAnchor>

          <div className='fluid-container' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center', paddingBottom: 50}}>
            <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
              <div className='help-block' />
              <ProductSquare link='https://www.instagram.com/archbricktile/' image={instagram} text='Instagram'/>
              <div className='help-block' />
              <ProductSquare link='https://www.facebook.com/archbricktile/' image={Moose} text='Facebook'/>
              <div className='help-block' />
              <ProductSquare link='https://www.houzz.com/pro/archbrick/architectural-brick-and-tile-inc' image={houzz} text='Houzz'/>
            </div>

            <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751122/thumbs/residential-projects" image={residential} text='Residential Projects'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751112/thumbs/tile" image={tile} text='Tile'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751102/thumbs/commercial-projects" image={commercial} text='Commercial Projects'/>
            </div>

            <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751088/thumbs/exteriors" image={exterior} text='Exteriors'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751082/thumbs/masonry-brick" image={BrickProduct} text='Masonry / Brick'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751041/thumbs/natural-stone" image={stone} text='Natural Stone'/>
            </div>

            <div className='col-lg-11' style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', padding: 10}}>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751025/thumbs/bathrooms" image={bathroom} text='Bathroom'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/ideabooks/89751010/thumbs/wood" image={wood} text='Wood'/>
              <div className='help-block' />
              <ProductSquare link="https://www.houzz.com/projects/680712/kitchens" image={kitchen} text='Kitchen'/>
            </div>
          </div>

  		    <ScrollableAnchor id="about">
            <AboutParallax />
  		    </ScrollableAnchor>
		  </div>
		);
	}
}



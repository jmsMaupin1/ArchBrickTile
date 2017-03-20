import React, { Component } from 'react';
import {Link} from 'react-router';
import Carousel from '../../components/Carousel';
import GalleryHeader from '../../components/ProductGalleryHeader';
import AboutParallax from '../../components/AboutParallax';
import GallerySquare from '../../components/GallerySquare';
import ServiceSquare from '../../components/ServiceSquare';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';


import BrickProduct from '../../assets/brick-product.jpg';
import CarvedStone from '../../assets/carved-stone.jpg';
import ClayPavers from '../../assets/clay-pavers.jpg';
import MasonryAccents from '../../assets/masonry-accents.jpeg';
import './home.css';
export default class Home extends Component {
	constructor(props){
		super(props);
        configureAnchors({scrollDuration: 1000});
        this.state = {
          galleryShortList : [
            {
              image:BrickProduct,
              title:"Check out our bricks",
              subtext:"All the bricks",
            },
            {
              image:CarvedStone,
              title:"Check out our carved stone",
              subtext:"All the bricks",
            },
            {
              image:ClayPavers,
              title:"Check out our clay pavers",
              subtext:"All the bricks",
            },
            {
              image:MasonryAccents,
              title:"Check out our masonry accents",
              subtext:"All the bricks",
            }
          ],
          galleryFullList  : [],
          showFullList : false
        }
	}

  loadMore(){
    // TODO: load more gallery squares
    // maybe have a list of squares and only pull the first 8
    // when load more is clicked then use the entire array

    console.log('loadmore');
  }
	render() {
		return (
			<div className="home">
				<Carousel slides={[
    		"http://www.archbricktile.com/wp-content/gallery/living-spaces/1384_1-818x478.jpg",
    		"http://www.archbricktile.com/wp-content/gallery/living-spaces/2011-catalog_final_full-size-soft-copy_page_041.jpg",
    		"http://www.archbricktile.com/wp-content/gallery/living-spaces/living_horz_050.jpg"
        ]}/>
        <ScrollableAnchor id="services">
            <div className="services">
                <div className="heading-home">
                  <div className="text-center col-sm-8 col-sm-offset-2">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                  </div>
                </div>
                <div className="services-container container">
                  <ServiceSquare 
                      extraClasses="border-right"
                      icon={"fa-product-hunt"}
                      service={"Supply Products"}
                      subtext={"We supply products for commercial and residential projects."}
                  />

                  <ServiceSquare 
                      icon={"fa-product-hunt"}
                      service={"Supply Products"}
                      subtext={"We supply products for commercial and residential projects."}
                  />

                  <ServiceSquare 
                      extraClasses="border-left"
                      icon={"fa-product-hunt"}
                      service={"Supply Products"}
                      subtext={"We supply products for commercial and residential projects."}
                  />
                </div>
            </div>
        </ScrollableAnchor>

        <ScrollableAnchor id="about">
          <AboutParallax />
        </ScrollableAnchor>

        <ScrollableAnchor id="gallery">
          <div className="heading-home">
            <div className="text-center col-sm-8 col-sm-offset-2">
              <h2>Product Gallery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
            </div>
          </div>
        </ScrollableAnchor>
        {this.state.galleryShortList.map((square, i)=>{
          return <GallerySquare key={i} image={square.image} title={square.title} subtext={square.subtext}/>
        })}
            <div className="text-center col-sm-8 col-sm-offset-2">
              <div className="load-more">
                <a onClick={this.loadMore.bind(this)} className="btn-loadmore"><i className="fa fa-repeat"></i> Load More</a>
              </div>
            </div>
      </div>
		);
	}
}

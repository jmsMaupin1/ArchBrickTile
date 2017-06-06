import React, { Component } from 'react';
import SuppliersSquare from '../../components/SuppliersSquare';
import {Link} from 'react-router';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import './suppliers.css';


export default class Suppliers extends Component {
    constructor(props) {
		super(props);
		this.state = {
			suppliersList: [
				{
					image:"picture",
                    title:"AKDO",
					link: "http://www.akdo.com",
					subtext: "AKDO offers an incredible collection of natural stone tiles, slabs, mosaics and specialty stone in an unrivaled variety of colors and patterns. ",
				},
				{
					image:"picture",
                    title:"Adex USA",
					link: "http://www.adexusa.com",
					subtext: "LADEX USA has multiple finishes, colors, types and styles of products that will work in unison or stand alone.",
				},
				{
					image:"picture",
                    title:"Arto",
					link: "",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Artistic Tile",
					link: "http://www.artistictile.com",
					subtext: "Artistic Tile offers artisan tile, handcrafted stone, distinctive fittings and accessories for bath, kitchen and home.",
				},
				{
					image:"picture",
                    title:"Ceramica Vogue",
					link: "http://www.ceramicavogue.it/ceramic-frostproof-tiles-company.asp",
					subtext: "Ceramica Vogue products, which comprise a wide range of collections designed to create innovative furnishing solutions for both indoor and outdoor areas.",
				},
				{
					image:"picture",
                    title:"DuChateu",
					link: "http://duchateau.com/",
					subtext: "DuChateau manufactures antique reproduction hard-wax oil wood floors using artistic methods perfected by European craftsmen.",
				},
				{
					image:"picture",
                    title:"Landmark",
					link: "http://www.landmarkmetalcoat.com",
					subtext: "Create unique one-of-a-kind kitchen backsplashes using a variety of Landmark’s stone choices. All mosaics can be customized to meet your specified size and design.",
				},
				{
					image:"picture",
                    title:"Island Stone",
					link: "http://www.islandstone.com",
					subtext: "Product categories include multiple types of pebble tiles, glass tiles, mosaic tiles, random tiles and wall claddings with selection of signature stone and materials.",
				},
				{
					image:"picture",
                    title:"Provenza",
					link: "http://www.ceramicheprovenza.com/index.html#/home",
					subtext: "Provenza sets new frontiers in research and innovation, with products that represent the very best in Italian-made ceramic coverings.",
				},
				{
					image:"picture",
                    title:"Sonoma Tile",
					link: "http://www.sonomatilemakers.com",
					subtext: "Our rich textures, hand carved designs and fabulous color palette offer limitless design options. We create an absolutely amazing array of handcrafted tiles – from timeless ceramic borders to decorative stone accents.",
				},
				{
					image:"picture",
                    title:"Stonepeak Ceramics",
					link: "http://www.stonepeakceramics.com",
					subtext: "Nestled in the hills of Tennessee’s Smoky Mountains, is a company with a uniquely American character that honors the time-proven tradition of fine Italian porcelain ceramics. ",
				},
				{
					image:"picture",
                    title:"Latircrete",
					link:"http://www.laticrete.com",
					subtext: "LATICRETE is a world-wide manufacturer and marketer of installation systems for ceramic tile and stone used in residential, commercial and industrial applications. Architecturally specified and professionally endorsed by installers. ",
				},
				{
					image:"picture",
                    title:"Stonecraft",
					link:"http://www.stonecraft.com",
					subtext: "Our range of stones is replete with profile-specific character: jagged edge shapes, deep nooks, hand-chiseled surfaces, various stone sizes and water-worn smoothness.",
				},
				{
					image:"picture",
                    title:"Walker Zanger",
					link: "http://www.walkerzanger.com",
					subtext: "Walker Zanger combines traditional tile-making techniques with a modern sophistication that transcends any singular design style.",
				},
			],
			showButtonText:"Show More",
			numberShown: 6
		  }
	}


	changeAmountShown(){
      this.setState((state, props) => {
        return {
          numberShown: state.numberShown > 6 ? 6 : state.suppliersList.length,
          showButtonText: state.showButtonText==="Show Fewer"? "Show More" : "Show Fewer"
        }
      });
    }

    loadMore(){
      //TODO: change buton to loadFewer
      this.setState((state, props) => {
        return {
          numberShown: state.suppliersList.length,
          showButtonText: "Show Fewer"
        }
      });
    }

    loadFewer(){
      //TODO: change button to loadMore
      this.setState((state, props) => {
        return {
          numberShown: 8,
          showButtonText: "Show More"
        }
      });
    }

	render() {
		return (
			<div>
			<section id="blog">
				<div className="container">

					<ScrollableAnchor id="suppliers">
					  <div className="heading-home">
						<div className="text-center col-sm-8 col-sm-offset-2">
						  <h2>Suppliers</h2>
						  <p>We have combed the industry to find the best products for you. Our selectively chosen suppliers offer a range of products to ensure we have what you need to make your space impactful and memorable.</p>
						</div>
					  </div>
					</ScrollableAnchor>

					{this.state.suppliersList.map((square, i)=>{
					  if(i<this.state.numberShown)return <SuppliersSquare key={i} image={square.image} title={square.title} link={square.link} subtext={square.subtext}/>
					})}
					<div className="text-center col-sm-8 col-sm-offset-2 pad-bottom">
					  <div className="load-more">
						<a onClick={this.changeAmountShown.bind(this)} className="btn-loadmore"><i className="fa fa-repeat"></i> {this.state.showButtonText}</a>
					  </div>
					</div>
					</div>
			</section>
            </div>
		);
	}
}

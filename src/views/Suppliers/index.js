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
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Adex USA",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Arto",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Artistic Tile",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Ceramica",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"DuChateu",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Landmark",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Island Stone",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Provenza",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Sonoma Tile",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Stonepeak",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Latircrete",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Stonecraft",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				},
				{
					image:"picture",
                    title:"Walker Zanger",
					subtext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
					  if(i<this.state.numberShown)return <SuppliersSquare key={i} image={square.image} title={square.title} subtext={square.subtext}/>
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

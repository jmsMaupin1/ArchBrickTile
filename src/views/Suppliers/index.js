import React, { Component } from 'react';
import SuppliersSquare from '../../components/SuppliersSquare';
import Akdo from '../../assets/suppliers/AKDO1.2.jpg';
import Adex from '../../assets/suppliers/Adex1.1.png';
import Apavisa from '../../assets/suppliers/Apavisa.jpg';
import AlexTurco from '../../assets/suppliers/AlexTurco1.2.jpg';
import Arto from '../../assets/suppliers/ARTO1.1.jpg';
import Encore from '../../assets/suppliers/Encore1.1.jpg';
import Glazzio from '../../assets/suppliers/Glazzio1.1.jpg';
import IRISCeramic from '../../assets/suppliers/IRISCeramic1.1.jpg';
import ArtisticTile from '../../assets/suppliers/ArtisticTile1.2.jpg';
import MaterialsMarketing from '../../assets/suppliers/MaterialsMarketing1.1.jpg';
import Mediterranea from '../../assets/suppliers/Mediterranea1.1.jpg';
import Syzygy from '../../assets/suppliers/Syzygy1.1.jpg';
import MixedUp from '../../assets/suppliers/MixedUp1.1.jpg';
import Mosa from '../../assets/suppliers/Mosa1.1.jpg';
import MSInt from '../../assets/suppliers/MSInt1.1.jpg';
import Nichiha from '../../assets/suppliers/Nichiha1.1.jpg';
import Oceanside from '../../assets/suppliers/Oceanside1.1.jpg';
import Porcelanosa from '../../assets/suppliers/Porcelanosa1.1.jpg';
import Realstone from '../../assets/suppliers/Realstone1.1.jpg';
import Roca from '../../assets/suppliers/Roca1.1.jpg';
import Seneca from '../../assets/suppliers/Seneca1.1.jpg';
import Stonemar from '../../assets/suppliers/Stonemar1.1.jpg';
import DuChateau from '../../assets/suppliers/DuChateau1.1.jpg';
import IslandStone from '../../assets/suppliers/IslandStone1.1.jpg';
import Landmark from '../../assets/suppliers/Landmark1.1.gif';
import MarbleSystems from '../../assets/suppliers/MarbleSystems1.1.jpg';
import Provenza from '../../assets/suppliers/Provenza1.1.jpg';
import SonomaTile from '../../assets/suppliers/SonomaTile1.1.jpg';
import Stonepeak from '../../assets/suppliers/Stonepeak1.1.jpg';
import WalkerZanger from '../../assets/suppliers/WakerZanger1.1.jpg';

import './suppliers.css';


export default class Suppliers extends Component {
    constructor(props) {
		super(props);
		this.state = {
			suppliersList: [
                {
                    image:Adex,
                    title:"Adex USA",
                    link: "http://www.adexusa.com",
                },
				{
					image:Akdo,
                    title:"AKDO",
					link: "http://www.akdo.com",
				},
				{
					image:AlexTurco,
                    title:"Alex Turco",
					link: "http://www.alexturco.com/",
				},
				{
					image:Apavisa,
                    title:"Apavisa",
					link: "http://www.apavisa.com/en",
				},
				{
					image:Arto,
                    title:"ARTO",
					link: "http://www.artobrick.com/",
				},
				{
					image:ArtisticTile,
                    title:"Artistic Tile",
					link: "http://www.artistictile.com",
				},
				{
					image:DuChateau,
                    title:"DuChateu",
					link: "http://duchateau.com/",
				},
				{
					image:Encore,
                    title:"Encore Ceramics",
					link: "http://encoreceramics.com",
				},
				{
					image:Glazzio,
                    title:"Glazzio Tile",
					link: "http://www.glazziotiles.com",
				},
				{
					image:IRISCeramic,
                    title:"IRIS Ceramica",
					link: "http://www.irisus.com/collections/",
				},
				{
					image:IslandStone,
                    title:"Island Stone",
					link: "http://www.islandstone.com",
				},
				{
					image:Landmark,
                    title:"Landmark Ceramics",
					link: "http://www.landmarkceramics.com",
				},
				{
					image:MarbleSystems,
					title:"Marble Systems",
					link:"http://marblesystems.com/",
				},
				{
					image:MaterialsMarketing,
					title:"Materials Marketing",
					link:"http://www.mstoneandtile.com"
				},
				{
					image:Mediterranea,
					title:"Mediterranea",
					link:"http://www.mediterranea-usa.com/"
				},
				{
					image:MixedUp,
					title:"Mixed Up Mosaics",
					link:"http://www.mixed-upmosaics.com"
				},
				{
					image:Mosa,
					title:"MOSA Tile",
					link:"http://www.mosa.com/en-gb"
				},
				{
					image:MSInt,
					title:"MS International",
					link:"https://www.msistone.com"
				},
				{
					image:Nichiha,
					title:"Nichiha",
					link:"http://www.nichiha.com/residential/builders-club"
				},
				{
					image:Oceanside,
					title:"Oceanside Glass Tile",
					link:"http://glasstile.com/"
				},
				{
					image:Porcelanosa,
					title:"Porcelanosa",
					link:"http://www.porcelanosa-usa.com"
				},
				{
					image:Provenza,
                    title:"Provenza Hardwoods",
					link: "https://www.provenzafloors.com/Hardwood.aspx",
				},
				{
					image:Realstone,
                    title:"Realstone Systems",
					link: "http://www.realstonesystems.com",
				},
				{
					image:Roca,
                    title:"Roca",
					link: "http://www.roca.com",
				},
				{
					image:Seneca,
                    title:"Seneca Tile",
					link: "http://www.senecatiles.com",
				},
				{
					image:SonomaTile,
                    title:"Sonoma Tile",
					link: "http://www.sonomatilemakers.com",
				},
				{
					image:Stonemar,
                    title:"Stonemar",
					link: "http://www.stonemar.com",
				},
				{
					image:Stonepeak,
                    title:"Stonepeak Ceramics",
					link: "http://www.stonepeakceramics.com",
				},
				{
					image:Syzygy,
                    title:"Syzygy",
					link:"http://www.syzygytile.com/",
				},
				{
					image:WalkerZanger,
                    title:"Walker Zanger",
					link: "http://www.walkerzanger.com",
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
			<section id="blog" style={{paddingTop: "200px"}}>
				<div className="container">

				<div className="heading-home">
					<div className="text-center col-sm-8 col-sm-offset-2">
					  <h2>Suppliers</h2>
					  <p>We have combed the industry to find the best products for you. Our selectively chosen suppliers offer a range of products to ensure we have what you need to make your space impactful and memorable.</p>
					</div>
				</div>

				{this.state.suppliersList.map((square, i)=>{
					if(i<this.state.numberShown)return <SuppliersSquare key={i} image={square.image} title={square.title} link={square.link} subtext={square.subtext}/>
					else return null
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

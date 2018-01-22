import React, { Component } from 'react';
import './about.css';
import EmployeeSquare from '../../components/EmployeeSquare';
import Moose from '../../assets/Moose.jpg';
import Fam from '../../assets/team/abt-family.jpg';
import Todd from '../../assets/team/Todd-Howard.jpg';
import JenniferHobbs from '../../assets/team/Jennifer-Hobbs.jpg';
import WendyRichmond from '../../assets/team/Wendy-Richmond.jpg';
import JoanneHolman from '../../assets/team/Joanne-Holman.jpg';
import MaryAnnLucas from '../../assets/team/Mary-Ann-Lucas.jpg';
import AnnZimmerman from '../../assets/team/Ann-Zimmerman.jpg';
import TimOwen from '../../assets/team/Tim-Owen-test.jpg';
import PeterKerfoot from '../../assets/team/Pete-Kerfoot.jpg';
import MarkSawyer from '../../assets/team/Mark-Sawyer.jpg';
import JessicaLeavell from '../../assets/team/Jessica-Leavell.jpg';
import JulieKelch from '../../assets/team/Julie-Kelch.jpeg';
import KristenPetty from '../../assets/team/Kristen-Petty.jpg';
import RickZirkle from '../../assets/team/Rick-Zirkle.jpg';
import ScottNoel from '../../assets/team/Scott-Noel.jpg';
import KellyCheslyn from '../../assets/team/Kelly-Cheslyn.png';
import JacquelinWinter from '../../assets/team/Jacquelin-Winter.png';
import MaryBethSpaulding from '../../assets/team/Mary-Beth-Spaulding.jpg';
import RobynLeeman from '../../assets/team/Robyn-Leeman.jpg';
import MelodyWisely from '../../assets/team/MelodyWisely.jpg';


export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			residentialList: [
				{
					image: Moose,
					name: "Aspen (Moose)",
					title: "Mental Healthcare professional"
				},
				{
					image: JessicaLeavell,
					name: "Jessica Leavell",
					title: "Purchasing Agent/Customer Service"
				},
				{
					image: KristenPetty,
					name: "Kristen Petty",
					title: "Showroom Merchandiser / Customer Service"
				}
			],
			residentialList1: [
				{
					image: JenniferHobbs,
					name: 'Jennifer Hobbs',
					title: 'Residential Designer'
				},
				{
					image: JoanneHolman,
					name: 'Joanne Holman',
					title: 'Residential Designer'
				},
				{
					image: WendyRichmond,
					name: 'Wendy Richmond',
					title: 'Residential Designer'
				},
				{
					image: MelodyWisely,
					name: 'Melody Wisely',
					title: 'Residential Designer'
				}
			],
			commercialList: [
				{
					image: AnnZimmerman,
					name: "Ann Zimmerman",
					title: "Commercial Tile / Customer Service"
				},

				{
					image: MaryAnnLucas,
					name: "Mary Ann Lucas",
					title: "Commercial Tile Designer"
				},

				{
					image: TimOwen,
					name: 'Tim Owen',
					title: 'Masony & Stone sales'
				},

			],
			commercialList1: [
				{
					image: PeterKerfoot,
					name: 'Peter Kerfoot',
					title: 'Masony & Stone sales'
				},

				{
					image: Todd,
					name: 'Todd Howard',
					title: 'Masony & Stone sales'
				},



				{
					image: MarkSawyer,
					name: 'Mark Sawyer',
					title: 'Masony & Stone sales'
				}
			],
			showButtonText:"Show More",
			numberShown: 6
		}
	}

	renderSquares(key) {
		var list = this.state[key];
		var squares = [];
		list.forEach((square, i) => {
			squares.push(<EmployeeSquare
				key={i}
				image={square.image}
				name={square.name}
				title={square.title}
			/>)
		})

		return squares;
	}


	render() {
		return (
			<section id="team" style={{paddingTop: "200px"}}>
				<div className="container">
					<div className="row aboutTeam">
						<div className="heading text-center col-sm-9 col-sm-offset-2">
						<p>We are proud to have evolved from a brick
							distributorship in 1967 to a specialty building
							materials center specializing in foreign and
							domestic materials to complete your space.
							With my sister, Kelly, my daughter, Robyn,
							by my side, we are devoted to introducing unique
							and innovative materials to our marketplace and
							providing our clients, commercial and
							residential, the means to achieve their design
							solutions and dreams. I am proud of my most
							talented staff of designers. They are handpicked
							to give you, our cherished partners, the best possible
							service and award winning design concepts. My designers
							best sales tool is our exceptional showroom. I, personally,
							invite you to be a guest in our showroom located off East
							106th Street exit from I69 and experience the best that
							valuable talent, energy, and education have to offer.
							<br/><br/>
							<img src={Fam} />
							<br /> <br />- Jacquelin Winter<em> President</em> ,
							Architectural Brick and Tile
						</p>
					</div>
				</div>

				<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
					<h1>Showroom</h1>
				</div>

				<div style={{width: '100%',flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around'}}>
					{this.renderSquares('residentialList')}
				</div>
					{this.renderSquares('residentialList1')}

				<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
					<h1>Commercial / Masonry</h1>
				</div>

				<div style={{width: '100%',flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around'}}>
					{this.renderSquares('commercialList')}
				</div>
				<div style={{width: '100%',flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around'}}>
					{this.renderSquares('commercialList1')}
				</div>	

				</div>
			</section>
		);
	}
}

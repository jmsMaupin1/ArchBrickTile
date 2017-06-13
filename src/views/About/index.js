import React, { Component } from 'react';
import './about.css';
import EmployeeSquare from '../../components/EmployeeSquare';
import LaurenRiley from '../../assets/team/Lauren-Riley1.1.png';
import JenniferHobbs from '../../assets/team/Jennifer-Hobbs1.1.jpg';
import WendyRichmond from '../../assets/team/Wendy-Richmond1.1.jpg';
import JoanneHolman from '../../assets/team/Joanne-Holman1.1.jpg';
import MaryAnnLucas from '../../assets/team/Mary-Ann-Lucas.jpg';
import AnnZimmerman from '../../assets/team/Ann-Zimmerman.jpg';
import TimOwen from '../../assets/team/Tim-Owen1.1.jpg';
import PeterKerfoot from '../../assets/team/Pete-Kerfoot.jpg';
import MarkSawyer from '../../assets/team/Mark-Sawyer1.1.jpg';
import JessicaLeavell from '../../assets/team/Jessica-Leavell1.1.jpg';
import JulieKelch from '../../assets/team/Julie-Kelch1.1.jpg';
import KristenPetty from '../../assets/team/Kristen-Petty.jpg';
import RickZirkle from '../../assets/team/Rick-Zirkle.jpg';
import ScottNoel from '../../assets/team/Scott-Noel.jpg';
import KellyCheslyn from '../../assets/team/Kelly-Cheslyn.png';
import JacquelinWinter from '../../assets/team/Jacquelin-Winter.png';
import MaryBethSpaulding from '../../assets/team/Mary-Beth-Spaulding.jpg';
import RobynLeeman from '../../assets/team/Robyn-Leeman.jpg';


export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			residentialList: [
				{
					image: JenniferHobbs,
					name: "Jennifer Hobbs",
					title: "Residential Sales"
				},
				{
					image: LaurenRiley,
					name: "Lauren Riley",
					title: "Residential Sales"
				},
				{
					image: WendyRichmond,
					name: "Wendy Richmond",
					title: "Residential Sales"
				},
				{
					image: JoanneHolman,
					name: "Joanne Holman",
					title: "Residential Sales"
				},
			],
			commercialList: [
				{
					image: MaryAnnLucas,
					name: "Mary Ann Lucas",
					title: "Commercial Sales"
				},
				{
					image: AnnZimmerman,
					name: "Ann Zimmerman",
					title: "Inside Commercial Sales"
				},
				{
					image: TimOwen,
					name: "Tim Owen",
					title: "Masonry & Stone Sales"
				},
				{
					image: MarkSawyer,
					name: "Mark Sawyer",
					title: "Masonry & Stone Sales"
				},
				{
					image: PeterKerfoot,
					name: "Peter Kerfoot",
					title: "Masonry & Stone Sales"
				},
			],
			supportList: [
				{
					image: JessicaLeavell,
					name: "Jessica Leavell",
					title: "Customer Service Purchasing Agent"
				},
				{
					image: JulieKelch,
					name: "Julie Kelch",
					title: "Coordinator"
				},
				{
					image: KristenPetty,
					name: "Kristen Petty",
					title: "Showroom Assistant"
				},
				{
					image: RickZirkle,
					name: "Rick Zirkle",
					title: "Warehouse Customer Service"
				},
				{
					image: ScottNoel,
					name: "Scott Noel",
					title: "Warehouse Customer Service"
				},
			],
			adminstrationList: [
				{
					image: JacquelinWinter,
					name: "Jacquelin Winter",
					title: "President"
				},
				{
					image: KellyCheslyn,
					name: "Kelly Cheslyn",
					title: "Vice President"
				},
				{
					image: RobynLeeman,
					name: "Robyn Leeman",
					title: "Controller"
				},
				{
					image: MaryBethSpaulding,
					name: "Mary Beth Spaulding",
					title: "Director of Operations"
				},
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
			<div>

			<section id="team" style={{paddingTop: "200px"}}>
			<div className="container">
				<div className="row aboutTeam">
					<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
						<h2>The Team</h2>
						<p>Architectural Brick & Tile has almost 50 years of experience making dreams come true. We offer personal service, boundless knowledge and exclusive product lines. This is not your ordinary Tile Dealer. We began in the brick business and have not forgotten our roots, while expanding our product lines to include manufactured stone products, thin brick and hardscapes.</p>
					</div>
                    <div className="text-center col-sm-4 col-sm-offset-3 wow fadeInUp">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yKLstVY15Yo" frameborder="0" allowfullscreen></iframe>
                    </div>
				</div>

			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Residential Sales Team</h3>
			</div>
			{this.renderSquares('residentialList')}

			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Commercial Sales Team</h3>
			</div>
			{this.renderSquares('commercialList')}

			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Customer Support</h3>
			</div>
			{this.renderSquares('supportList')}

			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Administration</h3>
			</div>
			{this.renderSquares('adminstrationList')}
			</div>
			</section>

            </div>
		);
	}
}

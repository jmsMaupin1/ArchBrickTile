import React, { Component } from 'react';
import './about.css';
import EmployeeSquare from '../../components/EmployeeSquare';
import LaurenRiley from '../../assets/team/Lauren-Riley.png';
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


export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			residentialList: [
				{
					image: JenniferHobbs,
					name: "Jennifer Hobbs",
					title: "Residential Designer"
				},
				{
					image: LaurenRiley,
					name: "Lauren Riley",
					title: "Residential Designer"
				},
				{
					image: WendyRichmond,
					name: "Wendy Richmond",
					title: "Residential Designer"
				},
				{
					image: JoanneHolman,
					name: "Joanne Holman",
					title: "Residential Designer"
				},
				{
						image: MaryAnnLucas,
						name: "Mary Ann Lucas",
						title: "Commercial Tile Designer"
					},
					{
							image: AnnZimmerman,
							name: "Ann Zimmerman",
							title: "Commercial Tile / Customer Service"
						},
						{
							image: JessicaLeavell,
							name: "Jessica Leavell",
							title: "Purchasing Agent / Customer Service "
						},
						{
							image: KristenPetty,
							name: "Kristen Petty",
							title: "Showroom Merchandiser / Customer Service"
						},
			],
			commercialList: [
				{
					image: JulieKelch,
					name: "Julie Kelch",
					title: "Masonry Coordinator / Customer Service"
				},
				{
					image: PeterKerfoot,
					name: "Peter Kerfoot",
					title: "Masonry & Stone Sales"
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

			],
			supportList: [



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
						{/* <h2>The Team</h2> */}
						<p>We are proud to have evolved from a brick distributorship in 1967 to a specialty building materials center specializing in foreign and domestic materials to complete your space. With my sister, Kelly, and my daughter, Robyn, by my side, we are devoted to introducing unique and innovative materials to our marketplace and providing our clients, both commercial and residential, the means to achieve their design solutions and dreams. I am proud of my most talented staff of designers. They are handpicked to give you, our cherished partners, the best possible service and award winning design concepts. My designers best sales tool is our exceptional showroom. I, personally, invite you to be a guest in our showroom located off East106th Street exit from I69 and experience the best that valuable talent, energy, and education have to offer. <br /> <br />- Jacquelin Winter<em> President</em> , Architectural Brick and Tile
</p>
					</div>
                    {/* <div className="text-center col-sm-4 col-sm-offset-3 wow fadeInUp">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yKLstVY15Yo" frameborder="0" allowfullscreen></iframe>
                    </div> */}
				</div>
			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h1>Tile</h1>
			</div>
			{this.renderSquares('residentialList')}

			<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h1>Masonry</h1>
			</div>
			{this.renderSquares('commercialList')}

			{/* <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Customer Support</h3>
			</div>
			{this.renderSquares('supportList')} */}

			{/* <div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
				<h3>Administration</h3>
			</div>
			{this.renderSquares('adminstrationList')} */}
			</div>
			</section>

            </div>
		);
	}
}

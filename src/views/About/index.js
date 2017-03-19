import React, { Component } from 'react';
import './about.css';

import ClayPavers from '../../assets/clay-pavers.jpg';


export default class About extends Component {
	render() {
		return (
			<div>

			<section id="team">
			<div className="container">
				<div className="row aboutTeam">
					<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
						<h2>The Team</h2>
						<p>Architectural Brick & Tile has almost 50 years of experience making dreams come true. We offer personal service, boundless knowledge and exclusive product lines. This is not your ordinary Tile Dealer. We began in the brick business and have not forgotten our roots, while expanding our product lines to include manufactured stone products, thin brick and hardscapes.</p>
					</div>
				</div>
			<div className="team-members">
				<div className="row">
					<div className="col-sm-3">
						<div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="300ms">
							<div className="member-image">
								<img className="img-responsive" src={"http://www.archbricktile.com/wp-content/uploads/2012/03/jaquelin-150x150.png"} alt="" />
							</div>
							<div className="member-info">
								<h3>Jacquelin Winters</h3>
								<h4>President</h4>
							</div>
							<div className="social-icons">
								<ul>
									<li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
									<li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="500ms">
							<div className="member-image">
								<img className="img-responsive" src={"http://www.archbricktile.com/wp-content/uploads/2012/03/kelly-150x150.png"} alt="" />
							</div>
							<div className="member-info">
								<h3>Kelly Cheslyn</h3>
								<h4>Vice President</h4>
							</div>
							<div className="social-icons">
								<ul>
									<li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
									<li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="800ms">
							<div className="member-image">
								<img className="img-responsive" src={"http://www.archbricktile.com/wp-content/uploads/2012/03/Robyn2-150x150.jpg"} alt="" />
							</div>
							<div className="member-info">
								<h3>Robyn Leeman</h3>
								<h4>Controller</h4>
							</div>
							<div className="social-icons">
								<ul>
									<li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
									<li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="team-member wow flipInY" data-wow-duration="1000ms" data-wow-delay="1100ms">
							<div className="member-image">
								<img className="img-responsive" src={"http://www.archbricktile.com/wp-content/uploads/2012/03/mb.jpg"} alt="" />
							</div>
							<div className="member-info">
								<h3>Mary Beth Spaulding</h3>
								<h4>Director of Operations</h4>
							</div>
							<div className="social-icons">
								<ul>
									<li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
									<li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			</section>




            </div>
		);
	}
}

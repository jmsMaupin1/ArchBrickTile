import React, { Component } from 'react';
import SuppliersSquare from '../../components/SuppliersSquare';
import {Link} from 'react-router';

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
          numberShown: state.numberShown > 6 ? 6 : state.supplierList.length,
          showButtonText: state.showButtonText==="Show Fewer"? "Show More" : "Show Fewer"
        }
      });
    }

    loadMore(){
      //TODO: change buton to loadFewer
      this.setState((state, props) => {
        return {
          numberShown: state.supplierList.length,
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
					<div className="row">
  						<div className="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1200ms" data-wow-delay="300ms">
							<h2>Suppliers</h2>
							<p>We have combed the industry to find the best products for you. Our selectively chosen suppliers offer a range of products to ensure we have what you need to make your space impactful and memorable.</p>
  						</div>
					</div>
				<div className="blog-posts">
				  <div className="row">
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
					  <div className="post-thumb">
						<a href="#"><img className="img-responsive" src="images/blog/1.jpg" alt="" /></a>
						<div className="post-meta">
						  <span><i className="fa fa-comments-o"></i> 3 Comments</span>
						  <span><i className="fa fa-heart"></i> 0 Likes</span>
						</div>
						<div className="post-icon">
						  <i className="fa fa-pencil"></i>
						</div>
					  </div>
					  <div className="entry-header">
						<h3><a href="#">Adex USA</a></h3>
						{/* <span className="date">June 26, 2014</span> */}
						{/* <span className="cetagory">in <strong>Photography</strong></span> */}
					  </div>
					  <div className="entry-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  </div>
					</div>
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
					  <div className="post-thumb">
						<div id="post-carousel"  className="carousel slide" data-ride="carousel">
						  <ol className="carousel-indicators">
							<li data-target="#post-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#post-carousel" data-slide-to="1"></li>
							<li data-target="#post-carousel" data-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner">
							<div className="item active">
							  <a href="#"><img className="img-responsive" src="images/blog/2.jpg" alt="" /></a>
							</div>
							<div className="item">
							  <a href="#"><img className="img-responsive" src="images/blog/1.jpg" alt="" /></a>
							</div>
							<div className="item">
							  <a href="#"><img className="img-responsive" src="images/blog/3.jpg" alt="" /></a>
							</div>
						  </div>
						  <a className="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
						  <a className="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
						</div>
						<div className="post-meta">
						  <span><i className="fa fa-comments-o"></i> 3 Comments</span>
						  <span><i className="fa fa-heart"></i> 0 Likes</span>
						</div>
						<div className="post-icon">
						  <i className="fa fa-picture-o"></i>
						</div>
					  </div>
					  <div className="entry-header">
						<h3><a href="#">Arto</a></h3>
						{/* <span className="date">June 26, 2014</span> */}
						{/* <span className="cetagory">in <strong>Photography</strong></span> */}
					  </div>
					  <div className="entry-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  </div>
					</div>
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
					  <div className="post-thumb">
							<a href="#"><img className="img-responsive" src="images/blog/3.jpg" alt="" /></a>
						<div className="post-meta">
						  <span><i className="fa fa-comments-o"></i> 3 Comments</span>
						  <span><i className="fa fa-heart"></i> 0 Likes</span>
						</div>
						<div className="post-icon">
						  <i className="fa fa-video-camera"></i>
						</div>
					  </div>
							<div className="entry-header">
								<h3><a href="#">AKDO</a></h3>
								{/* <span className="date">June 26, 2014</span> */}
								{/* <span className="cetagory">in <strong>Photography</strong></span> */}
							 </div>
							<div className="entry-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  		</div>
						</div>
				  	</div>
				  <div className="row">
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="400ms">
					  <div className="post-thumb">
						<a href="#"><img className="img-responsive" src="images/blog/1.jpg" alt="" /></a>
						<div className="post-meta">
						  {/* <span><i className="fa fa-comments-o"></i> 3 Comments</span> */}
						  {/* <span><i className="fa fa-heart"></i> 0 Likes</span> */}
						</div>
						<div className="post-icon">
						  <i className="fa fa-pencil"></i>
						</div>
					  </div>
					  <div className="entry-header">
						<h3><a href="#">DuChateu</a></h3>
						{/* <span className="date">June 26, 2014</span> */}
						{/* <span className="cetagory">in <strong>Photography</strong></span> */}
					  </div>
					  <div className="entry-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  </div>
					</div>
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
					  <div className="post-thumb">
						<div id="post-carousel"  className="carousel slide" data-ride="carousel">
						  <ol className="carousel-indicators">
							<li data-target="#post-carousel" data-slide-to="0" className="active"></li>
							<li data-target="#post-carousel" data-slide-to="1"></li>
							<li data-target="#post-carousel" data-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner">
							<div className="item active">
							  <a href="#"><img className="img-responsive" src="images/blog/2.jpg" alt="" /></a>
							</div>
							<div className="item">
							  <a href="#"><img className="img-responsive" src="images/blog/1.jpg" alt="" /></a>
							</div>
							<div className="item">
							  <a href="#"><img className="img-responsive" src="images/blog/3.jpg" alt="" /></a>
							</div>
						  </div>
						  <a className="blog-left-control" href="#post-carousel" role="button" data-slide="prev"><i className="fa fa-angle-left"></i></a>
						  <a className="blog-right-control" href="#post-carousel" role="button" data-slide="next"><i className="fa fa-angle-right"></i></a>
						</div>
						<div className="post-meta">
						  {/* <span><i className="fa fa-comments-o"></i> 3 Comments</span> */}
						  {/* <span><i className="fa fa-heart"></i> 0 Likes</span> */}
						</div>
						<div className="post-icon">
						  <i className="fa fa-picture-o"></i>
						</div>
					  </div>
					  <div className="entry-header">
						<h3><a href="#">Ceramica</a></h3>
						{/* <span className="date">June 26, 2014</span> */}
						{/* <span className="cetagory">in <strong>Photography</strong></span> */}
					  </div>
					  <div className="entry-content">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  </div>
					</div>
					<div className="col-sm-4 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="800ms">
					  <div className="post-thumb">
						<a href="#"><img className="img-responsive" src="images/blog/3.jpg" alt="" /></a>
						<div className="post-meta">
						  {/* <span><i className="fa fa-comments-o"></i> 3 Comments</span> */}
						  {/* <span><i className="fa fa-heart"></i> 0 Likes</span> */}
						</div>
						<div className="post-icon">
						  <i className="fa fa-video-camera"></i>
						</div>
					  </div>
							<div className="entry-header">
								<h3><a href="#">Landmark</a></h3>
								{/* <span className="date">June 26, 2014</span> */}
								{/* <span className="cetagory">in <strong>Photography</strong></span> */}
							 </div>
							<div className="entry-content">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					  		</div>
						</div>
				  	</div>
					  <div className="load-more wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
						<a href="#" className="btn-loadmore"><i className="fa fa-repeat"></i> Load More</a>
					  </div>
					</div>
				</div>
			</section>
			<section>
				<div>
					<h1>Hello World</h1>
					{/* {this.state.supplerList.map((square, i)=>{
				          if(i<this.state.numberShown)return <SuppliersSquare key={i} image={square.image} title={square.title} subtext={square.subtext}/>
				        })} */}

				</div>
			</section>


            </div>
		);
	}
}

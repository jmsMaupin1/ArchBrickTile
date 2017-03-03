import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel
        	slides={[
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/1384_1-818x478.jpg",
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/2011-catalog_final_full-size-soft-copy_page_041.jpg",
        		"http://www.archbricktile.com/wp-content/gallery/living-spaces/living_horz_050.jpg"
        	]}
        />
      </div>
    );
  }
}

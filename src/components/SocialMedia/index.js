import React, { Component } from 'react';


export default class SocialMedia extends Component {
  render() {
    return (
      <div className='text-center'>
          <div className="fb-page" 
               data-href="https://www.facebook.com/archbricktile/" 
               data-tabs="timeline" data-width="100000000000000px" 
               data-small-header="false" 
               data-adapt-container-width="false" 
               data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/archbricktile/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/archbricktile/">Architectural Brick and Tile Facebook Page</a>
            </blockquote>
          </div>
      </div>
    );
  }
}

import React, { Component } from 'react';


export default class index extends Component {
  render() {
    return ( <div>
      <div className="col-sm-12 centered" style={{
                    paddingTop: "80px",
                    paddingBottom: "80px",
                                   paddingLeft: "40px",
                                   paddingRight: "40px"
               }}>
               <div className="fb-page" data-href="https://www.facebook.com/archbricktile/" data-tabs="timeline" data-width="400" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/archbricktile/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/archbricktile/">Architectural Brick and Tile</a></blockquote></div>

               </div>
               <div className="col-sm-6">
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/yKLstVY15Yo" frameborder="0" allowfullscreen></iframe> */}

               </div>
             </div>
    );
  }
}

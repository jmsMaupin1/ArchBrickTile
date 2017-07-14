import React, { Component } from 'react';
import Radium from 'radium';

var style = {
	square: {
		padding: 0,
        position: 'relative', 
        border: '1px solid black', 
        maxHeight: 350, 
        overflow: 'hidden'
	},

	overlay: {
		position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.7)',
        color: 'white',
        textAlign: 'center',
        lineHeight: 4,
        fontSize: 25,
        transition: 'all 0.5s ease-in-out'
	},

  raised: {
    height: 150
  },

  lowered: {
    height: 100
  }
}

class ProductSquare extends Component {

  constructor(props) {
    super(props);
    this.state = {
      raise: false
    }
  }

  onMouserEnter() {
    console.log('hover')
    this.setState((state, props) => {
      return {
        raise: true
      }
    });
  }

  onMouseLeave() {
    this.setState((state, props) => {
      return {
        raise: false
      }
    });
  }
  
	render() {
		return (
			<a 
      href={this.props.link} 
      className='col-lg-3' 
      style={style.square}
      onMouseEnter={this.onMouserEnter.bind(this)}
      onMouseLeave={this.onMouseLeave.bind(this)}>
        <div>
          <div style={[style.overlay, this.state.raise?style.raised : style.lowered]}>
          	{this.props.text}
          </div>
          <img alt='' src={this.props.image} className='img-responsive text-center'/>
        </div>
      </a> 
		);
	}
}

export default Radium(ProductSquare)
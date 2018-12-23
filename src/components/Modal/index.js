import React, { Component } from 'react'
import './modal.css';

export default class index extends Component {
  constructor(props) {
      super(props);

      this.state = {
          display: 'flex'
      }

      this.changeDisplay = this.changeDisplay.bind(this);
  }

  changeDisplay(e) {
      this.setState({
          display: 'none'
      })
  }

  handleClick(e) {
      e.stopPropagation();
  }

  render() {
    return (
      <div style={{display: this.state.display}} className="modal-wrapper" onClick={this.changeDisplay}>
        <div className="modal-content" onClick={this.handleClick}>
            {this.props.children}
        </div>     
      </div>
    )
  }
}

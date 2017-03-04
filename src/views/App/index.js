import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/*TODO: add Header and footer*/}
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    );
  }
}

import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render(){
    let styles = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: this.props.color
    }

    return(
      <div className='Box' style={styles}></div>
    )
  }
}

export default Box


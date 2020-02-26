import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.removeBox(this.props.id)
  }

  render(){
    let styles = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      backgroundColor: this.props.color
    }

    return(
      <div className='Box' style={styles} onClick={this.handleClick}></div>
    )
  }
}

export default Box


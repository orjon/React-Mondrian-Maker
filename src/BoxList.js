import React, { Component } from 'react';
import Box from './Box';
import './BoxList.css';

class BoxList extends Component {
    constructor(props){
    super(props)
    this.state ={
      boxes: [
        {height: 100, width:50, color: 'yellow'},
        {height: 120, width:150, color: 'blue'},
        {height: 80, width:100, color: 'red'},
        {height: 110, width:125, color: 'green'}
      ]
    }
  }

  showBoxes(){
    let boxList =[]
    for (let i=0; i<this.state.boxes.length; i++) {
      boxList.push(<Box
        height={this.state.boxes[i].height}
        width={this.state.boxes[i].width}
        color={this.state.boxes[i].color} />)
    }
    return boxList
  }


  render(){
    return(
      <div className='BoxList'>
        {this.showBoxes()}
      </div>
    )
  }
}

export default BoxList

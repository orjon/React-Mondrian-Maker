import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';
import {v4 as uuid} from 'uuid'

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
    return(
      this.state.boxes.map(box => (
        <Box
        height={box.height}
        width={box.width}
        color={box.color}
        key={uuid()} />
      ))
    )
  }

  addBox(box){
    let newBox = {...box, id: uuid()};
    console.log(newBox);
    this.setState(state => (
      {boxes: [...this.state.boxes, newBox]}
    ))
  }


  render(){
    return(
      <div>
        <NewBoxForm addBox={this.addBox}/>
        <div className='BoxList'>
          {this.showBoxes()}
        </div>
      </div>

    )
  }
}

export default BoxList

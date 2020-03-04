import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import './BoxList.css';
import {v4 as uuid} from 'uuid'

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state ={
      boxes: [
        {height: 100, width:50, color: 'yellow', id: uuid()},
        {height: 120, width:150, color: 'blue', id: uuid()},
        {height: 80, width:100, color: 'red', id: uuid()},
        {height: 110, width:125, color: 'green', id: uuid()}
      ]
    };
    this.addBox = this.addBox.bind(this);
    // this.removeBox = this.removeBox.bind(this);
  }

  showBoxes(){
    return(
      this.state.boxes.map(box => (
        <Box
        height={box.height}
        width={box.width}
        color={box.color}
        key={box.id} 
        id={box.id}
        removeBox={() => this.removeBox(box.id)}/>
      ))
    )
  }

  addBox(box){
    let newBox = {...box, id: uuid()};
    // console.log(newBox);
    // console.log(this.state.boxes);
    this.setState(state => (
      {boxes: [...this.state.boxes, newBox]}
    ))
  }

  removeBox(boxId){
    this.setState({
      boxes: [...this.state.boxes.filter(box => box.id !== boxId)]
    })
  }


  render(){
    return(
      <div className='MainContainer'>
        <NewBoxForm addBox={this.addBox}/>
        <div className='BoxList'>
          {this.showBoxes()}
        </div>
      </div>

    )
  }
}

export default BoxList

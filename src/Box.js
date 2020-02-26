import React, { Component } from 'react';

class Box extends Component {
  // constructor(props){
  //   super(props)
  //   this.state ={

  //   }
  // }
  render(){
    let styles = {
      height: this.props.height,
      width: this.props.width,
      backgroundColor: this.props.color
    }

    return(
      <div className='Box' style={styles}></div>
    )
  }
}

export default Box


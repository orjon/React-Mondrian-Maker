import React, { Component } from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state={
      height: '',
      width: '',
      color: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  handleInput(e){
    this.setState({
    [e.target.name] : e.target.value
    })
  }



  handleSubmit(e){
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: '',
      width: '',
      color: '',
    });
  }



  handleReset(){
    this.setState({
      height: '',
      width: '',
      color: '',
    });
  }

  handleRandom(e){
    let randomWidth=(Math.floor(Math.random()*75)+75);
    let randomHeight=(Math.floor(Math.random()*75)+75);
    let randomColor=`rgb(${((Math.floor(Math.random()*255)))},${((Math.floor(Math.random()*255)))},${((Math.floor(Math.random()*255)))})`;
    this.setState({
      height: randomWidth,
      width: randomHeight,
      color: randomColor,
    })
  }

  render(){
    return(
      <div className='NewBoxForm'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label htmlFor='width'>Width </label>
            <input
              type='number'
              id='width'
              name='width'
              value={this.state.width}
              onChange={this.handleInput}>
            </input>
          </div>
          <div className='form-row'>
            <label htmlFor='height'>Height </label>
            <input
              type='number'
              id='height'
              name='height'
              value={this.state.height}
              onChange={this.handleInput}>
            </input>
          </div>

          <div className='form-row'>
            <label htmlFor='color'>Color </label>
            <input
              type='text'
              id='color'
              name='color'
              value={this.state.color}
              onChange={this.handleInput}>
            </input>
          </div>

          <div className='form-row last'>
              <button className='reset' type='reset' onClick={this.handleReset} id='button-reset'>Reset</button>
              <button className='random' id='button-random' onClick={this.handleRandom} >Random</button>
              <button className='submit' type='submit' id='button-add' >Add box</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewBoxForm

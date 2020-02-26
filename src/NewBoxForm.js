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
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render(){
    return(
      <div className='NewboxForm'>
        New Box
        <form
          onSubmit={this.handleSubmit}>

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
              <button className='reset' type='reset' onClick={this.handleReset} id='button-sliceReset'>Reset</button>
              <button className='submit' id='button-slice'>Add item</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewBoxForm

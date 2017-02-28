import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <input type='text'
          className='user-input'
          placeholder='City, State'
          value={this.props.location}
          onChange={(e) => this.props.handleChange(e)}/>
      </div>
    );
  }
}

export default Input;

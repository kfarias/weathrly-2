import React, { Component } from 'react';


class SubmitInput extends Component {
  render() {
    return (
      <div>
        <input type='submit'
          className='submit-btn'
          disabled={this.props.disableInput}
          onClick={(e) => this.props.handleClick(e)}/>
      </div>
    );
  }
}





export default SubmitInput;

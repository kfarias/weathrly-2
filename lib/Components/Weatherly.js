import React, { Component } from 'react';
import WeatherCards from './WeatherCards';
import Input from './Input';
import SubmitInput from './SubmitInput';
import $ from 'jquery';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    if (location) {
      $.get(this.props.source + location + '.json').then((data) => {
        this.setState({ weather: data });
      });
    }
  }

  setsLocation(e) {
    this.setState({ location: e.target.value });
  }

  submitLocation(e) {
    e.preventDefault();
    localStorage.setItem('location', this.state.location);
    this.componentDidMount();
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Weatherly</h1>
          <p aria-label='welcome-message'className='welcome-message'>Welcome! Please Enter your City and State.</p>
          <div className='input-field'>
            <Input location={this.state.location}
              handleChange={this.setsLocation.bind(this)}/>
            <SubmitInput handleClick={this.submitLocation.bind(this)}
                         disableInput={!this.state.location}/>
            </div>
            <WeatherCards weather={this.state.weather}/>
          </section>
        );
  }
}

import React, { Component } from 'react';
import WeatherCards from './WeatherCards';
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

  submitLocation(e) {
    e.preventDefault();
    localStorage.setItem('location', this.state.location);
    this.componentDidMount();
  }

  render() {
    return (
      <section>
        <input type='text'
               placeholder='Please Enter City and State'
               value={this.state.location}
               onChange={(e) => this.setState({ location: e.target.value })}/>
        <input type='submit'
               disabled={!this.state.location}
               onClick={this.submitLocation.bind(this)}/>
      <div>All of the Weather</div>
      <WeatherCards weather={this.state.weather}/>
      </section>
    );
  }
}

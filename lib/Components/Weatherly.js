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
    // check if there is a location in local storage
    // if yes make API call
    // set this state
    // else do nothing
  }

  submitLocation(e) {
    e.preventDefault();
    localStorage.setItem('location', this.state.location);
    $.get(this.props.source + this.state.location + '.json').then((data) => {
      this.setState({ weather: data });
    });
  }

  render() {
    return (
      <section>
        <input type='text'
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

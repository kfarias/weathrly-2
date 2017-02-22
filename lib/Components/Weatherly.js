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

  submitLocation(e) {
    e.preventDefault();
    $.get(this.props.source + this.state.location + '.json').then((data) => {
      console.log(data)
    });
  }

  render() {
    return (
      <section>
        <input type='text'
               value={this.state.lacation}
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

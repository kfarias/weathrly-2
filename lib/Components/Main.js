import React, { Component } from 'react';
import Weatherly from './Weatherly';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Weatherly source='https://api.wunderground.com/api/200e09fe3edf7c68/history/forecast/geolookup/hourly/conditions/forecast10day/q/'/>
      </div>
    );
  }
}

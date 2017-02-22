import React, { Component } from 'react';
import Weatherly from './Weatherly';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Weatherly source='http://api.wunderground.com/api/200e09fe3edf7c68/forecast/geolookup/hourly/conditions/q/CO/'/>
      </div>
    );
  }
}

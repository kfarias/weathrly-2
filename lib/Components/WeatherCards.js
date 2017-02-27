import React, { Component } from 'react';
import Card from './Card';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div>

      </div>
    );
  } else {

    return (
      <div>
        <Card currentWeather={weather}/>
      </div>
    );
  }
};
export default WeatherCards;

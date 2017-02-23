import React, { Component } from 'react';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div>
        Please enter a Location.
      </div>
    );
  } else {

    return (
      <div>
        <p>Location: {weather.location.city}</p>
        <p>Feels Like: {weather.current_observation.feelslike_f} °F</p>
        <p>Weather: {weather.current_observation.weather}</p>
      </div>
    );
  }
};
export default WeatherCards;

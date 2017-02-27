import React, { Component } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div>

      </div>
    );
  } else {

    return (
      <div>
        <CurrentWeatherCard currentWeather={weather}/>
        <HourlyCard hourlyWeather={weather}/>
      </div>
    );
  }
};
export default WeatherCards;

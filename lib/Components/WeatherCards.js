import React, { Component } from 'react';
import CurrentWeatherCard from './CurrentWeatherCard';
import HourlyCard from './HourlyCard';
import DailyCard from './DailyCard';

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
        <HourlyCard currentWeather={weather}/>
        <DailyCard currentWeather={weather}/>
      </div>
    );
  }
};
export default WeatherCards;

import React from 'react';

const Card = ({ currentWeather }) => {
  return (
    <div>
      <p>Location: {currentWeather.location.city}</p> 
      <p>Current Date: {currentWeather.history.date.pretty}</p>
      <p>Current Temperature: {currentWeather.current_observation.temp_f} °F</p>
      <p>Current Condition: {currentWeather.current_observation.weather}</p>
      <p>High: {currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
      <p>Low: {currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
     <p>Summary: {currentWeather.forecast.txt_forecast.forecastday[0].fcttext}</p>
    </div>
  );
};

export default Card;

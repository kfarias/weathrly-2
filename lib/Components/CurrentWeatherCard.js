import React from 'react';

const CurrentWeatherCard = ({ currentWeather }) => {
  return (
    <section>
      <section className='current-Weather'>
        <p>{currentWeather.location.city}</p>
        <p>{currentWeather.history.date.pretty}</p>
        <p>{currentWeather.current_observation.temp_f} °F</p>
        <p>{currentWeather.current_observation.weather}</p>
        <p>High: {currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
        <p>Low: {currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>{currentWeather.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </section>
    </section>
  );
};

export default CurrentWeatherCard;

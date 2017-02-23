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
      <p> First Hour img:<img src={currentWeather.hourly_forecast[0].icon_url}/></p>
      <p> First hour temp: {currentWeather.hourly_forecast[0].temp.english}</p>
      <p>First hour time: {currentWeather.hourly_forecast[0].FCTTIME.civil}</p>
      <p> Second Hour img:<img src={currentWeather.hourly_forecast[1].icon_url}/></p>
      <p> Second hour temp: {currentWeather.hourly_forecast[1].temp.english}</p>
      <p>Second hour time: {currentWeather.hourly_forecast[1].FCTTIME.civil}</p>
      <p> Third Hour img:<img src={currentWeather.hourly_forecast[2].icon_url}/></p>
      <p> Third hour temp: {currentWeather.hourly_forecast[2].temp.english}</p>
      <p>Third hour time: {currentWeather.hourly_forecast[2].FCTTIME.civil}</p>
      <p> Fourth Hour img:<img src={currentWeather.hourly_forecast[3].icon_url}/></p>
      <p> Fourth hour temp: {currentWeather.hourly_forecast[3].temp.english}</p>
      <p>Fourth hour time: {currentWeather.hourly_forecast[3].FCTTIME.civil}</p>
      <p> Fifth Hour img:<img src={currentWeather.hourly_forecast[4].icon_url}/></p>
      <p> Fifth hour temp: {currentWeather.hourly_forecast[4].temp.english}</p>
      <p>Fifth hour time: {currentWeather.hourly_forecast[4].FCTTIME.civil}</p>
      <p> Sixth Hour img:<img src={currentWeather.hourly_forecast[5].icon_url}/></p>
      <p> Sixth hour temp: {currentWeather.hourly_forecast[5].temp.english}</p>
      <p>Sixth hour time: {currentWeather.hourly_forecast[5].FCTTIME.civil}</p>
      <p> Seventh Hour img:<img src={currentWeather.hourly_forecast[6].icon_url}/></p>
      <p> Seventh hour temp: {currentWeather.hourly_forecast[6].temp.english}</p>
      <p>Seventh hour time: {currentWeather.hourly_forecast[6].FCTTIME.civil}</p>
      <p>1st day:{currentWeather.forecast.simpleforecast.forecastday[1].date.weekday}</p>
    </div>
  );
};

export default Card;

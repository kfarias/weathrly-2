import React from 'react'; 

const CurrentWeatherCard = ({ currentWeather }) => {
  return (
    <section>
      <section className='current-Weather'>
        <p className='location-city'>{currentWeather.location.city}</p>
        <p className= 'current-date'>{currentWeather.history.date.pretty}</p>
        <img className='current-img' src={currentWeather.forecast.simpleforecast.forecastday[0].icon_url}/>
        <p className='current-temp'>{currentWeather.current_observation.temp_f} °F</p>
        <p className='current-condition'>{currentWeather.current_observation.weather}</p>
        <p className='high-low'>{currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p className='current-summary'>{currentWeather.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </section>
    </section>
  );
};

export default CurrentWeatherCard;

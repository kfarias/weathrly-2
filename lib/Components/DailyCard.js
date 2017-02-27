import React from 'react';

const DailyCard = ({ currentWeather }) => {
  return (
    <section className='day-sect'>
      <div className='day-card'>
       <img className='day-image' src={currentWeather.forecast.simpleforecast.forecastday[0].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[0].date.weekday}</p>
        <p className='daily-high-low'>{currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
        <img src={currentWeather.forecast.simpleforecast.forecastday[1].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[1].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[1].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[1].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
        <img src={currentWeather.forecast.simpleforecast.forecastday[2].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[2].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[2].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[2].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
       <img src={currentWeather.forecast.simpleforecast.forecastday[3].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[3].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[3].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[3].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
       <img src={currentWeather.forecast.simpleforecast.forecastday[4].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[4].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[4].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[4].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
       <img src={currentWeather.forecast.simpleforecast.forecastday[5].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[5].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[5].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[5].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
       <img src={currentWeather.forecast.simpleforecast.forecastday[6].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[6].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[6].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[6].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
        <img src={currentWeather.forecast.simpleforecast.forecastday[7].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[7].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[7].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[7].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
        <img src={currentWeather.forecast.simpleforecast.forecastday[8].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[8].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[8].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[8].low.fahrenheit}</p>
      </div>

      <div className='day-card'>
         <img src={currentWeather.forecast.simpleforecast.forecastday[9].icon_url}/>
        <p className='daily-date'>{currentWeather.forecast.simpleforecast.forecastday[9].date.weekday}</p>
        <p>{currentWeather.forecast.simpleforecast.forecastday[9].high.fahrenheit}/{currentWeather.forecast.simpleforecast.forecastday[9].low.fahrenheit}</p>
      </div>
    </section>
  );
};

export default DailyCard;

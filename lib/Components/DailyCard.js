import React from 'react';

const DailyCard = ({ currentWeather }) => {
  return (
    <section className='day-sect'>
      <div>
       <img src={currentWeather.forecast.simpleforecast.forecastday[0].icon_url}/>
        <p>1st day: {currentWeather.forecast.simpleforecast.forecastday[0].date.weekday}</p>
        <p>1st day high: {currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit} °F</p>
        <p>1st day low: {currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit} °F</p>
      </div>

      <div>
        <img src={currentWeather.forecast.simpleforecast.forecastday[1].icon_url}/>
        <p>2nd day: {currentWeather.forecast.simpleforecast.forecastday[1].date.weekday}</p>
        <p>2nd day high: {currentWeather.forecast.simpleforecast.forecastday[1].high.fahrenheit} °F</p>
        <p>2nd day low: {currentWeather.forecast.simpleforecast.forecastday[1].low.fahrenheit} °F</p>
      </div>

      <div>
        <img src={currentWeather.forecast.simpleforecast.forecastday[2].icon_url}/>
        <p>3rd day: {currentWeather.forecast.simpleforecast.forecastday[2].date.weekday}</p>
        <p>3rd day high: {currentWeather.forecast.simpleforecast.forecastday[2].high.fahrenheit} °F</p>
        <p>3rd day low: {currentWeather.forecast.simpleforecast.forecastday[2].low.fahrenheit} °F</p>
      </div>

      <div>
       <img src={currentWeather.forecast.simpleforecast.forecastday[3].icon_url}/>
        <p>4th day: {currentWeather.forecast.simpleforecast.forecastday[3].date.weekday}</p>
        <p>4th day high: {currentWeather.forecast.simpleforecast.forecastday[3].high.fahrenheit} °F</p>
        <p>4th day low: {currentWeather.forecast.simpleforecast.forecastday[3].low.fahrenheit} °F</p>
      </div>

      <div>
       <img src={currentWeather.forecast.simpleforecast.forecastday[4].icon_url}/>
        <p>5th day: {currentWeather.forecast.simpleforecast.forecastday[4].date.weekday}</p>
        <p>5th day high: {currentWeather.forecast.simpleforecast.forecastday[4].high.fahrenheit} °F</p>
        <p>5th day low: {currentWeather.forecast.simpleforecast.forecastday[4].low.fahrenheit} °F</p>
      </div>

      <div>
       <img src={currentWeather.forecast.simpleforecast.forecastday[5].icon_url}/>
        <p>6th day: {currentWeather.forecast.simpleforecast.forecastday[5].date.weekday}</p>
        <p>6th day high: {currentWeather.forecast.simpleforecast.forecastday[5].high.fahrenheit} °F</p>
        <p>6th day low: {currentWeather.forecast.simpleforecast.forecastday[5].low.fahrenheit} °F</p>
      </div>

      <div>
       <img src={currentWeather.forecast.simpleforecast.forecastday[6].icon_url}/>
        <p>7th day: {currentWeather.forecast.simpleforecast.forecastday[6].date.weekday}</p>
        <p>7th day high: {currentWeather.forecast.simpleforecast.forecastday[6].high.fahrenheit} °F</p>
        <p>7th day low: {currentWeather.forecast.simpleforecast.forecastday[6].low.fahrenheit} °F</p>
      </div>

      <div>
        <img src={currentWeather.forecast.simpleforecast.forecastday[7].icon_url}/>
        <p>8th day: {currentWeather.forecast.simpleforecast.forecastday[7].date.weekday}</p>
        <p>8th day high: {currentWeather.forecast.simpleforecast.forecastday[7].high.fahrenheit} °F</p>
        <p>8th day low: {currentWeather.forecast.simpleforecast.forecastday[7].low.fahrenheit} °F</p>
      </div>

      <div>
        <img src={currentWeather.forecast.simpleforecast.forecastday[8].icon_url}/>
        <p>9th day: {currentWeather.forecast.simpleforecast.forecastday[8].date.weekday}</p>
        <p>9th day high: {currentWeather.forecast.simpleforecast.forecastday[8].high.fahrenheit} °F</p>
        <p>9th day low: {currentWeather.forecast.simpleforecast.forecastday[8].low.fahrenheit} °F</p>
      </div>

      <div>
         <img src={currentWeather.forecast.simpleforecast.forecastday[9].icon_url}/>
        <p>10th day: {currentWeather.forecast.simpleforecast.forecastday[9].date.weekday}</p>
        <p>10th day high: {currentWeather.forecast.simpleforecast.forecastday[9].high.fahrenheit} °F</p>
        <p>10th day low: {currentWeather.forecast.simpleforecast.forecastday[9].low.fahrenheit} °F</p>
      </div>
    </section>
  );
};

export default DailyCard;

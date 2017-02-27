import React from 'react';

const CurrentWeatherCard = ({ currentWeather }) => {
  return (
    <section>
      <section className='current-Weather'>
        <p>Location: {currentWeather.location.city}</p>
        <p>Current Date: {currentWeather.history.date.pretty}</p>
        <p>Current Temperature: {currentWeather.current_observation.temp_f} °F</p>
        <p>Current Condition: {currentWeather.current_observation.weather}</p>
        <p>High: {currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
        <p>Low: {currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
        <p>Summary: {currentWeather.forecast.txt_forecast.forecastday[0].fcttext}</p>
      </section>



      {/* <section className='hour-sect'>
        <div>
          <p> First Hour img:<img src={currentWeather.hourly_forecast[0].icon_url}/></p>
          <p> First hour temp: {currentWeather.hourly_forecast[0].temp.english} °F</p>
          <p>First hour time: {currentWeather.hourly_forecast[0].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Second Hour img:<img src={currentWeather.hourly_forecast[1].icon_url}/></p>
          <p> Second hour temp: {currentWeather.hourly_forecast[1].temp.english} °F</p>
          <p>Second hour time: {currentWeather.hourly_forecast[1].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Third Hour img:<img src={currentWeather.hourly_forecast[2].icon_url}/></p>
          <p> Third hour temp: {currentWeather.hourly_forecast[2].temp.english} °F</p>
          <p>Third hour time: {currentWeather.hourly_forecast[2].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Fourth Hour img:<img src={currentWeather.hourly_forecast[3].icon_url}/></p>
          <p> Fourth hour temp: {currentWeather.hourly_forecast[3].temp.english} °F</p>
          <p>Fourth hour time: {currentWeather.hourly_forecast[3].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Fifth Hour img:<img src={currentWeather.hourly_forecast[4].icon_url}/></p>
          <p> Fifth hour temp: {currentWeather.hourly_forecast[4].temp.english} °F</p>
          <p>Fifth hour time: {currentWeather.hourly_forecast[4].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Sixth Hour img:<img src={currentWeather.hourly_forecast[5].icon_url}/></p>
          <p> Sixth hour temp: {currentWeather.hourly_forecast[5].temp.english} °F</p>
          <p>Sixth hour time: {currentWeather.hourly_forecast[5].FCTTIME.civil}</p>
        </div>

        <div>
          <p> Seventh Hour img:<img src={currentWeather.hourly_forecast[6].icon_url}/></p>
          <p> Seventh hour temp: {currentWeather.hourly_forecast[6].temp.english} °F</p>
          <p>Seventh hour time: {currentWeather.hourly_forecast[6].FCTTIME.civil}</p>
        </div>
      </section> */}

      <section className='day-sect'>
        <div>
          <p>1st day img: <img src={currentWeather.forecast.simpleforecast.forecastday[0].icon_url}/></p>
          <p>1st day: {currentWeather.forecast.simpleforecast.forecastday[0].date.weekday}</p>
          <p>1st day high: {currentWeather.forecast.simpleforecast.forecastday[0].high.fahrenheit} °F</p>
          <p>1st day low: {currentWeather.forecast.simpleforecast.forecastday[0].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>2nd day img: <img src={currentWeather.forecast.simpleforecast.forecastday[1].icon_url}/></p>
          <p>2nd day: {currentWeather.forecast.simpleforecast.forecastday[1].date.weekday}</p>
          <p>2nd day high: {currentWeather.forecast.simpleforecast.forecastday[1].high.fahrenheit} °F</p>
          <p>2nd day low: {currentWeather.forecast.simpleforecast.forecastday[1].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>3rd day img: <img src={currentWeather.forecast.simpleforecast.forecastday[2].icon_url}/></p>
          <p>3rd day: {currentWeather.forecast.simpleforecast.forecastday[2].date.weekday}</p>
          <p>3rd day high: {currentWeather.forecast.simpleforecast.forecastday[2].high.fahrenheit} °F</p>
          <p>3rd day low: {currentWeather.forecast.simpleforecast.forecastday[2].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>4th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[3].icon_url}/></p>
          <p>4th day: {currentWeather.forecast.simpleforecast.forecastday[3].date.weekday}</p>
          <p>4th day high: {currentWeather.forecast.simpleforecast.forecastday[3].high.fahrenheit} °F</p>
          <p>4th day low: {currentWeather.forecast.simpleforecast.forecastday[3].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>5th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[4].icon_url}/></p>
          <p>5th day: {currentWeather.forecast.simpleforecast.forecastday[4].date.weekday}</p>
          <p>5th day high: {currentWeather.forecast.simpleforecast.forecastday[4].high.fahrenheit} °F</p>
          <p>5th day low: {currentWeather.forecast.simpleforecast.forecastday[4].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>6th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[5].icon_url}/></p>
          <p>6th day: {currentWeather.forecast.simpleforecast.forecastday[5].date.weekday}</p>
          <p>6th day high: {currentWeather.forecast.simpleforecast.forecastday[5].high.fahrenheit} °F</p>
          <p>6th day low: {currentWeather.forecast.simpleforecast.forecastday[5].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>7th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[6].icon_url}/></p>
          <p>7th day: {currentWeather.forecast.simpleforecast.forecastday[6].date.weekday}</p>
          <p>7th day high: {currentWeather.forecast.simpleforecast.forecastday[6].high.fahrenheit} °F</p>
          <p>7th day low: {currentWeather.forecast.simpleforecast.forecastday[6].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>8th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[7].icon_url}/></p>
          <p>8th day: {currentWeather.forecast.simpleforecast.forecastday[7].date.weekday}</p>
          <p>8th day high: {currentWeather.forecast.simpleforecast.forecastday[7].high.fahrenheit} °F</p>
          <p>8th day low: {currentWeather.forecast.simpleforecast.forecastday[7].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>9th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[8].icon_url}/></p>
          <p>9th day: {currentWeather.forecast.simpleforecast.forecastday[8].date.weekday}</p>
          <p>9th day high: {currentWeather.forecast.simpleforecast.forecastday[8].high.fahrenheit} °F</p>
          <p>9th day low: {currentWeather.forecast.simpleforecast.forecastday[8].low.fahrenheit} °F</p>
        </div>

        <div>
          <p>10th day img: <img src={currentWeather.forecast.simpleforecast.forecastday[9].icon_url}/></p>
          <p>10th day: {currentWeather.forecast.simpleforecast.forecastday[9].date.weekday}</p>
          <p>10th day high: {currentWeather.forecast.simpleforecast.forecastday[9].high.fahrenheit} °F</p>
          <p>10th day low: {currentWeather.forecast.simpleforecast.forecastday[9].low.fahrenheit} °F</p>
        </div>
      </section>


    </section>
  );
};

export default CurrentWeatherCard;

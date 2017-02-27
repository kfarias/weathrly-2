import React from 'react';

const HourlyCard = ({ currentWeather }) => {
  return (
     <section className='hour-sect'>
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
    </section>
  )
}

export default HourlyCard;

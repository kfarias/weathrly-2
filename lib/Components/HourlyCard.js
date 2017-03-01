import React from 'react';


const HourlyCard = ({ currentWeather }) => {
  const hours = [];
  currentWeather.hourly_forecast.slice(0,6).forEach((hour, i) => {
    hours.push( <div key={i}>
      <img alt="forecast-icon" src={hour.icon_url}/>
      <p>{hour.temp.english} °F</p>
      <p>{hour.FCTTIME.civil}</p>
    </div>);
  });

  return (
    <section className='hour-sect'>
      {hours}
    </section>
);
};
    //
    //   <section className='hour-sect'>
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[0].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[0].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[0].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[1].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[1].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[1].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[2].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[2].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[2].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[3].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[3].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[3].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[4].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[4].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[4].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[5].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[5].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[5].FCTTIME.civil}</p>
    //     </div>
    //
    //     <div>
    //       <img alt="forecast-icon" src={currentWeather.hourly_forecast[6].icon_url}/>
    //       <p>{currentWeather.hourly_forecast[6].temp.english} °F</p>
    //       <p>{currentWeather.hourly_forecast[6].FCTTIME.civil}</p>
    //     </div>
    //   </section>
    // );

  export default HourlyCard;

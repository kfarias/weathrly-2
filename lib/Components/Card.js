import React from 'react'

const Card = ({currentWeather}) => {
  return(
    <div>
      <p>Location: {currentWeather.location.city}</p>
      <p>Feels Like: {currentWeather.current_observation.feelslike_f} °F</p>
      <p>Weather: {currentWeather.current_observation.weather}</p>
    </div>
  )
}

export default Card;

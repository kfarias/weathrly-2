import React, { Component } from 'react';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <div>
        Please enter a Location.
      </div>
    );
  } else {

    return (
      <div>
      <p>
        Location:{weather.location.city}
      </p>
      </div>
    )
  };
}
export default WeatherCards;

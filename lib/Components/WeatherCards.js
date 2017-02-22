import React, { Component } from 'react';

const WeatherCards = ({ weather }) => {
  if (!weather.length) {
    return (
      <div>
        Please enter a Location.
      </div>
    );
  }
  return (
      <div>
        hi
      </div>
  );
};

export default WeatherCards;

import React, { Component } from "react";
import "./styles/WeatherContainer.css";

class WeatherContainer extends Component {
  state = {};
  render() {
    console.log(this.props.weatherData); //temp print
    const data = this.props.weatherData;
    const temperatures = data.main;
    return (
      <>
        <h1>{this.props.weatherData.name}</h1>
        <div className="weather-data">
          <span>Temperature</span>
          <span>{temperatures.temp}</span>
          <span>Feels like</span>
          <span>{temperatures.feels_like}</span>
        </div>
      </>
    );
  }
}

export default WeatherContainer;

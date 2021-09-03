import React, { Component } from "react";
import WeatherContainer from "./components/WeatherContainer";
import SearchForm from "./components/SearchForm";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class App extends Component {
  state = { weatherData: undefined };

  updateCity = async (city) => {
    const weatherData = await this.getWeather(city);
    this.setState({ weatherData: weatherData });
  };

  getWeather = async (city) => {
    console.log(API_KEY);
    try {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const response = await apiCall.json();
      if (response.cod === 200) {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <SearchForm parentCallback={this.updateCity} />
        {this.state.weatherData ? (
          <WeatherContainer weatherData={this.state.weatherData} />
        ) : (
          <p>No city found</p>
        )}
      </>
    );
  }
}

import React from "react";
import weatherData from "../weatherAPI.json";
import "./WeatherWidget.css";

const WeatherWidget = () => {
  const currentWeather = weatherData.current;
  const weatherIconUrl = `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;

  const handleNowClick = () => {
    console.log("Now button clicked");
  };

  const handleTodayClick = () => {
    console.log("Today button clicked");
  };

  const handleSelectDateClick = () => {
    console.log("Select Date button clicked");
  };

  return (
    <div className="weather-widget">
      <div className="first-container">
        <div className="button-container">
          <button onClick={handleNowClick}>Now</button>
          <button onClick={handleTodayClick}>Today</button>
          <button onClick={handleSelectDateClick}>Select Date</button>
        </div>

        <div className="current-weather">
          <div className="temp-description">
            <div className="current-temp">{currentWeather.temp}°C</div>
            <div className="current-description">
              {currentWeather.weather[0].main} -{" "}
              {currentWeather.weather[0].description}
            </div>
          </div>
          <img src={weatherIconUrl} alt="Weather Icon" />
        </div>
      </div>

      <hr className="hr1"></hr>
      <div className="data-container">
        <div className="element">
          <div className="data">
            <div className="value">{currentWeather.feels_like}°C</div>
            <div className="text">Feels like</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="value">
              {currentWeather.wind_speed}
              <span className="unit">m/s</span>
            </div>
            <div className="text">Wind</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="value">
              0<span className="unit">m/s</span>
            </div>
            <div className="text">Wind Gust</div>
          </div>
        </div>

        <div className="element">
          <div className="data">
            <div className="value">
              {currentWeather.wind_deg}
              <span className="unit">°</span>
            </div>
            <div className="text">Wind Deg</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="value">
              {currentWeather.humidity}
              <span className="unit">%</span>
            </div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <div className="data">
            <div className="value">
              {currentWeather.pressure}
              <span className="unit">hPa</span>
            </div>
            <div className="text">Pressure</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;

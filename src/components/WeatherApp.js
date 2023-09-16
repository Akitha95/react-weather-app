import React from "react";
import "../style/WeatherApp.css";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import fristImg from "../assets/03d.svg";

const WeatherApp = () => {
  let api_key = process.env.REACT_APP_WEATHER_API_KEY;
  let api_url = process.env.REACT_APP_WEATHER_API_URL;
  const firstWeather = async () => {
    let url = `${api_url}/weather?q=Elpitiya&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    const data = await response.json();

    const humidity = document.getElementsByClassName("humidity-precent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const desciption = document.getElementsByClassName("weather-des");
    const icon = document.getElementsByClassName("weather-image");
    // const icon = document.getElementById("weatherImg");
    try {
      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + " km/h";
      temprature[0].innerHTML = Math.floor(data.main.temp) + `<sup>°C</sup>`;
      location[0].innerHTML = data.name;
      desciption[0].innerHTML = data.weather[0].description;

      // change images
      const weather_Image = require(`../assets/${data.weather[0].icon}.svg`);
      icon[0].innerHTML = `<img id="weatherSVG" src=${weather_Image} alt="weather 2"/>`;

      // in an error
    } catch (error) {
      humidity[0].innerHTML = "--%";
      wind[0].innerHTML = "-- km/h";
      temprature[0].innerHTML = `--<sup>°C</sup>`;
      location[0].innerHTML = data.message;
      desciption[0].innerHTML = "undefined";

      // change images
      const weather_Image = require(`../assets/unknown.png`);
      icon[0].innerHTML = `<img src=${weather_Image} alt="weather 3"/>`;
    }
  };

  firstWeather();

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `${api_url}/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

    let response = await fetch(url);
    const data = await response.json();

    const humidity = document.getElementsByClassName("humidity-precent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const desciption = document.getElementsByClassName("weather-des");
    const icon = document.getElementsByClassName("weather-image");
    // const icon = document.getElementById("weatherImg");
    try {
      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = data.wind.speed + " km/h";
      temprature[0].innerHTML = Math.floor(data.main.temp) + `<sup>°C</sup>`;
      location[0].innerHTML = data.name;
      desciption[0].innerHTML = data.weather[0].description;

      // change images
      const weather_Image = require(`../assets/${data.weather[0].icon}.svg`);
      icon[0].innerHTML = `<img id="weatherSVG" src=${weather_Image} alt="weather 2"/>`;

      // in an error
    } catch (error) {
      humidity[0].innerHTML = "--%";
      wind[0].innerHTML = "-- km/h";
      temprature[0].innerHTML = `--<sup>°C</sup>`;
      location[0].innerHTML = data.message;
      desciption[0].innerHTML = "undefined";

      // change images
      const weather_Image = require(`../assets/unknown.png`);
      icon[0].innerHTML = `<img src=${weather_Image} alt="weather 3"/>`;
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather">
        <div className="weather-left">
          <div className="weather-image">
            <img id="weatherImg1" src={fristImg} alt="weather" />
          </div>
          <div className="weather-des">overcast clouds</div>
        </div>
        <div className="weather-text">
          <div className="weather-temp">
            24<sup>°C</sup>
          </div>
          <div className="weather-location">London</div>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-precent">50%</div>
            <div className="text">Humidity</div>
          </div>
        </div>

        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">5 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

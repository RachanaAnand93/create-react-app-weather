import React, { useState } from "react";
import "./weather.css";
import WeatherData from "./WeatherData";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ details: false });
  let [city, setCity] = useState(props.defaultcity);
  function handleSubmit(response) {
    console.log(response);
    setWeatherInfo({
      details: true,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }
  function handleClick(event) {
    event.preventDefault();
    //serach city
    search();
  }
  function search() {
    if (city.length === 0) {
      alert("Enter a location");
    } else {
      const apikey = "56db1fa98457edda6eb57bb6a4699df0";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
      axios.get(apiUrl).then(handleSubmit);
    }
  }

  function updateCity(event) {
    //change city
    setCity(event.target.value);
  }

  if (weatherInfo.details) {
    return (
      <div className="Weather">
        <form onSubmit={handleClick}>
          <div className="container">
            <div className="row">
              <div className="col-9 mt-1 ">
                <input
                  type="search"
                  placeholder="Enter a location.."
                  className="Search-city"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <button className="btn btn-primary p-1 mt-1"> Search</button>
              </div>
            </div>
          </div>
        </form>
        <WeatherData input={weatherInfo} />
        <Forecast coordinates={weatherInfo.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}

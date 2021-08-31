import React, { useState } from "react";
import "./weather.css";
import DateFormat from "./DateFormat";
import axios from "axios";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ details: false });
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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }
  if (weatherInfo.details) {
    return (
      <div className="Weather">
        <form>
          <div className="container">
            <div className="row">
              <div className="col-9 mt-1 ">
                <input
                  type="search"
                  placeholder="Enter a location.."
                  className="Search-city"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-primary p-1 mt-1"> Search</button>
              </div>
            </div>
          </div>
        </form>
        <h1>Berlin</h1>
        <ul className="Dates-description">
          <li>
            <DateFormat date={weatherInfo.date} />
          </li>
          <li className="text-capitalize">{weatherInfo.description}</li>
        </ul>
        <div className="Row">
          <div className="col-6">
            <img
              src={weatherInfo.iconUrl}
              rel="noreferrer"
              alt={weatherInfo.description}
            />
            <div className="Temper"> {Math.round(weatherInfo.temp)}</div>
            <span className="Temp">°C|°F</span>
          </div>
          <div className="col-6">
            <ul className="Details">
              <li>Humidity:{Math.round(weatherInfo.humidity)}%</li>
              <li>Wind:{Math.round(weatherInfo.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "56db1fa98457edda6eb57bb6a4699df0";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}
  &appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "Loading..";
  }
}

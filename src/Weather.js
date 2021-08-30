import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a location.."
                className="Search-city"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary p-2"> Search</button>
            </div>
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <ul className="Dates-description">
        <li> Wednesday 07:10</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="Row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            rel="noreferrer"
            alt="cloudy"
          />
          <div className="Temper"> 12°C|°F</div>
        </div>
        <div className="col-6">
          <ul className="Details">
            <li>Precipitation:91%</li>
            <li>Humidity:87%</li>
            <li>Wind:16km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

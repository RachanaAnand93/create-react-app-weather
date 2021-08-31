import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";
export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.input.city}</h1>
      <ul className="Dates-description">
        <li>
          <DateFormat date={props.input.date} />
        </li>
        <li className="text-capitalize">{props.input.description}</li>
      </ul>
      <div className="Row">
        <div className="col-6">
          <WeatherIcon code={props.input.icon} size={50} />
          <div className="Temper"> {Math.round(props.input.temp)}</div>
          <span className="Temp">°C</span>
        </div>
        <div className="col-6">
          <ul className="Details">
            <li>Humidity:{Math.round(props.input.humidity)}%</li>
            <li>Wind:{Math.round(props.input.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

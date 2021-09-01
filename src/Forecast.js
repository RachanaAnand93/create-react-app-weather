import React, { useState, useEffect } from "react";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <ForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "56db1fa98457edda6eb57bb6a4699df0";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
    return "null";
  }
}

import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);
  let [details, setDetails] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }
  function getDetails(response) {
    //console.log(response.data);
    setDisplay(true);
    setDetails({
      temp: response.data.list[0].main.temp,
      wind: response.data.list[0].wind.speed,
      humidity: response.data.list[0].main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
      description: response.data.list[0].weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (city.length === 0) {
      alert("Enter a location");
    } else {
      let apiKey = "56db1fa98457edda6eb57bb6a4699df0";
      let url = `https://api.openweathermap.org/data/2.5/find?q=${city}
    &appid=${apiKey}&units=metric`;
      axios.get(url).then(getDetails);
    }
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder=" Enter city name" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (display) {
    return (
      <div className="weather">
        {form}
        <li>Temperature: {Math.round(details.temp)}°C </li>
        <li>Description: {details.description} </li>
        <li>Humidity: {details.humidity}% </li>
        <li>Wind: {details.wind}km/h </li>
        <li>
          <img src={details.icon} alt={details.description} />
        </li>
      </div>
    );
  }

  return <div className="App">{form}</div>;
}

import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <a href="https://github.com/RachanaAnand93/Weather-App">
          {" "}
          Open-source code
        </a>
        , by Rachana Anand
      </p>
    </div>
  );
}

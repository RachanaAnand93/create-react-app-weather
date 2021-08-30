import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <p>
          <a
            href="https://github.com/RachanaAnand93/Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Rachana Anand
        </p>
      </div>
    </div>
  );
}

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Berlin" />
        <p>
          <a
            href="https://github.com/RachanaAnand93/create-react-app-weather"
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

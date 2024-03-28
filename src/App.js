import React from "react";
import WeatherWidget from "./components/WeatherWidget";
import TempChart from "./components/TempChart";

function App() {
  return (
    <div className="App">
      <WeatherWidget />
      <TempChart />
    </div>
  );
}

export default App;

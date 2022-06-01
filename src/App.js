import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinnercomp.jsx";
import Weather from "./Weather";

const APIkey = "777010f9e1614b33adb155807220106";

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [coords, setCoords] = useState(null);
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((data) => {
      setCoords(data.coords);
    });
  }, []);
  useEffect(() => {
    if (coords) {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${coords.latitude},${coords.longitude}`
        )
        .then((data) => {
          setData(data.data);
          setLoading(false);
        });
    }
  }, [coords]);
  if (!coords || loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Weather
        region={data.location.region}
        country={data.location.country}
        temp={data.current.temp_c}
        condition={data.current.condition.text}
        wind={data.current.wind_kph}
        icon={data.current.condition.icon}
      />
    </div>
  );
};

export default App;

import "./weather.css";

export default function Weather(props) {
  return (
    <div className="card">
      <div className="weather">
        <h2>
          Weather in {props.region}, {props.country}
        </h2>
        <h1>{props.temp}°C</h1>
		  <img src={props.icon} alt="icon" />
        <div>{props.condition}</div>
        <div>Wind speed: {props.wind}kph</div>
      </div>
    </div>
  );
}

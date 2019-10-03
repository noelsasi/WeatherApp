import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Weather from "./weatherComponent";
import Form from "./weatherInputComponent";

const apiKey = "313782c955a63c9b994dab9e039d3498";

class App extends React.Component {
  state = {
    city: "",
    country: "",
    main: "",
    celsius: "",
    temp_max: "",
    temp_min: "",
    description: "",
    error: false
  };

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`
      );
      const res = await apiCall.json();
      console.log(res);

      this.setState({
        city: res.name,
        country: res.sys.country,
        celsius: this.calCelsius(res.main.temp),
        temp_max: this.calCelsius(res.main.temp_max),
        temp_min: this.calCelsius(res.main.temp_min),
        description: res.weather[0].description
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const {
      city,
      country,
      celsius,
      temp_min,
      temp_max,
      description,
      error
    } = this.state;
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form loadWeather={this.getWeather} error={error} />
        <Weather
          city={city}
          country={country}
          temp_celsius={celsius}
          temp_min={temp_min}
          temp_max={temp_max}
          description={description}
        />
      </div>
    );
  }
}

export default App;

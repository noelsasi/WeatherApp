import React from "react";
import empty from "./empty.svg";

const Weather = props => {
  if (props.city) {
    return (
      <div className="container mt-5">
        <div className="cards bg-warning col-md-5 mx-auto p-5 rounded shadow">
          <h3>
            {props.city}, {props.country}
          </h3>
          <div className="weather-details">
            <i className="fa fa-sun-o fa-2x mt-2 mb-3" aria-hidden="true"></i>
            <h3>{props.temp_celsius}&deg;c</h3>
            <h6 className="text-danger mt-3">{props.description}</h6>
          </div>
          {minmaxTemp(props.temp_min, props.temp_max)}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5 ">
        <img src={empty} alt="" height="300px" className="mt-4" />
      </div>
    );
  }
};

function minmaxTemp(min, max) {
  return (
    <div className="min-max mt-4 border border-dark p-2 rounded">
      <h5>
        <span className="min col-md-3"> min- {min}&deg;c</span>
        <span className="max col-md-3">max- {max}&deg;c</span>
      </h5>
    </div>
  );
}

export default Weather;

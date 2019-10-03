import React from "react";

const Form = props => {
  return (
    <div className="col-md-6 mx-auto mt-5">
      <form onSubmit={props.loadWeather}>
        <div className="d-flex col-md-12">
          <div className="col-md-9 d-flex">
            <input
              type="text"
              className="form-control col-md-5 mr-2"
              name="city"
              placeholder="City"
              autoComplete="off"
            />
            <input
              type="text"
              className="form-control col-md-5"
              name="country"
              placeholder="Country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-success">Get Weather</button>
          </div>
        </div>
      </form>
      <div className="mt-4">{props.error ? error() : null}</div>
    </div>
  );
};

function error() {
  return (
    <div className="col-md-9 mx-auto alert alert-danger">
      Please Enter City and Country
    </div>
  );
}

export default Form;

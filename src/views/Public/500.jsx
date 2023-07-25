import { Component } from "react";

class InternalError extends Component {
  render() {
    return (<div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">500</h1>
        <p className="fs-3"> <span className="text-danger">Opps!</span> Internal Server Error.</p>
        <p className="lead">
          Something wrong with the application, please contact developer for more information.
        </p>
      </div>
    </div>);
  }
}

export default InternalError;
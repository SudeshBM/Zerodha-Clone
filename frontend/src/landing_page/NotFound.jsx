import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">404 Not Found</h1>
        <p className="text-muted mb-4">
          We couldn’t find the page you were looking for.
        </p>
        <Link
          className="btn border"
          to="/"
          style={{ width: "auto", margin: "0 auto" }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

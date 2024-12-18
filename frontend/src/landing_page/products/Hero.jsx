import React from "react";

function Hero() {
  return (
    <div className="container mt-sm-5 mb-sm-5 p-3 p-sm-5 border-bottom">
      <div className="row text-center pb-sm-5">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 mb-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-long-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

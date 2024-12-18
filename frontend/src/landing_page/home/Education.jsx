import React from "react";

function Eduction() {
  return (
    <div className="container p-3 p-sm-5 mt-5">
      <div className="row">
        <div className="col-12 col-sm-6">
          <img
            src="assets/education.svg"
            alt="VarsityImage"
            style={{ width: "85%" }}
          />
        </div>
        <div className="col-12 col-sm-6">
          <h1 className="mb-3 mb-sm-5 mt-5 mt-sm-0 fs-2">
            Free and open market education
          </h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i class="fa-solid fa-long-arrow-right"></i>
          </a>
          <p className="mt-3 mt-sm-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i class="fa-solid fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Eduction;

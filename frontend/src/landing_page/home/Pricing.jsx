import React from "react";

function Pricing() {
  return (
    <div className="container p-3 p-sm-5">
      <div className="row">
        <div className="col-12 col-sm-5">
          <h1 className="mb-sm-5 fs-2">Unbeatable pricing</h1>
          <p className="mb-3 mb-sm-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-long-arrow-right"></i>
          </a>
        </div>
        <div className="col-12 col-sm-7">
          <div className="row text-center">
            <div className="col p-3 border">
              <img src="assets\pricingEquity.svg" alt="ZeroRupee" />
              <p>Free account opening</p>
            </div>
            <div className="col p-3 border">
              <img src="assets\pricingMF.svg" alt="ZeroRupee" />
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col p-3 border">
              <img src="assets\intradayTrades.svg" alt="TwentyRupee" />
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

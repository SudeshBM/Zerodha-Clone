import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-6 p-3 p-sm-5">
          <img
            src="assets/largestbroker.svg"
            alt="AwardsImage"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-12 col-sm-6 p-3 pt-0 p-sm-5 mt-sm-5">
          <h1 className="fs-2 mt-4">Largest stock broker in India</h1>
          <p className="mb-3 mt-3">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 mb-3">
              <ul>
                <li>Futures and Options</li>
                <li>Comodoty derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 mb-3">
              <ul>
                <li>Stocks & IPO's</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img
              src="assets/pressLogos.png"
              alt="pressImage"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

import React from "react";

function Hero() {
  return (
    <div className="container mt-sm-5 mb-sm-5">
      <div className="row p-3 p-sm-5 text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-4">List of all charges and taxes</h3>
      </div>
      <div className="row mb-sm-5 text-center">
        <div className="col-12 col-sm-4">
          <img src="assets/pricingEquity.svg" className="p-sm-5" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted fs-6 mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <img src="assets/intradayTrades.svg" className="p-sm-5" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted fs-6 mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-sm-4">
          <img src="assets/pricingMF.svg" className="p-sm-5" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted fs-6 mt-4">
            All direct mutual fund inv className="fs-2"estments are absolutely
            free — ₹ 0 commissions & DP charges. className="text-muted fs-5"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

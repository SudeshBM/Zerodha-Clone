import React from "react";

function Universe() {
  const navigate = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="container p-3 p-sm-5 mt-4 mt-sm-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-12 col-sm-4 mt-3 mt-sm-5 p-sm-5">
          <img src="assets/zerodhaFundhouse.png" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-12 col-sm-4 mt-3 mt-sm-5 p-sm-5">
          <img src="assets/sensibullLogo.svg" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-12 col-sm-4 mt-3 mt-sm-5 p-sm-5">
          <img src="assets/tijori.svg" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-12 col-sm-4 p-sm-5 mt-3 mt-sm-0">
          <img src="assets/streakLogo.png" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-12 col-sm-4 p-sm-5 mt-3 mt-sm-0">
          <img src="assets/smallcaseLogo.png" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-12 col-sm-4 p-sm-5 mt-3 mt-sm-0">
          <img src="assets/dittoLogo.png" style={{ width: "70%" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 mt-5 mt-sm-2 btn btn-primary fs-5"
          style={{ width: "auto", margin: "0 auto" }}
          onClick={navigate}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;

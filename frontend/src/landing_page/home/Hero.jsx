import React from "react";

function Hero({ isLoggedIn }) {
  const navigate = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="container mt-2">
      <div className="row text-center">
        <img src="assets/homeHero.png" alt="HeroImage" className="mb-2" />
        <h1 className="mt-1">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        {!isLoggedIn && (
          <button
            className="p-2 mt-2 btn btn-primary fs-5"
            style={{ width: "auto", margin: "0 auto" }}
            onClick={navigate}
          >
            Sign up for free
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;

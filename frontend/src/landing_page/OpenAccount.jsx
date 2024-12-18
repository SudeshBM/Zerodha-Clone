import React from "react";

function OpenAccount() {
  const navigate = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Open a Zerodha account</h1>
        <p className="text-muted mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>

        <button
          className="p-2 mt-2 btn btn-primary fs-5"
          style={{ width: "auto", margin: "0 auto" }}
          onClick={navigate}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;

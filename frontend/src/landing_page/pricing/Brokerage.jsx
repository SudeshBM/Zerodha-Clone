import React from "react";

function Brokerage() {
  return (
    <div className="container pt-5">
      <h1 className="fs-3 text-muted mb-3 mb-sm-5">Equity</h1>
      <table className="table">
        <thead className="border table-active">
          <tr>
            <th>&nbsp;</th>
            <th>Equity delivery</th>
            <th>Equity intraday</th>
            <th>F&amp;O - Futures</th>
            <th>F&amp;O - Options</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td>Brokerage</td>
            <td className=" text-muted">Zero Brokerage</td>
            <td className=" text-muted">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className=" text-muted">
              0.03% or Rs. 20/executed order whichever is lower
            </td>
            <td className=" text-muted">Flat Rs. 20 per executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td className=" text-muted">0.1% on buy &amp; sell</td>
            <td className=" text-muted">0.025% on the sell side</td>
            <td className=" text-muted">0.02% on the sell side</td>
            <td className=" text-muted">
              <ul>
                <li>
                  0.0125% of the intrinsic value on options that are bought and
                  exercised
                </li>
                <li>0.1% on sell side (on premium)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Transaction charges</td>
            <td className=" text-muted">
              NSE: 0.00297%
              <br />
              BSE: 0.00375%
            </td>
            <td className=" text-muted">
              NSE: 0.00297%
              <br />
              BSE: 0.00375%
            </td>
            <td className=" text-muted">
              NSE: 0.00173%
              <br />
              BSE: 0
            </td>
            <td className=" text-muted">
              NSE: 0.03503% (on premium)
              <br />
              BSE: 0.0325% (on premium)
            </td>
          </tr>
          <tr>
            <td>GST</td>
            <td className=" text-muted">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className=" text-muted">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className=" text-muted">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
            <td className=" text-muted">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td>SEBI charges</td>
            <td className=" text-muted">₹10 / crore</td>
            <td className=" text-muted">₹10 / crore</td>
            <td className=" text-muted">₹10 / crore</td>
            <td className=" text-muted">₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp charges</td>
            <td className=" text-muted">0.015% or ₹1500 / crore on buy side</td>
            <td className=" text-muted">0.003% or ₹300 / crore on buy side</td>
            <td className=" text-muted">0.002% or ₹200 / crore on buy side</td>
            <td className=" text-muted">0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
      <div className=" fs-4 text-center">
        <a
          href="https://zerodha.com/brokerage-calculator"
          style={{ textDecoration: "none" }}
        >
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator.
      </div>
    </div>
  );
}

export default Brokerage;

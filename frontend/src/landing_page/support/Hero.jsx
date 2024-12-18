import React from "react";

function Hero() {
  return (
    <div className="container-fluid p-3 p-sm-5" id="supportHero">
      <div className="px-sm-5" id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track tickets</a>
      </div>
      <div className="row px-sm-5">
        <div className="col-12 col-sm-7 mt-3 mt-sm-5 mb-3 mb-sm-5">
          <h5>Search for an answer or browse help topics to create a ticket</h5>
          <div class="input-group mt-4">
            <input
              type="text"
              class="form-control p-3"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <br />
          <a href="" style={{ marginRight: "25px" }}>
            Track account opening
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Track segment activation
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Intraday margins
          </a>
          <a href="" style={{ marginRight: "25px" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-12 col-sm-5 p-sm-5">
          <h5 className="mb-4">Featured</h5>
          <ol>
            <li className="mb-3">
              <a href="">Suspension of trading - IDFC Limited</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in October 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;

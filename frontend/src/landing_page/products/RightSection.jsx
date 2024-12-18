import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-3 p-sm-5">
        <div className="col-12 col-sm-3 pt-sm-5">
          <h1 className="mb-4 mt-sm-5">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-12 col-sm-7">
          <img src={imageUrl} alt="image" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

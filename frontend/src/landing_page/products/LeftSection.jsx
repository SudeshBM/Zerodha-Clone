import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-3 p-sm-5">
        <div className="col-12 col-sm-8 px-sm-5">
          <img src={imageUrl} alt="image" style={{ width: "90%" }} />
        </div>
        <div className="col-12 col-sm-4 p-3 pt-sm-5">
          <h1 className="mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", marginRight: "50px" }}
            >
              Try Demo <i class="fa-solid fa-long-arrow-right"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="assets/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="assets/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

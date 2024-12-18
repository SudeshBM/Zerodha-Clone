import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 p-sm-5 border-top">
        <h1 className="fs-2 text-center">People</h1>
      </div>
      <div className="row" style={{ lineHeight: "1.8", fontSize: "18px" }}>
        <div className="col-12 col-sm-6 p-3 p-sm-5 text-center">
          <img
            src="assets\B M Sudesh.jpg"
            alt="ratneshKshirsagarImage"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h1 className="fs-3 mt-3">B M Sudesh</h1>
          <p className="text-muted">Full-Stack Web Developer</p>
        </div>
        <div className="col-12 col-sm-6 p-3 p-sm-5 text-muted">
          <p>
            B M Sudesh, a graduate in Information Science and Engineering, is a
            skilled Full-Stack Developer with expertise in the MERN stack, Java,
            and Python, along with experience in building and optimizing web
            applications.
          </p>
          <p>
            He is passionate about technology and continually seeks to enhance
            his skills and apply them in practical scenarios.
          </p>
          <p>
            Connect on{" "}
            <a href="https://www.linkedin.com/in/b-m-sudesh-795536270/">
              Linkedin
            </a>{" "}
            / <a href="mailto:sudeshbm248@gmail.com">Email</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

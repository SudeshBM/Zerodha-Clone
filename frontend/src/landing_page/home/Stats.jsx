import React from "react";

function Stats() {
  return (
    <div className="container p-3 p-sm-5">
      <div className="row">
        <div className="col-12 col-sm-5">
          <h1 className="fs-2 mb-3 mb-sm-5">Trust with confidence</h1>
          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-sm-7 p-3 p-sm-5">
          <img
            src="assets/ecosystem.png"
            alt="EcoSystemImage"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a
              href="/products"
              className="mx-5"
              style={{ textDecoration: "none" }}
            >
              Explore our products <i class="fa-solid fa-long-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo <i class="fa-solid fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

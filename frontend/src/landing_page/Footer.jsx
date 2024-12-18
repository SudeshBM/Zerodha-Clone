import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-12 col-sm-3">
            <img src="assets/logo.svg" alt="Logo" style={{ width: "70%" }} />
            <div className="text-muted mt-4">
              <p className="mb-4">
                &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
              </p>
              <div className="pe-4">
                {/* <a
                  href="https://linkedin.com/in/ratnesh1253/"
                  className="text-decoration-none text-dark"
                >
                  <i
                    class="fa-brands fa-linkedin-in"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://x.com/ratnesh1253"
                  className="text-decoration-none text-dark"
                >
                  <i
                    class="fa-brands fa-x-twitter"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://www.instagram.com/ratnesh.1253/"
                  className="text-decoration-none text-dark"
                >
                  <i
                    class="fa-brands fa-instagram"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>

                <a
                  href="https://wa.me/918975028015"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <i
                    class="fa-brands fa-whatsapp"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://t.me/ratnesh1253"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <i
                    class="fa-brands fa-telegram"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="text-decoration-none text-dark"
                >
                  <i
                    class="fa-brands fa-square-facebook"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a>
                <a
                  href="https://youtube.com/"
                  className="text-decoration-none text-dark"
                >
                  <i
                    class="fa-brands fa-youtube"
                    style={{ margin: "10px", fontSize: "20px" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3">
            <p className="text-muted fs-5 mt-3 mt-sm-0">Company</p>
            <a href="/about" style={{ textDecoration: "none", color: "grey" }}>
              About
            </a>
            <br />
            <a
              href="/products"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Products
            </a>
            <br />
            <a
              href="/pricing"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Pricing
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Referral programme
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Careers
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Zerodha.tech
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Press & media
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Zerodha Cares (CSR)
            </a>
          </div>
          <div className="col-12 col-sm-3">
            <p className="text-muted fs-5 mt-3 mt-sm-0">Support</p>
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Contact us
            </a>
            <br />
            <a
              href="/support"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Support portal
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              List of charges
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Downloads & resources
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Videos
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Market overview
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              How to file a complaint?
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Status of your complaints
            </a>
          </div>
          <div className="col-12 col-sm-3">
            <p className="text-muted fs-5 mt-3 mt-sm-0">Account</p>
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Open an account
            </a>
            <br />
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              Fund transfer
            </a>
          </div>
        </div>
        <div className="text-muted mt-5" style={{ fontSize: "12px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary". Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <p className="text-center">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              NSE
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              BSE
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              MCX
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Terms & conditions
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Policies & procedures
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Privacy policy
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Disclosure
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              For investore's attention
            </a>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "grey",
                fontSize: "14px",
                marginRight: "20px",
              }}
            >
              Investor charter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

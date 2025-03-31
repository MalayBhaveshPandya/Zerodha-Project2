import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="/media/images/MALAY IMAGE.jpg"
            style={{ borderRadius: "100%", width: "80%" }}
          />
          <h4 className="mt-5">Malay Bhavesh Pandya</h4>
          <h6>Web Developer</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Malay bootstrapped and founded Zerodha in 2025 to overcome the
            hurdles he faced. Today, Zerodha has changed the landscape of the
            Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing cricket is his zen. </p>
          <p>
            Connect on <a href="#">Homepage / </a>
            <a href="#">TradingQnA /</a> <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

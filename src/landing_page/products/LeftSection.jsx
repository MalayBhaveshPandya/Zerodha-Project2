import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  teyDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} alt="Product Image" className="p-5" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={teyDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3 mb-5">
            <a href={googlePlay}>
              <img src={googlePlay} alt="Google Play Badge" />
            </a>
            <a href={appStore}>
              <img
                src={appStore}
                alt="App Store Badge"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

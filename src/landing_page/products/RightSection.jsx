import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6 ">
          <img src={imageUrl} alt="Product Image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

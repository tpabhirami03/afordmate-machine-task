import React from "react";

const FeatureItem = ({ img, text }) => {
  return (
    <div className="feature-item">
      <img src={img} alt="feature image" />
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;

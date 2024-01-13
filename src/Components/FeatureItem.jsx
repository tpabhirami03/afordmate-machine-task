import React from "react";

const FeatureItem = ({ img, text }) => {
  return <React.Fragment>
     <div className="feature-item">
        <img src={img} alt="feature image" />
        <p>{text}</p>
     </div>
  </React.Fragment>;
};

export default FeatureItem;

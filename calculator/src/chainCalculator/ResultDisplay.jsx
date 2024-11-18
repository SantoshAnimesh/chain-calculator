import React from "react";
// import "./ResultDisplay.css";

const ResultDisplay = ({ result }) => {
  return (
    <div className="final-output-container">
      <p className="final-output-tag">Final Output y</p>
      <p className="final-output-val">{result}</p>
    </div>
  );
};

export default React.memo(ResultDisplay);

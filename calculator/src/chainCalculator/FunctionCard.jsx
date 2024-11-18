import React from "react";

const FunctionCard = ({ index, equation, onChange, result,execution }) => {
  return (
    <div className="function-card">
      <h3>Function {index + 1}</h3>
      <span>Equation</span>
      <input
      style={{width:"94%"}}
        type="text"
        value={equation}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter equation (e.g., x+2)"
      />
      <span>Next Function</span>
      <select disabled className="function-disabled">
        <option>{index === 2 ? "-" : `Function : ${index < 2 ? execution[index+1] : execution[index]}`}</option>
      </select>
    </div>
  );
};

export default React.memo(FunctionCard);
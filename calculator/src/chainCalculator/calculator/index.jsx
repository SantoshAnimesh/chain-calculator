
import React, { useReducer, useCallback, useMemo } from "react";
import FunctionCard from "../FunctionCard.jsx";
import ResultDisplay from "../ResultDisplay.jsx";
import { initialState, reducer } from "../store/calculatorReducer.js";
const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleInputChange = useCallback((e) => {
      const value = parseFloat(e.target.value);
      dispatch({ type: "SET_INPUT", payload: value });
      dispatch({ type: "CALCULATE_RESULTS" });
    }, []);
  
    const handleFunctionChange = useCallback((index, value) => {
      dispatch({ type: "SET_FUNCTION", index, payload: value });
      dispatch({ type: "CALCULATE_RESULTS" });
    }, []);
  
    const result = useMemo(() => state.output, [state.output]);
  
    return (
      <div className="app">
        <h1>Function Chain Calculator</h1>
        <div className="input-section">
          <label>Initial Value (x):</label>
          <input
            type="number"
            value={state.inputValue}
            onChange={handleInputChange}
            placeholder="Enter initial value"
          />
        </div>
        <div className="card-container">
          {state.functions.map((fn, index) => (
            <React.Fragment key={index}>
              <FunctionCard
                index={index}
                equation={fn}
                execution={state.execution}
                onChange={(value) => handleFunctionChange(index, value)}
                result={state.output}
              />
            </React.Fragment>
          ))}
        </div>
        <ResultDisplay result={result} />
      </div>
    );
  };
  
  export default React.memo(Calculator);
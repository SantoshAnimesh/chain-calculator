
export const initialState = {
    inputValue: 2,
    functions: ["x", "x", "x", "x", "x"], 
    results: [0, 0, 0, 0, 0],
    execution: [1,2,4,5,3],
    output :0,
  };
  
  export function reducer(state, action) {
    switch (action.type) {
      case "SET_INPUT":
        return { ...state, inputValue: action.payload };
      case "SET_FUNCTION":
        const updatedFunctions = [...state.functions];
        updatedFunctions[action.index] = action.payload;
        return { ...state, functions: updatedFunctions };
      case "CALCULATE_RESULTS":
        const { results, output } =  calculateResults(state.inputValue, state.functions,state.execution,state.inputValue);
        return { ...state, results ,output};
      default:
        return state;
    }
  }
  

  export function calculateResults(inputValue, functions, execution,initialValue) {
    let results = [];
    let currentValue = inputValue;
    functions.forEach((fn) => {
      try {
        const equation = fn.replace(/x/g, currentValue.toString());
        currentValue = eval(equation);
        results.push(currentValue);
      } catch (error) {
        results.push(0); 
      }
    });
  
    const output = execution.reduce((acc, val) => {
      try {
        const x = acc; 
        const equation = functions[val - 1]?.replace(/x/g, x.toString()); 
        if (!equation) throw new Error("Invalid function index");
        const value = eval(equation); 
        return value; 
      } catch (error) {
        console.error("Error in execution reduce:", val, error);
        return acc; 
      }
    }, initialValue);
  
    return { results, output };
  }
  
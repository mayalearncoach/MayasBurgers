const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT" || action.type === "ADD_FIVE") {
    return {
      counter: state.counter + action.value,
    };
  }
  if (action.type === "SUB_FIVE" || action.type === "DECREMENT") {
    return {
      counter: state.counter - action.value,
    };
  }
  if (action.type === "ZERO") {
    return {
      counter: action.value,
    };
  }

  return state;
};

export default reducer;

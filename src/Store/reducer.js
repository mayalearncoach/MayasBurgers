const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
    case "ADD_FIVE":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "SUB_FIVE":
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "ZERO":
      return {
        ...state,
        counter: action.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter }),
      };
    case "DELETE_RESULT":
      break;
    default:
      break;
  }

  return state;
};

export default reducer;

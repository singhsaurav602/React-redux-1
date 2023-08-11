import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showOptions: true }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showOptions: state.showOptions };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showOptions: state.showOptions };
  }
  if (action.type === "Increment by 10") {
    return {
      counter: state.counter + action.number,
      showOptions: state.showOptions,
    };
  }

  if (action.type === "toggle") {
    return { showOptions: !state.showOptions, counter: state.counter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;

import classes from "./Counter.module.css";
import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import React from "react";
//we can also use useStore ... check it out
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const visible = useSelector((state) => state.showOptions);

  const dispatch = useDispatch();

  // const toggleOptionsHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {visible && (
        <div>
          <button
            onClick={() => dispatch({ type: "increment", showOptions: true })}
          >
            Increment
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "Increment by 10",
                number: 10,
                showOptions: true,
              })
            }
          >
            Increase by 10
          </button>
          <button
            onClick={() => dispatch({ type: "decrement", showOptions: true })}
          >
            Decrement
          </button>
        </div>
      )}
      <button onClick={() => dispatch({ type: "toggle" })}>
        {visible ? "Hide Options" : "Show Options"}
      </button>
    </main>
  );
};

export default Counter;

/*----------------------------Redux in class- based component---------------------------------------- */

// below function maps redux state to props which will be received by the class based component

// const mapStateToProps = (state) => {
//   return {
//     counterProp: state.counter,
//   };
// };

// below function is to map dispatch function to prop .. keys are prop names .. values are where action is performed
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counterProp}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler()}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

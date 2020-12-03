import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

import classes from "./Counter.css";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      case "zero":
        this.setState(() => {
          return { counter: 0 };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className={classes.Counter}>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onCounterIncrement}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onCounterDecrement}
        />
        <CounterControl label="Add 5" clicked={this.props.onCounterAddFive} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onCounterSubFive}
        />
        <CounterControl label="Set to 0" clicked={this.props.onCounterZero} />
        <hr />
        <button>Store Result</button>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

// Instructions on how the state, managed by Redux, should
// be mapped to the props of this component/container.
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCounterIncrement: () =>
      dispatch({
        type: "INCREMENT",
        value: 1,
      }),
    onCounterDecrement: () =>
      dispatch({
        type: "DECREMENT",
        value: 1,
      }),
    onCounterAddFive: () =>
      dispatch({
        type: "ADD_FIVE",
        value: 5,
      }),
    onCounterSubFive: () =>
      dispatch({
        type: "SUB_FIVE",
        value: 5,
      }),
    onCounterZero: () =>
      dispatch({
        type: "ZERO",
        value: 0,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React, { Component } from "react";

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
        <CounterOutput value={this.state.counter} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler("inc")}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
        <CounterControl
          label="Set to 0"
          clicked={() => this.counterChangedHandler("zero")}
        />
      </div>
    );
  }
}

export default Counter;

import React from "react";

import classes from "./BuildControl.css";

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.ingredientLabel}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabledButton}
    >
      {" "}
      -{" "}
    </button>
    <button className={classes.More} onClick={props.added}>
      {" "}
      +{" "}
    </button>
  </div>
);

export default BuildControl;

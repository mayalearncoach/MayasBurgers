import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <h4 className={classes.PriceText}>
      Current Price:{" "}
      <span className={classes.MoneyText}>${props.price.toFixed(2)}</span>
    </h4>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        ingredientLabel={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabledButton={props.disabledButtons[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      Purchase
    </button>
  </div>
);

export default BuildControls;

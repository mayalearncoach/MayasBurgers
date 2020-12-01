import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link={"/"} active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link={"/"}>Checkout</NavigationItem>
    <NavigationItem link={"/counter"}>Counter</NavigationItem>
  </ul>
);

export default NavigationItems;

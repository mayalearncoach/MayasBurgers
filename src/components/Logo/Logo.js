import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Yummy Burger Logo" />
    <div className={classes.LogoText}> Yummy Burgers</div>
  </div>
);

export default Logo;

import React from "react";
import propTypes from "prop-types";

import classes from "./ToolBar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const ToolBar = (props) => {
  const { openBarNav } = props;

  return (
    <header className={classes.ToolBar}>
      <div>
        <FontAwesomeIcon
          className={classes.HamburgerBars}
          color={"white"}
          icon={faBars}
          onClick={openBarNav}
        />
      </div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

ToolBar.propTypes = {
  openBarNav: propTypes.func,
};

export default ToolBar;

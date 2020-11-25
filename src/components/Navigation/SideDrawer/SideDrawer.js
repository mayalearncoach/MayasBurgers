import React from "react";
import propTypes from "prop-types";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../HOC/Aux";

const SideDrawer = (props) => {
  const { opened, close } = props;

  // Animations
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.opened) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={opened} clicked={close} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

SideDrawer.propTypes = {
  opened: propTypes.bool,
  close: propTypes.func,
};

export default SideDrawer;

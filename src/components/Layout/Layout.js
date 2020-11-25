import React, { useState } from "react";

import Aux from "../../HOC/Aux";
import classes from "./Layout.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  // States
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  // Methods
  const sideDrawerClosedHandle = () => {
    setShowSideDrawer(false);
  };
  const sideDrawerOpenedHandle = () => {
    setShowSideDrawer(true);
  };

  return (
    <Aux>
      <ToolBar openBarNav={sideDrawerOpenedHandle} />
      <SideDrawer opened={showSideDrawer} close={sideDrawerClosedHandle} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;

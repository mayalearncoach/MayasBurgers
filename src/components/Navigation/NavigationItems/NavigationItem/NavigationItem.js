import React from "react";
import propTypes from "prop-types";

import classes from "./NavigationItem.css";

const NavigationItem = (props) => {
  const { active, link } = props;

  return (
    <li className={classes.NavigationItem}>
      <a href={link} className={active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.propTypes = {
  active: propTypes.bool,
  link: propTypes.string,
};

export default NavigationItem;

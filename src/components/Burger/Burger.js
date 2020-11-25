import React from "react";
import propTypes from "prop-types";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const { ingredients } = props;

  let transformedIngredients = Object.keys(ingredients)
    .map((ingredientKey) => {
      return [...Array(ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + 1} type={ingredientKey} />
        );
      });
    })
    .reduce((rootArray, currVal) => {
      return rootArray.concat(currVal);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: propTypes.array,
};

export default Burger;

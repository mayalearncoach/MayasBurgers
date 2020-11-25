import React, { useState } from "react";

import Aux from "../../HOC/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../Axios/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

// Global constants
const INGREDIENT_PRICES = {
  salad: 1.5,
  cheese: 3.99,
  meat: 5.5,
  bacon: 3.8,
};

const BurgerBuilder = () => {
  // States
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchaseable, setPurchaseable] = useState(false);
  const [purchaseMode, setPurchaseMode] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  const updatePurchaseState = (updatedIngredients) => {
    const ingredientSum = Object.keys(updatedIngredients)
      .map((igKey) => {
        return updatedIngredients[igKey];
      })
      .reduce((newSum, element) => {
        return newSum + element;
      }, 0);
    setPurchaseable(ingredientSum > 0);
  };

  const addIngredientHandler = (ingredientType) => {
    const oldIngredientCount = ingredients[ingredientType];
    const updatedIngredientCount = oldIngredientCount + 1;

    // Updating ingredients state in an immutable way
    const updatedIngredientList = {
      ...ingredients,
    };
    updatedIngredientList[ingredientType] = updatedIngredientCount;
    setIngredients(updatedIngredientList);

    // Price
    const priceAddition = INGREDIENT_PRICES[ingredientType];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    setTotalPrice(newPrice);

    updatePurchaseState(updatedIngredientList);
  };

  const removeIngredientHandler = (ingredientType) => {
    const oldIngredientCount = ingredients[ingredientType];
    if (oldIngredientCount <= 0) {
      return; // Cannot have less than 0 of an ingredient type
    }
    const updatedIngredientCount = oldIngredientCount - 1;

    // Updating ingredients state in an immutable way
    const updatedIngredientList = {
      ...ingredients,
    };
    updatedIngredientList[ingredientType] = updatedIngredientCount;
    setIngredients(updatedIngredientList);

    // Price
    const priceSubtraction = INGREDIENT_PRICES[ingredientType];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    setTotalPrice(newPrice);

    updatePurchaseState(updatedIngredientList);
  };

  // Handlers
  const purchaseHandler = () => {
    setPurchaseMode(true);
  };
  const purchaseCancelHandler = () => {
    setPurchaseMode(false);
  };
  const purchaseContinueHandler = () => {
    // Send burger order data to back-end
    setLoading(true);

    const order = {
      ingredients: ingredients,
      price: totalPrice, // Would not do this in real world, calculate cost in back-end instead.
      customer: {
        name: "Human Being",
        address: {
          number: "36",
          street: "Cool Street",
          zipCode: "0630",
          country: "New Zealand",
        },
        email: "humanbeing@protonmail.com",
      },
      deliveryMethod: "pickup",
    };

    axios
      .post("/orders.json", order)
      .then(setLoading(false))
      .catch(setLoading(false));
  };

  const disabledInfo = {
    ...ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let orderSummary = (
    <OrderSummary
      ingredients={ingredients}
      price={totalPrice}
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
    />
  );

  if (loading) {
    orderSummary = <Spinner />;
  }

  // JSX return
  return (
    <Aux>
      <Modal show={purchaseMode} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabledButtons={disabledInfo}
        purchaseable={purchaseable}
        ordered={purchaseHandler}
      />
    </Aux>
  );
};

export default BurgerBuilder;

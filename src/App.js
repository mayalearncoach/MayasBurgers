import React from "react";
import { Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Counter from "./containers/Counter/Counter";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/counter" component={Counter} />
      </Layout>
    </div>
  );
}

export default App;

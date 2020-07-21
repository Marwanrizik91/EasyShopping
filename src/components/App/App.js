import React from 'react';
import './App.css';
import Header from '../Header'
import Home from '../screens/home'
import { routes } from "../../constants";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={routes.home}>
          <Home/>
        </Route>

        <Route exact path={routes.merchants}>
          <h1>these are our merchants</h1>
        </Route>

        <Route exact path={routes.coupons}>
          <h1>coupons</h1>
        </Route>

        <Route exact path={routes.community}>
          <h1>community</h1>
        </Route>

        <Route exact path={routes.sizeGuide}>
          <h1>size guide</h1>
        </Route>

        <Route exact path={routes.blog}>
          <h1>blog</h1>
        </Route>


      </Switch>
    </div>
  );
}

export default App;

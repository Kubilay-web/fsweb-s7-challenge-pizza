import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Order from "./components/Order/Order";
import Home from "./components/Home/Home";
import Success from "./components/Success/Success";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order}/>
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
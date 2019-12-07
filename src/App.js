import React from "react";
import HomePage from "./pages/homepage/HomePage";
import {
  Route,
  Switch
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
      </Switch>
    </div>
  );
}

export default App;

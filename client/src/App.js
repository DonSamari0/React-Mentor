import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Layouts
import Navbar from "./components/layout/Navbar";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/courses" component={Courses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

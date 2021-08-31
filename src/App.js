import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Courses from "./pages/Courses";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/course" component={Course} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Lesson from "./pages/Lesson";
import Courses from "./pages/Courses";
import Landing from "./pages/Landing";
import Stories from "./pages/Stories";
import Exercises from "./pages/Exercises";
import Course from "./components/Course";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/courses" component={Courses} />
          <Route path="/stories" component={Stories} />
          <Route path="/exercises" component={Exercises} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

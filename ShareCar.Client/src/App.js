//@flow
import React, { Component } from 'react';
import './App.css';
import { MainLayout } from "./components/Layouts/MainLayout";
import { TripViewLayout } from "./components/Layouts/TripViewLayout";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component<{}> {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path = "/" component={MainLayout}></Route>
            <Route path="/trip_view" component={TripViewLayout}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

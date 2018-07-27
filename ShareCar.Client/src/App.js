//@flow
import React, { Component } from 'react';
import './App.css';
import { LoginPageLayout } from "./components/Layouts/LoginPageLayout";
import { MainLayout } from "./components/Layouts/MainLayout";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component<{}> {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path = "/" component={MainLayout}></Route>
            <Route path="/login" component={LoginPageLayout}></Route>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';

import { MainLayout } from "./components/Layouts/MainLayout";
import { Statistics } from "./components/Layouts/Statistics";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
 render() {
   return (
     <Router>
       <div>
       <Route exact path = "/" component={MainLayout}></Route>
       <Route path="/statistics" component={Statistics}></Route>
       </div>
       </Router>
   );
 }
}

export default App
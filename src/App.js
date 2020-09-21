import React from 'react';
import logo from './logo.svg';
import './App.css';

import FrontPage from "./Components/Pages/FrontPage"
import ContactPage from "./Components/Pages/ContactPage"
import AboutPage from "./Components/Pages/AboutPage"
import PortfolioPage from "./Components/Pages/PortfolioPage"

import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;

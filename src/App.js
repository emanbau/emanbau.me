import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Portfolio'>
            <Portfolio />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
      <HomePage />
    </div>
  );
}

export default App;

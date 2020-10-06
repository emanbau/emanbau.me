import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path='/' />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import './components/HomePage.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cube } from 'styled-loaders-react';
import { useState, useEffect } from 'react';


function App() {

  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 7000)
  })

  return (
    <div className='appContainer'>
      {loading === true ? <div className='loadingScreenContainer'> <div className='loadingScreen'> <Cube color='#BC8BD8' /> </div> </div>:
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
          <HomePage />
        </Router>
      </div>
      }
    </div>
  );
}

export default App;

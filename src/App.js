//rfce
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Places from './components/pages/Places';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/places' component={Places} />
        <Route path='/contact-us' component={ContactUs} />
      </Switch>
      </Router>
    </>
  );
}

export default App;

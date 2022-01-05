import React from 'react';
import { BrowserRoutes as Router, Route, Switch } from 'react-router-dom';

import About from './components/About';
import Join from './components/Join';
import Schedule from './components/Schedule';
import Nav from './components/Nav';
import footballImages from './components/Images';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About slides={footballImages}></About>
        <Join></Join>
        <Schedule></Schedule>
      </main>
    </div>
  );
}

export default App;

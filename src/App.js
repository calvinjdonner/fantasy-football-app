import React from 'react';
import About from './components/About';
import Join from './components/Join';
import Schedule from './components/Schedule';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Join></Join>
        <Schedule></Schedule>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { Analytics } from './services';
import './App.scss';

function App() {

  // Start tracking pageviews/events
  Analytics.initialize();

  const loggedIn = true;

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <Sidebar loggedIn={loggedIn} />
        <Main loggedIn={loggedIn} />
      </div>
    </Router>
  );
}

export default App;

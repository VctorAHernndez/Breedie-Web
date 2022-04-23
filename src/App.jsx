import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

import './App.scss';

const App = () => {
  // TODO: Start tracking pageviews/events
  // Analytics.initialize();

  const loggedIn = true;

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} />
        <div>
          <Sidebar loggedIn={loggedIn} />
          <Main loggedIn={loggedIn} />
        </div>
      </div>
    </Router>
  );
};

export default App;

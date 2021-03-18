import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
import BoardContainer from '../BoardContainer';

import './App.css';

const App = (props) => {
  const { cableApp } = props;
  return (
    <main>
      <Router>
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route
          path="/boards/:id"
        >
          <BoardContainer cableApp={cableApp} />
        </Route>
      </Router>
    </main>
  );
};

export default App;

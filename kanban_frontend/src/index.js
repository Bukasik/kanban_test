import React from 'react';
import ReactDOM from 'react-dom';
import actiocable from 'actioncable';
import App from './components/App';

const CableApp = {};
CableApp.cable = actiocable.createConsumer('ws://localhost:8080/cable');

ReactDOM.render(
  <App cableApp={CableApp.cable} />,
  document.getElementById('root'),
);

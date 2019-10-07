import React from 'react';
import ReactDOM from 'react-dom';

// name-based import
import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);

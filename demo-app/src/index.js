import React from 'react';
import ReactDOM from 'react-dom';

// name-based import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

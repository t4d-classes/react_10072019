import React from 'react';
import ReactDOM from 'react-dom';

// name-based import
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'orange' },
  { id: 2, name: 'green' },
  { id: 3, name: 'hot pink' },
  { id: 4, name: 'red' },
];

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

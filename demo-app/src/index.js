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

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 100000 },
];

ReactDOM.render(
  // React.createElement(ColorTool),
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

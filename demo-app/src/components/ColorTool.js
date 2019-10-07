import React from 'react';

export const ColorTool = () => {

  // array of objects
  const colors = [
    { id: 1, name: 'orange' },
    { id: 2, name: 'green' },
    { id: 3, name: 'hot pink' },
    { id: 4, name: 'red' },
  ];

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.map( (color) =>
        <li key={color.id}>{color.name}</li>)}
    </ul>
  </>;

};
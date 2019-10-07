import React from 'react';

export const ColorTool = (props) => {

  // array of objects


  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {props.colors.map( (color) =>
        <li key={color.id}>{color.name}</li>)}
    </ul>
  </>;

};
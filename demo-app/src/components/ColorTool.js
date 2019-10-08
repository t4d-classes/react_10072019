import React, { useState } from 'react';

import { colorsPropType } from '../propTypes/colorPropType';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { UnorderedList } from './UnorderedList';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState(initialColors.concat());

  const [ colorForm, setColorForm ] = useState({
    color: '',
    hexcode: '',
  });

  const change = (e) => {
    // update the state, trigger the re-render, and
    // update the newColor variable on the re-render
    setColorForm({
      ...colorForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  const addColor = () => {

    setColors(colors.concat({
      // ...colorForm,
      name: colorForm.color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

  };
  
  console.log(initialColors);
  console.log(colors);

  return <>
    <ToolHeader headerText="Color Tool" />
    <UnorderedList items={colors} />
    <form>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={colorForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="hexcode-input">HexCode:</label>
        <input type="number" id="hexcode-input" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
    <ToolFooter companyName="A Cool Company, Inc." />
  </>;
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};

/* <UnorderedList
items={['cricket','badminton','table tennis','hockey']}
keyField={sport => sport}
contentField={sport => sport.toUpperCase()}
/> */

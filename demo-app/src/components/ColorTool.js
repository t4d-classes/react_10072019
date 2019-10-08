import React, { useState } from 'react';

import { colorsPropType } from '../propTypes/colorPropType';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { UnorderedList } from './UnorderedList';
import { ColorForm } from './ColorForm';

export const ColorTool = ({ colors: initialColors }) => {

  const [ colors, setColors ] = useState(initialColors.concat());

  const addColor = (color) => {
    setColors(colors.concat({
      name: color.color,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <UnorderedList items={colors} />
    <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
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

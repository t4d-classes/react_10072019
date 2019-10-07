import React from 'react';
import PropTypes from 'prop-types';

export const ColorTool = ({ colors }) => {

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {(!colors || colors.length === 0)
        ? <li>There are no colors.</li>
        : colors.map( (color) =>
            <li key={color.id}>{color.name}</li>)}
    </ul>
  </>;

};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
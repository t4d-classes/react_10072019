import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ColorListItem = styled.li`
  text-decoration: underline;
  ${props => css`
    color: ${props.children.replace(' ', '')}
  `}
`;

export const ColorTool = ({ colors }) => {

  return <>
    <header>
      <h1 className="info" style={ { fontFamily: 'arial' } }>Color Tool</h1>
    </header>
    <ul>
      {(!colors || colors.length === 0)
        ? <li>There are no colors.</li>
        : colors.map( (color) =>
            <ColorListItem key={color.id}>{color.name}</ColorListItem>)}
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
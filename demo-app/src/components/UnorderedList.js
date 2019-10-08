import React from 'react';
import PropTypes from 'prop-types';

export const UnorderedList = ({ items }) => {

  return <ul>
    {(!items || items.length === 0)
      ? <li>There are no items.</li>
      : items.map( (item) => <li key={item.id}>
          {item.name}
        </li>)}
  </ul>;

};

UnorderedList.defaultProps = {
  items: [],
};

UnorderedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
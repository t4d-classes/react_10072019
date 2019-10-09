import React from 'react';
import PropTypes from 'prop-types';

export const UnorderedList2 = (props) => {

  const {
    items,
    emptyListMessage,
    keyField,
    contentField,
  } = props;

  return <ul>
    {(!items || items.length === 0)
      ? <li>{emptyListMessage}</li>
      : items.map( (item) => <li key={item[keyField]}>
          {item[contentField]}
        </li>)}
  </ul>;

};

UnorderedList.defaultProps = {
  items: [],
  emptyListMessage: 'There are no items.',
  keyField: 'id',
  contentField: 'name',
};

UnorderedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
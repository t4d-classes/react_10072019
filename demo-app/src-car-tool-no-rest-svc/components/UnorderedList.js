import React from 'react';
// import PropTypes from 'prop-types';

export const UnorderedList = (props) => {

  const {
    items,
    emptyListMessage,
    keyField,
    contentField,
  } = props;

  return <ul>
    {(!items || items.length === 0)
      ? <li>{emptyListMessage}</li>
      : items.map( (item) => <li key={keyField(item)}>
          {contentField(item)}
        </li>)}
  </ul>;

};

UnorderedList.defaultProps = {
  items: [],
  emptyListMessage: 'There are no items.',
  keyField: item => item.id,
  contentField: item =>
    item.name.slice(0,1).toUpperCase() + item.name.slice(1),
};

// UnorderedList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
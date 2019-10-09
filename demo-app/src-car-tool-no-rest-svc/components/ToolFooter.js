import React from 'react';
import PropTypes from 'prop-types';

export const ToolFooter = ({ companyName }) => {

  return <footer>
    <small>
      {new Date().getFullYear()}
      {companyName}
    </small>
  </footer>

};

ToolFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
};
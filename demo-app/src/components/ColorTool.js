import React from 'react';

import { colorsPropType } from '../propTypes/colorPropType';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { UnorderedList } from './UnorderedList';

export const ColorTool = ({ colors }) => {

  return <>
    <ToolHeader headerText="Color Tool" />
    <UnorderedList items={colors} />
    <ToolFooter companyName="A Cool Company, Inc." />
  </>;
};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};
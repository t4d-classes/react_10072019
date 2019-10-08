import React from 'react';

import { carsPropType } from '../propTypes/carPropTypes';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';

export const CarTool = ({ cars }) => {

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} />
    <ToolFooter companyName="A Cool Company, Inc." />
  </>;

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};
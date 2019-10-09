import React from 'react';

import { carsPropType } from '../propTypes/carPropTypes';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId, onAppendCar, onReplaceCar,
  onDeleteCar, onEditCar, onCancelCar,
}) => {

  const carTableProps = {
    cars,
    editCarId,
    onDeleteCar,
    onEditCar,
    onSaveCar: onReplaceCar,
    onCancelCar,
  };

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable {...carTableProps} />
    <CarForm buttonText="Add Car" onSubmitCar={onAppendCar} />
    <ToolFooter companyName="A Cool Company, Inc." />
  </>;

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};
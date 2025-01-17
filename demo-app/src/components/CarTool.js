import React, { useEffect } from 'react';

import { carsPropType } from '../propTypes/carPropTypes';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId, onAppendCar, onReplaceCar,
  onDeleteCar, onEditCar, onCancelCar, onRefreshCars,
}) => {

  useEffect(() => {
    onRefreshCars().then(cars => { console.log('downloaded cars: ', cars) })
  }, [ onRefreshCars ]);

  const carTableProps = {
    cars,
    editCarId,
    onDeleteCar,
    onEditCar,
    onSaveCar: onReplaceCar,
    onCancelCar,
    onRefreshCars,
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
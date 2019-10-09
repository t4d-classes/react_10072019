import React, { useState } from 'react';

import { carsPropType } from '../propTypes/carPropTypes';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({ cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = car => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const replaceCar = car => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const carTableProps = {
    cars,
    editCarId,
    onDeleteCar: deleteCar,
    onEditCar: setEditCarId,
    onSaveCar: replaceCar,
    onCancelCar: () => setEditCarId(-1),
  };

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable {...carTableProps} />
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    <ToolFooter companyName="A Cool Company, Inc." />
  </>;

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};
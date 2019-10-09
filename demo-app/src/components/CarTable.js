import React from 'react';

import { carsPropType } from '../propTypes/carPropTypes';
import { CarViewRow } from '../components/CarViewRow';
import { CarEditRow } from '../components/CarEditRow';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Body Color</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.map(car => editCarId === car.id
          ? <CarEditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />)}
    </tbody>
  </table>;

};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
};
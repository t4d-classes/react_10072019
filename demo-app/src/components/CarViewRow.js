import React from 'react';

import { carPropType } from '../propTypes/carPropTypes';

export const CarViewRow = ({ car }) => {

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
  </tr>;

};

CarViewRow.propTypes = {
  car: carPropType.isRequired,
};
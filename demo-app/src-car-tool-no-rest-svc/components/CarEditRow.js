import React, { useState } from 'react';

export const CarEditRow = ({
  car,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  const [carEditForm, setCarEditForm ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = e => {
    setCarEditForm({
      ...carEditForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" name="make" value={carEditForm.make} onChange={change} /></td>
    <td><input type="text" name="model" value={carEditForm.model} onChange={change} /></td>
    <td><input type="number" name="year" value={carEditForm.year} onChange={change} /></td>
    <td><input type="text" name="color" value={carEditForm.color} onChange={change} /></td>
    <td><input type="number" name="price" value={carEditForm.price} onChange={change} /></td>
    <td>
      <button type="button" onClick={() => saveCar({ ...carEditForm, id: car.id })}>Save</button>
      <button type="button" onClick={cancelCar}>Cancel</button>
    </td>
  </tr>;
};


export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';

export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';
export const APPEND_CAR_DONE = 'APPEND_CAR_DONE';

export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
export const DELETE_CAR_DONE = 'DELETE_CAR_DONE';

export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE = 'REPLACE_CAR_DONE';

export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST });
export const createRefreshCarsDoneAction = cars => ({ type: REFRESH_CARS_DONE, payload: { cars } });

export const refreshCars = () => {

  return async dispatch => {

    dispatch(createRefreshCarsRequestAction());

    const res = await fetch('http://localhost:3010/cars');
    const cars = await res.json();

    dispatch(createRefreshCarsDoneAction(cars));

    return cars;
  };
};

export const createAppendCarRequestAction = car => ({ type: APPEND_CAR_REQUEST, payload: { car } });
export const createAppendCarDoneAction = car => ({ type: APPEND_CAR_DONE, payload: { car } });


export const appendCar = (car) => {

  return async dispatch => {

    dispatch(createAppendCarRequestAction(car));

    const res = await fetch('http://localhost:3010/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    const savedCar = await res.json();

    dispatch(createAppendCarDoneAction(savedCar));
    dispatch(refreshCars());

    return car;
  };
};


export const createDeleteCarRequestAction = carId => ({ type: DELETE_CAR_REQUEST, payload: { carId } });
export const createDeleteCarDoneAction = carId => ({ type: DELETE_CAR_DONE, payload: { carId } });

export const deleteCar = (carId) => {

  return async dispatch => {

    dispatch(createDeleteCarRequestAction(carId));

    await fetch(`http://localhost:3010/cars/${encodeURIComponent(carId)}`, {
      method: 'DELETE',
    });

    dispatch(createDeleteCarDoneAction(carId));
    dispatch(refreshCars());
  };
};


export const createReplaceCarRequestAction = car => ({ type: REPLACE_CAR_REQUEST, payload: { car } });
export const createReplaceCarDoneAction = car => ({ type: REPLACE_CAR_DONE, payload: { car } });

export const replaceCar = (car) => {

  return async dispatch => {

    dispatch(createReplaceCarRequestAction(car));

    await fetch(`http://localhost:3010/cars/${encodeURIComponent(car.id)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    dispatch(createReplaceCarDoneAction(car));
    dispatch(refreshCars());
  };
};


export const createEditCarAction = carId => ({ type: EDIT_CAR, payload: { carId } });
export const createCancelCarAction = () => ({ type: CANCEL_CAR });
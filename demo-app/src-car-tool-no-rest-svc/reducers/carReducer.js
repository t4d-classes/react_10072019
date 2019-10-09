import {
  APPEND_CAR, DELETE_CAR, REPLACE_CAR,
  EDIT_CAR, CANCEL_CAR,
} from '../actions/carActions';

export const carsReducer = (state = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 100000 },
], action) => {

  switch (action.type) {
    case APPEND_CAR:
      return state.concat({
        ...action.payload.car,
        id: Math.max(...state.map(c => c.id), 0) + 1,
      });
    case REPLACE_CAR:
      const carIndex = state.findIndex(c => c.id === action.payload.car.id);
      const newCars = state.concat();
      newCars[carIndex] = action.payload.car;
      return newCars;
    case DELETE_CAR:
      return state.filter(c => c.id !== action.payload.carId)
    default:
      return state;
  }

};

export const editCarIdReducer = (state, action) => {

  switch (action.type) {
    case EDIT_CAR:
      return action.payload.carId;
    case APPEND_CAR:
    case REPLACE_CAR:
    case DELETE_CAR:
    case CANCEL_CAR:
      return -1;
    default:
      return state;
  }


}


export const carReducer = (state = {}, action) => {

  return {
    ...state,
    cars: carsReducer(state.cars, action),
    editCarId: editCarIdReducer(state.editCarId, action),
  }


};
import { combineReducers } from 'redux';

import {
  REFRESH_CARS_DONE,
  EDIT_CAR, CANCEL_CAR,
} from '../actions/carActions';

export const carsReducer = (state = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    default:
      return state;
  }

};

export const editCarIdReducer = (state, action) => {

  switch (action.type) {
    case EDIT_CAR:
      return action.payload.carId;
    case REFRESH_CARS_DONE:
    case CANCEL_CAR:
      return -1;
    default:
      return state;
  }


}


// export const carReducer = (state = {}, action) => {
//   return {
//     ...state,
//     cars: carsReducer(state.cars, action),
//     editCarId: editCarIdReducer(state.editCarId, action),
//   }
// };

export const carReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
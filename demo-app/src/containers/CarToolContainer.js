import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  refreshCars, appendCar, replaceCar, deleteCar,
  createEditCarAction, createCancelCarAction,
} from '../actions/carActions';
import { CarTool } from '../components/CarTool';

const mapStateToProps = ({ cars, editCarId }) => ({ cars, editCarId });

const mapDispatchToProps = dispatch => bindActionCreators({
  onRefreshCars: refreshCars,
  onAppendCar: appendCar,
  onReplaceCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: createEditCarAction,
  onCancelCar: createCancelCarAction,
}, dispatch);

const createCarToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);
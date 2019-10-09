import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAppendCarAction, createReplaceCarAction, createDeleteCarAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/carActions';
import { CarTool } from '../components/CarTool';

const mapStateToProps = ({ cars, editCarId }) => ({ cars, editCarId });

const mapDispatchToProps = dispatch => bindActionCreators({
  onAppendCar: createAppendCarAction,
  onReplaceCar: createReplaceCarAction,
  onDeleteCar: createDeleteCarAction,
  onEditCar: createEditCarAction,
  onCancelCar: createCancelCarAction,
}, dispatch);

const createCarToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CarToolContainer = createCarToolContainer(CarTool);
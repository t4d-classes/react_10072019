import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { calcResult } from '../computed/calcResult';
import {
  createClearAction, createDeleteHistoryItemAction, createAddAction,
  createSubtractAction, createMultiplyAction, createDivideAction
} from '../actions/calcActions';

import { CalcTool } from '../components/CalcTool';


const mapStateToProps = (state) => ({
  result: calcResult(state.history),
  history: state.history,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onClear: createClearAction,
  onDeleteHistoryItem: createDeleteHistoryItemAction,
  onAdd: createAddAction,
  onSubtract: createSubtractAction,
  onMultiply: createMultiplyAction,
  onDivide: createDivideAction,
}, dispatch);

const createCalcToolContainer = connect(mapStateToProps, mapDispatchToProps);

export const CalcToolContainer = createCalcToolContainer(CalcTool);
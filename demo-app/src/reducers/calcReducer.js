import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,
  DIVIDE_ACTION, DELETE_HISTORY_ITEM, CLEAR_ACTION,
} from '../actions/calcActions';

export const calcReducer = (state = { result: 0, history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        history: state.history.concat({
          opName: action.type,
          opValue: action.payload.value,
        }),
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        history: state.history.concat({ opName: action.type, opValue: action.payload.value }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
        history: [],
      };
    case DELETE_HISTORY_ITEM:
      return {
        ...state,
        history: state.history.filter( (_, index) => index !== action.payload.historyItemIndex ),
      };
    default:
      return state;
  }

};